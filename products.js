// Shared product data for all pages
window.PRODUCTS = [
  {
  id: 1,
  title: "iPhone 14 - Midnight 128GB",
  brand: "Apple",
  category: "Smartphones",
  price: 799,
  oldPrice: 899,
  rating: 4,
  condition: "new",
  verified: true,
  orders: 321,
  shipping: "Free Shipping",
  img: "https://www.electrogas.pk/cdn/shop/files/Apple-iPhone-14-iPhone-14-Plus-purple_f54d85ea-3299-4802-a5e3-2e43efbe3097.jpg?v=1698178879",              // <- your attached photo
  images: [
    "https://www.electrogas.pk/cdn/shop/files/Apple-iPhone-14-iPhone-14-Plus-purple_f54d85ea-3299-4802-a5e3-2e43efbe3097.jpg?v=1698178879",                 // show this first in gallery too
    "https://www.electrogas.pk/cdn/shop/files/Apple-iPhone-14-iPhone-14-Plus-purple_f54d85ea-3299-4802-a5e3-2e43efbe3097.jpg?v=1698178879",
    "https://www.electrogas.pk/cdn/shop/files/Apple-iPhone-14-iPhone-14-Plus-purple_f54d85ea-3299-4802-a5e3-2e43efbe3097.jpg?v=1698178879",
    "https://www.electrogas.pk/cdn/shop/files/Apple-iPhone-14-iPhone-14-Plus-purple_f54d85ea-3299-4802-a5e3-2e43efbe3097.jpg?v=1698178879"
  ],
  desc: "A15 Bionic. 6.1-inch display.",
  specs: { Model: "#IP14-128", Style: "Slim", Size: "146.7 x 71.5 x 7.8mm", Memory: "128GB" }
},

  {
  id: 2,
  title: "Xiaomi Pad 5 - 6GB/128GB",
  brand: "Xiaomi",
  category: "Tablets",
  price: 399,
  oldPrice: 449,
  rating: 4,
  condition: "new",
  verified: true,
  orders: 215,
  shipping: "Free Shipping",
  img: "/images/tech/xiaomi-pad-5.jpg",
  desc: "The Xiaomi Pad 5 features an 11-inch 2.5K display, Snapdragon 860 processor, 6GB RAM, and 128GB storage. Perfect for productivity and entertainment.",
  specs: {
    Model: "#XM-PAD5-128",
    Style: "Slim bezel",
    Size: "254.7 x 166.3 x 6.9mm",
    Memory: "6GB RAM / 128GB Storage"
  }
},
{
  id: 3,
  title: "Xiaomi Mi 9 - 6GB/128GB",
  brand: "Xiaomi",
  category: "Smartphones",
  price: 299,
  oldPrice: 349,
  rating: 4,
  condition: "new",
  verified: true,
  orders: 420,
  shipping: "Free Shipping",
  img: "/images/tech/xiaomi-mi-9.jpg",
  desc: "The Xiaomi Mi 9 offers a Snapdragon 855 processor, 6.39-inch AMOLED display, 6GB RAM, and 128GB storage. Fast, sleek, and powerful.",
  specs: {
    Model: "#XM-MI9-128",
    Style: "Slim bezel",
    Size: "157.5 x 74.67 x 7.61mm",
    Memory: "6GB RAM / 128GB Storage"
  }
},
{
  id: 4,
  title: "Apple iPhone 12 - 128GB Blue",
  brand: "Apple",
  category: "Smartphones",
  price: 699,
  oldPrice: 749,
  rating: 5,
  condition: "new",
  verified: true,
  orders: 580,
  shipping: "Free Shipping",
  img: "/images/tech/iphone-12-blue.jpg",
  desc: "Apple iPhone 12 with A14 Bionic chip, 6.1-inch Super Retina XDR display, 128GB storage, and advanced dual-camera system.",
  specs: {
    Model: "#IP12-128BL",
    Style: "Glass & Aluminum",
    Size: "146.7 x 71.5 x 7.4mm",
    Memory: "128GB Storage"
  }
},
{
  id: 5,
  title: "Onikuma K8 Gaming Headset - Blue",
  brand: "Onikuma",
  category: "Headphones",
  price: 39,
  oldPrice: 49,
  rating: 4,
  condition: "new",
  verified: true,
  orders: 210,
  shipping: "Free Shipping",
  img: "/images/tech/gaming-headset-blue.jpg",
  desc: "The Onikuma K8 gaming headset delivers immersive 7.1 surround sound, noise-cancelling microphone, and ultra-soft earmuffs for long gaming sessions.",
  specs: {
    Model: "#ONK-K8BL",
    Style: "Over-Ear",
    Size: "Adjustable headband",
    Memory: "N/A"
  }
},
{
  id: 6,
  title: "Canon EOS 2000D DSLR Camera",
  brand: "Canon",
  category: "Cameras",
  price: 498,
  oldPrice: 549,
  rating: 5,
  condition: "new",
  verified: true,
  orders: 95,
  shipping: "Free Shipping",
  img: "/images/tech/canon-eos-2000d.jpg",
  desc: "The Canon EOS 2000D is a versatile DSLR featuring a 24.1MP sensor, DIGIC 4+ processor, and full HD video recording. Perfect for beginners and enthusiasts alike.",
  specs: {
    Model: "#EOS-2000D",
    Style: "DSLR",
    Size: "129.0 x 101.3 x 77.6 mm",
    Memory: "SD/SDHC/SDXC card"
  }
},
{
  id: 7,
  title: "Xiaomi Mi Notebook Pro 15",
  brand: "Xiaomi",
  category: "Laptops",
  price: 1099,
  oldPrice: 1249,
  rating: 4,
  condition: "new",
  verified: true,
  orders: 74,
  shipping: "Free Shipping",
  img: "/images/tech/xiaomi-mi-notebook-pro.jpg",
  desc: "The Xiaomi Mi Notebook Pro 15 features a 3.2K OLED display, Intel Core i7 processor, 16GB RAM, and 512GB SSD. Sleek design with premium build quality for productivity and entertainment.",
  specs: {
    Model: "#MI-NBPRO15",
    Style: "Slim Laptop",
    Size: "348.4 x 237.5 x 15.9 mm",
    Memory: "16GB RAM / 512GB SSD"
  }
},
{
  id: 8,
  title: "Amazfit GTS 2 Mini Smartwatch",
  brand: "Amazfit",
  category: "Wearables",
  price: 89,
  oldPrice: 119,
  rating: 4,
  condition: "new",
  verified: true,
  orders: 156,
  shipping: "Free Shipping",
  img: "/images/tech/amazfit-gts2-mini.jpg",
  desc: "The Amazfit GTS 2 Mini features a 1.55-inch AMOLED display, heart rate monitoring, SpO2 measurement, GPS tracking, and up to 14 days of battery life in a sleek lightweight design.",
  specs: {
    Model: "#GTS2-MINI",
    Style: "Smartwatch",
    Size: "40.5 x 35.8 x 8.95 mm",
    Memory: "—"
  }
},
{
  id: 9,
  title: "BlitzWolf BW-HP2 Wireless Headphones - White",
  brand: "BlitzWolf",
  category: "Audio",
  price: 59,
  oldPrice: 79,
  rating: 4,
  condition: "new",
  verified: true,
  orders: 142,
  shipping: "Free Shipping",
  img: "/images/tech/blitzwolf-bw-hp2.jpg",
  desc: "The BlitzWolf BW-HP2 wireless headphones offer immersive sound with 40mm drivers, Bluetooth 5.0, up to 20 hours of playback, and a comfortable over-ear design for all-day listening.",
  specs: {
    Model: "#BW-HP2",
    Style: "Over-Ear",
    Size: "—",
    Memory: "—"
  }
},
{
  id: 10,
  title: "Xiaomi Mijia Electric Kettle 1.5L - Black",
  brand: "Xiaomi",
  category: "Home Appliances",
  price: 35,
  oldPrice: 49,
  rating: 4,
  condition: "new",
  verified: true,
  orders: 210,
  shipping: "Free Shipping",
  img: "/images/tech/xiaomi-mijia-kettle.jpg",
  desc: "The Xiaomi Mijia 1.5L electric kettle offers rapid boiling with 1800W power, a double-layer anti-scald design, and a 304 stainless steel interior for safe, long-lasting use.",
  specs: {
    Model: "#XMJ-K15",
    Capacity: "1.5 Liters",
    Power: "1800W",
    Material: "304 Stainless Steel"
  }
},
{
  id: 11,
  title: "Men's Classic Polo Shirt - Blue",
  brand: "H&M",
  category: "Men’s wear",
  price: 25.00,
  oldPrice: 35.00,
  rating: 4.5,
  condition: "new",
  verified: true,
  orders: 145,
  shipping: "Free Shipping",
  img: "/images/clothing/mens-classic-polo-blue.jpg",
  desc: "Stay cool and stylish with this classic blue polo shirt. Made from breathable cotton blend fabric, perfect for casual and semi-formal wear.",
  specs: {
    Model: "#PLO-BLUE-HM",
    Style: "Polo",
    Size: "S, M, L, XL",
    Material: "Cotton Blend"
  }
},
{
  id: 12,
  title: "Men's Polo Shirt - Bright Blue",
  brand: "Uniqlo",
  category: "Men’s wear",
  price: 22.00,
  oldPrice: 30.00,
  rating: 4.4,
  condition: "new",
  verified: true,
  orders: 110,
  shipping: "Free Shipping",
  img: "/images/clothing/mens-polo-bright-blue.jpg",
  desc: "A comfortable bright blue polo shirt crafted from soft, breathable cotton. Ideal for casual and semi-casual outfits.",
  specs: {
    Model: "#PLO-BB-UNQ",
    Style: "Polo",
    Size: "S, M, L, XL",
    Material: "100% Cotton"
  }
},
{
  id: 13,
  title: "Men's Winter Parka Jacket - Brown",
  brand: "H&M",
  category: "Men’s wear",
  price: 85.00,
  oldPrice: 110.00,
  rating: 4.7,
  condition: "new",
  verified: true,
  orders: 62,
  shipping: "Free Shipping",
  img: "/images/clothing/mens-winter-parka-brown.jpg",
  desc: "Stylish and warm brown winter parka with faux fur hood lining. Features multiple pockets for utility and comfort during cold weather.",
  specs: {
    Model: "#PRK-BR-HM",
    Style: "Parka",
    Size: "M, L, XL, XXL",
    Material: "Polyester & Faux Fur"
  }
},
{
  id: 14,
  title: "Men's Blue Denim Shorts",
  brand: "H&M",
  category: "Men’s wear",
  price: 25.00,
  oldPrice: 35.00,
  rating: 4.5,
  condition: "new",
  verified: true,
  orders: 128,
  shipping: "Free Shipping",
  img: "/images/clothing/mens-blue-denim-shorts.jpg",
  desc: "Casual men's blue denim shorts, perfect for summer outings. Features a classic 5-pocket design and comfortable fit.",
  specs: {
    Model: "#DNS-BLU-HM",
    Style: "Casual",
    Size: "S, M, L, XL",
    Material: "100% Cotton"
  }
},
{
  id: 15,
  title: "Blue Denim Backpack",
  brand: "H&M",
  category: "Bags & Accessories",
  price: 30.00,
  oldPrice: 45.00,
  rating: 4.7,
  condition: "new",
  verified: true,
  orders: 95,
  shipping: "Free Shipping",
  img: "/images/clothing/blue-denim-backpack.jpg",
  desc: "Stylish blue denim backpack with drawstring closure and flap cover. Lightweight and perfect for casual outings or school use.",
  specs: {
    Model: "#BP-DENIM-HM",
    Style: "Casual",
    Size: "One Size",
    Material: "100% Cotton Denim"
  }
},
{
  id: 16,
  title: "Blue Leather Wallet",
  brand: "Fastrack",
  category: "Bags & Accessories",
  price: 25.00,
  oldPrice: 35.00,
  rating: 4.6,
  condition: "new",
  verified: true,
  orders: 130,
  shipping: "Free Shipping",
  img: "/images/clothing/blue-leather-wallet.jpg",
  desc: "Premium blue leather wallet with a sleek design, multiple card slots, and a bill compartment. Perfect for everyday use.",
  specs: {
    Model: "#WL-BLUE-FT",
    Material: "Genuine Leather",
    Style: "Bi-fold",
    Dimensions: "11cm x 9cm"
  }
},
{
  id: 17,
  title: "Men's Blue Blazer",
  brand: "Raymond",
  category: "Clothing",
  price: 120.00,
  oldPrice: 150.00,
  rating: 4.8,
  condition: "new",
  verified: true,
  orders: 95,
  shipping: "Free Shipping",
  img: "/images/clothing/mens-blue-blazer.jpg",
  desc: "Classic tailored blue blazer made from premium fabric. Perfect for formal events or smart casual wear.",
  specs: {
    Model: "#BLZR-BLUE-RY",
    Material: "Polyester Blend",
    Fit: "Slim Fit",
    Sizes: "S, M, L, XL"
  }
},
{
  id: 18,
  title: "Armchair",
  brand: "HomeStyle",
  category: "Interior",
  price: 149.00,
  oldPrice: 189.00,
  rating: 4.6,
  condition: "new",
  verified: true,
  orders: 58,
  shipping: "Free Shipping",
  img: "/images/interior/1.jpg",
  desc: "Modern beige armchair with soft upholstery and tapered wooden legs. Perfect accent seating for living rooms.",
  specs: {
    Model: "#INT-001",
    Material: "Fabric & Wood",
    Size: "78 x 72 x 86 cm",
    Color: "Beige"
  }
},
{
  id: 19,
  title: "Swivel Lounge Chair",
  brand: "HomeStyle",
  category: "Interior",
  price: 179.00,
  oldPrice: 229.00,
  rating: 4.7,
  condition: "new",
  verified: true,
  orders: 42,
  shipping: "Free Shipping",
  img: "/images/interior/2.jpg",
  desc: "Stylish yellow swivel lounge chair with plush cushions and a sturdy metal base. Perfect for modern living spaces.",
  specs: {
    Model: "#INT-002",
    Material: "Fabric & Metal",
    Size: "82 x 78 x 94 cm",
    Color: "Yellow"
  }
},
{
  id: 20,
  title: "Clay Storage Pot",
  brand: "RusticWare",
  category: "Interior",
  price: 24.99,
  oldPrice: 34.99,
  rating: 4.5,
  condition: "new",
  verified: true,
  orders: 58,
  shipping: "Free Shipping",
  img: "/images/interior/3.jpg",
  desc: "Handcrafted clay storage pot with lid, perfect for keeping spices, herbs, or small kitchen essentials fresh.",
  specs: {
    Model: "#INT-003",
    Material: "Clay",
    Capacity: "1.2 Liters",
    Color: "Terracotta"
  }
},
{
  id: 21,
  title: "Indoor Potted Plant",
  brand: "GreenScape",
  category: "Interior",
  price: 54.99,
  oldPrice: 69.99,
  rating: 4.7,
  condition: "new",
  verified: true,
  orders: 73,
  shipping: "Free Shipping",
  img: "/images/interior/4.jpg",
  desc: "Tall decorative indoor plant in a modern brown planter, perfect for adding greenery to living spaces or offices.",
  specs: {
    Model: "#INT-004",
    Material: "Plastic Planter, Natural Plant",
    Height: "120 cm",
    Color: "Green & Brown"
  }
},
{
  id: 22,
  title: "Inflatable Air Mattress",
  brand: "ComfyRest",
  category: "Interior",
  price: 89.99,
  oldPrice: 119.99,
  rating: 4.6,
  condition: "new",
  verified: true,
  orders: 56,
  shipping: "Free Shipping",
  img: "/images/interior/5.jpg",
  desc: "Comfortable inflatable air mattress with built-in pump, ideal for guest rooms, camping, or temporary sleeping arrangements.",
  specs: {
    Model: "#INT-005",
    Material: "PVC, Flocked Top",
    Size: "Queen",
    Color: "Blue & Gray"
  }
},
{
  id: 23,
  title: "Decorative Table Lamp",
  brand: "LumiHome",
  category: "Interior",
  price: 59.99,
  oldPrice: 79.99,
  rating: 4.7,
  condition: "new",
  verified: true,
  orders: 43,
  shipping: "Free Shipping",
  img: "/images/interior/6.jpg",
  desc: "Elegant decorative table lamp with a textured base and fabric shade, perfect for adding a warm ambiance to any room.",
  specs: {
    Model: "#INT-006",
    Material: "Ceramic, Fabric",
    Size: "20 inches height",
    Color: "Beige & Stone Gray"
  }
},
{
  id: 24,
  title: "Leather Magazine Holder",
  brand: "HomeCraft",
  category: "Interior",
  price: 39.99,
  oldPrice: 54.99,
  rating: 4.6,
  condition: "new",
  verified: true,
  orders: 51,
  shipping: "Free Shipping",
  img: "/images/interior/7.jpg",
  desc: "Stylish leather and metal magazine holder, perfect for organizing magazines, newspapers, and files in any modern living space.",
  specs: {
    Model: "#INT-007",
    Material: "Faux Leather, Metal",
    Size: "14 x 10 x 12 inches",
    Color: "Cognac Brown"
  }
},
{
  id: 25,
  title: "Bosch Tassimo Coffee Machine",
  brand: "Bosch",
  category: "Interior",
  price: 129.99,
  oldPrice: 159.99,
  rating: 4.7,
  condition: "new",
  verified: true,
  orders: 87,
  shipping: "Free Shipping",
  img: "/images/interior/8.jpg",
  desc: "Compact and stylish Bosch Tassimo coffee machine for making barista-quality coffee, cappuccino, and latte at home with ease.",
  specs: {
    Model: "Tassimo Series",
    Power: "1300W",
    Capacity: "0.7L",
    Color: "White"
  }
},
{
  id: 26,
  title: "Stainless Steel Juicer",
  brand: "JuiceMaster",
  category: "Interior",
  price: 249.99,
  oldPrice: 299.99,
  rating: 4.8,
  condition: "new",
  verified: true,
  orders: 62,
  shipping: "Free Shipping",
  img: "/images/interior/9.jpg",
  desc: "High-performance stainless steel juicer, perfect for extracting fresh juice from fruits and vegetables with ease and efficiency.",
  specs: {
    Model: "#JM-500",
    Material: "Stainless Steel",
    Power: "500W",
    Color: "Silver"
  }
},
{
  id: 27,
  title: "Front Load Washing Machine",
  brand: "WashPro",
  category: "Interior",
  price: 599.99,
  oldPrice: 749.99,
  rating: 4.7,
  condition: "new",
  verified: true,
  orders: 85,
  shipping: "Free Shipping",
  img: "/images/interior/10.jpg",
  desc: "Energy-efficient front load washing machine with large capacity and multiple wash programs for superior cleaning performance.",
  specs: {
    Model: "#WP-FL800",
    Capacity: "8kg",
    EnergyClass: "A+++",
    Color: "White & Silver"
  }
},





  // ⬇️ Now COPY all the other 23 product objects from your index.html array
  //    (ids 2..24) and paste them right here, inside this same array.
];
