/* cart.js */
(() => {
  const fmt = n => `$${(n).toFixed(2)}`;
  const getCart = () => JSON.parse(localStorage.getItem('cart') || '[]');          // [{id, qty}]
  const setCart = data => localStorage.setItem('cart', JSON.stringify(data));

  const el = s => document.querySelector(s);
  const cartList   = el('#cartList');
  const countSpan  = el('#cartCount');
  const tSubtotal  = el('#tSubtotal');
  const tDiscount  = el('#tDiscount');
  const tTax       = el('#tTax');
  const tTotal     = el('#tTotal');

  const COUPONS = {
    'SAVE10': {type:'percent', value:10},
    'WELCOME5': {type:'flat', value:5}
  };

  function findProduct(id){
    return (window.PRODUCTS||[]).find(p => p.id === id);
  }

  function line(p, qty){
    return (p?.price || 0) * qty;
  }

  function calcTotals(cart, couponCode){
    const subtotal = cart.reduce((s, row) => {
      const p = findProduct(row.id);
      return s + line(p, row.qty);
    }, 0);

    let discount = 0;
    const c = COUPONS[(couponCode||'').toUpperCase()];
    if (c){
      discount = (c.type === 'percent') ? subtotal * (c.value/100) : c.value;
      if (discount > subtotal) discount = subtotal;
    }

    const taxable = Math.max(0, subtotal - discount);
    const tax = taxable * 0.08; // 8% demo tax
    const total = taxable + tax;

    return {subtotal, discount, tax, total};
  }

  function render(){
    const cart = getCart();
    countSpan.textContent = `(${cart.reduce((s,r)=>s+r.qty,0)})`;

    if (!cart.length){
      cartList.innerHTML = `<div class="empty">Your cart is empty.</div>`;
      applyTotals();
      renderSaved();
      return;
    }

    cartList.innerHTML = cart.map(row => {
      const p = findProduct(row.id);
      if(!p) return '';
      const sellers = `${p.brand || 'Seller'} LLC`;
      const qtySel = Array.from({length:10}, (_,i)=>i+1)
        .map(n=>`<option ${n===row.qty?'selected':''}>${n}</option>`).join('');
      return `
        <div class="box cart-item" data-id="${p.id}">
          <img src="${p.img}" alt="">
          <div>
            <a class="item-title" href="product.html?id=${p.id}">${p.title}</a>
            <div class="item-meta">Seller: ${sellers} · ${p.category}</div>
            <div class="item-actions">
              <div class="qty">Qty:
                <select class="qtySelect">${qtySel}</select>
              </div>
              <div class="item-buttons">
                <button class="btn sm ghost saveLater">Save for later</button>
                <button class="btn sm remove">Remove</button>
              </div>
            </div>
          </div>
          <div class="item-price">${fmt(p.price * row.qty)}</div>
        </div>`;
    }).join('');

    // Bind events
    cartList.querySelectorAll('.qtySelect').forEach(sel=>{
      sel.addEventListener('change', e=>{
        const id = +e.target.closest('.cart-item').dataset.id;
        const cart = getCart();
        const item = cart.find(r=>r.id===id);
        if(item){ item.qty = +e.target.value; setCart(cart); render(); }
      });
    });
    cartList.querySelectorAll('.remove').forEach(btn=>{
      btn.addEventListener('click', e=>{
        const id = +e.target.closest('.cart-item').dataset.id;
        setCart(getCart().filter(r=>r.id!==id));
        render();
      });
    });
    cartList.querySelectorAll('.saveLater').forEach(btn=>{
      btn.addEventListener('click', e=>{
        const id = +e.target.closest('.cart-item').dataset.id;
        const saved = JSON.parse(localStorage.getItem('saved')||'[]');
        if(!saved.includes(id)) saved.push(id);
        localStorage.setItem('saved', JSON.stringify(saved));
        setCart(getCart().filter(r=>r.id!==id));
        render();
      });
    });

    applyTotals();
    renderSaved();
  }

  function applyTotals(){
    const code = (el('#coupon')?.value||'').trim();
    const {subtotal, discount, tax, total} = calcTotals(getCart(), code);
    tSubtotal.textContent = fmt(subtotal);
    tDiscount.textContent = `-${fmt(discount)}`;
    tTax.textContent = fmt(tax);
    tTotal.textContent = fmt(total);
  }

  // Saved for later / recommendations
  function renderSaved(){
    const wrap = el('#savedRail');
    const saved = JSON.parse(localStorage.getItem('saved')||'[]');
    let items = saved.map(id => (window.PRODUCTS||[]).find(p=>p.id===id)).filter(Boolean);

    // Fallback: recommend a few products
    if (!items.length) {
      items = (window.PRODUCTS||[]).slice(0,4);
    }

    wrap.innerHTML = items.slice(0, 8).map(p=>`
      <div class="saved-card">
        <a href="product.html?id=${p.id}">
          <img src="${p.img}" alt="">
          <div class="title">${p.title}</div>
        </a>
        <div class="price">${fmt(p.price)}</div>
        <button class="btn sm moveToCart" data-id="${p.id}">
          <i class="fa-solid fa-cart-plus"></i> Move to cart
        </button>
      </div>
    `).join('');

    wrap.querySelectorAll('.moveToCart').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const id = +btn.dataset.id;
        const cart = getCart();
        const item = cart.find(r=>r.id===id);
        if(item) item.qty += 1; else cart.push({id, qty:1});
        setCart(cart);
        localStorage.setItem('saved', JSON.stringify(saved.filter(x=>x!==id)));
        render();
      });
    });
  }

  // Buttons
  el('#applyCoupon')?.addEventListener('click', applyTotals);
  el('#clearCart')?.addEventListener('click', ()=>{
    setCart([]); render();
  });
  el('#checkoutBtn')?.addEventListener('click', ()=>{
    if (!getCart().length) { alert('Your cart is empty.'); return; }
    alert('This is a demo checkout. Hook your payment gateway here.');
  });

  render();
})();
