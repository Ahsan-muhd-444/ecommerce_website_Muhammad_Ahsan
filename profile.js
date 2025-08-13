// Avatar preview
const avatarInput = document.getElementById('avatar');
const avatarPreview = document.getElementById('avatarPreview');
avatarInput?.addEventListener('change', e => {
  const f = e.target.files?.[0];
  if (!f) return;
  if (f.size > 2 * 1024 * 1024) {
    alert('Please choose an image under 2MB.');
    avatarInput.value = '';
    return;
  }
  const url = URL.createObjectURL(f);
  avatarPreview.src = url;
});

// Show/hide passwords
document.querySelectorAll('.eye').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.eye;
    const input = document.getElementById(id);
    if (!input) return;
    input.type = (input.type === 'password') ? 'text' : 'password';
    btn.innerHTML = (input.type === 'password')
      ? '<i class="fa-regular fa-eye"></i>'
      : '<i class="fa-regular fa-eye-slash"></i>';
  });
});

// Demo fill for quick testing
document.getElementById('fillDemo')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('firstName').value = 'Aisha';
  document.getElementById('lastName').value = 'Khan';
  document.getElementById('email').value = 'aisha@example.com';
  document.getElementById('phone').value = '+92 300 0000000';
  document.getElementById('country').value = 'Pakistan';
  document.getElementById('city').value = 'Lahore';
  document.getElementById('address').value = 'Street 12, House 34';
  document.getElementById('password').value = 'Passw0rd!';
  document.getElementById('confirm').value = 'Passw0rd!';
  document.getElementById('terms').checked = true;
});

// Simple validation + save
const form = document.getElementById('profileForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  clearErrors();

  const data = {
    firstName: val('firstName'),
    lastName:  val('lastName'),
    email:     val('email'),
    phone:     val('phone'),
    country:   val('country'),
    city:      val('city'),
    address:   val('address'),
    avatar:    avatarPreview?.src || '',
    password:  val('password'),
    confirm:   val('confirm'),
    terms:     document.getElementById('terms').checked
  };

  // basic checks
  let ok = true;
  if (!data.firstName) err('firstName', 'Required');
  if (!data.lastName)  err('lastName',  'Required');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) err('email', 'Enter a valid email');
  if (!data.country) err('country', 'Please select your country');
  if (!data.password || data.password.length < 8) err('password', 'Minimum 8 characters');
  if (data.password !== data.confirm) err('confirm', 'Passwords do not match');
  if (!data.terms) { alert('Please agree to the Terms & Conditions.'); ok = false; }
  ok = document.querySelectorAll('.err:not(:empty)').length === 0 && ok;

  if (!ok) return;

  // Save to localStorage (simple demo persistence)
  const user = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    country: data.country,
    city: data.city,
    address: data.address,
    avatar: data.avatar
  };
  localStorage.setItem('userProfile', JSON.stringify(user));

  alert('Profile created! You are ready to shop.');
  window.location.href = 'index.html';
});

function val(id){ return (document.getElementById(id)?.value || '').trim(); }
function err(id, msg){
  const f = document.getElementById(id)?.closest('.field');
  if (!f) return;
  f.querySelector('.err').textContent = msg;
}
function clearErrors(){ document.querySelectorAll('.err').forEach(e=>e.textContent=''); }
