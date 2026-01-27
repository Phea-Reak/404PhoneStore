import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    // 2. YOUR PRODUCT DATA
  product_list: any[] =
  [
  {
    "id": 2,
    "name": "Iphone15 plus",
    "price": "1022.00",
    "stock": 7,
    "description": "Iphone15 plus from China",
    "status": "active",
    "category": "Apple",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/2.png",
      "https://krstoreapi.phalla.lol/images/products/Celular_iPhone_15_Negro_parte_posterior.webp.png",
      "https://krstoreapi.phalla.lol/images/products/Screenshot 2025-07-20 001208.png",
      "https://krstoreapi.phalla.lol/images/products/1.png",
      "https://krstoreapi.phalla.lol/images/products/Screenshot 2025-07-20 001444.png"
    ]
  },
  {
    "id": 3,
    "name": "Iphone 16",
    "price": "1200.00",
    "stock": 10,
    "description": "Aluminum design\r\nCeramic Shield front\r\nColor-infused glass back (Black, Pink, Teal, Ultramarine)",
    "status": "active",
    "category": "Apple",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/1755609827_68a47ae313b2f.png",
      "https://krstoreapi.phalla.lol/images/products/1755609827_68a47ae314948.png",
      "https://krstoreapi.phalla.lol/images/products/1755609827_68a47ae314fe1.png"
    ]
  },
  {
    "id": 4,
    "name": "Iphon16pro",
    "price": "3200.00",
    "stock": 8,
    "description": "Titanium design\r\nLatest-generation Ceramic Shield front\r\nTextured matte glass back",
    "status": "active",
    "category": "Apple",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/1755618339_68a49c2366a33.png",
      "https://krstoreapi.phalla.lol/images/products/1755618339_68a49c236799c.png",
      "https://krstoreapi.phalla.lol/images/products/1755618339_68a49c236810f.png"
    ]
  },
  {
    "id": 5,
    "name": "Iphon16 plus",
    "price": "2002.00",
    "stock": 19,
    "description": "Chip: A18\r\nBattery: Up to 27h video\r\nDisplay: 6.7″ OLED, 60Hz\r\nPorts: USB-C (USB 2.0), MagSafe",
    "status": "active",
    "category": "Apple",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/1755618374_68a49c46bb26d.png",
      "https://krstoreapi.phalla.lol/images/products/1755618374_68a49c46bbc91.png",
      "https://krstoreapi.phalla.lol/images/products/1755618374_68a49c46bc46e.png"
    ]
  },
  {
    "id": 6,
    "name": "Samsung Galaxy S24",
    "price": "2900.00",
    "stock": 20,
    "description": "Chip: Snapdragon 8 Gen 3 / Exynos 2400\r\nBattery: 4,000 mAh\r\nDisplay: 6.2″, 120Hz, 2,600 nits\r\nPorts: USB-C, IP68",
    "status": "active",
    "category": "Samsung",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/1755618458_68a49c9a50673.png"
    ]
  },
  {
    "id": 7,
    "name": "Samsung Galaxy S24FE",
    "price": "2039.00",
    "stock": 29,
    "description": "Chip: Exynos 2400e\r\nBattery: 4,700 mAh\r\nDisplay: 6.7″, 120Hz\r\nPorts: USB-C, IP68",
    "status": "active",
    "category": "Samsung",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/1755609981_68a47b7dc2ff6.png"
    ]
  },
  {
    "id": 8,
    "name": "Samsung Galaxy S24 Ultra",
    "price": "2901.00",
    "stock": 32,
    "description": "Chip: Snapdragon 8 Gen 3\r\nBattery: 5,00 mAh\r\nDisplay: 6.8″, 120Hz\r\nPorts: USB-C, S Pen, IP68",
    "status": "active",
    "category": "Samsung",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/1755610067_68a47bd347bfd.png"
    ]
  },
  {
    "id": 9,
    "name": "Samsung Galaxy S25 Ultra",
    "price": "2938.00",
    "stock": 23,
    "description": "Chip: Snapdragon 8 Gen 4\r\nBattery: ~5,000 mAh\r\nDisplay: Similar, AI-focused\r\nPorts: USB-C, IP68",
    "status": "active",
    "category": "Samsung",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/1755610137_68a47c195c1d1.png"
    ]
  },
  {
    "id": 10,
    "name": "Galaxy Z Flip7",
    "price": "2930.00",
    "stock": 23,
    "description": "Chip: Exynos 2500\r\nBattery: 4,300 mAh\r\nDisplay: 6.9″ inner + 4.1″ outer, 120Hz\r\nPorts: USB-C, IP48",
    "status": "active",
    "category": "Samsung",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/1755622555_68a4ac9b5206c.png",
      "https://krstoreapi.phalla.lol/images/products/1755622555_68a4ac9b53623.png",
      "https://krstoreapi.phalla.lol/images/products/1755622555_68a4ac9b53d2c.png",
      "https://krstoreapi.phalla.lol/images/products/1755622555_68a4ac9b54374.png"
    ]
  },
  {
    "id": 12,
    "name": "oppo reno11",
    "price": "453.00",
    "stock": 34,
    "description": "Chip: Varies (Snapdragon 778G / Dimensity 7050)\r\nBattery: ~5,000 mAh, 67W\r\nDisplay: 6.7″ OLED, 120Hz\r\nPorts: USB-C",
    "status": "active",
    "category": "Oppo",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/1755613792_68a48a60dc238.png"
    ]
  },
  {
    "id": 13,
    "name": "OPPO Find X7 Ultra",
    "price": "234.00",
    "stock": 23,
    "description": "Chip: Snapdragon 8 Gen 3\r\nBattery: 5,000 mAh, 100W/50W\r\nDisplay: 6.82″ LTPO OLED, 120Hz, 4,500 nits\r\nPorts: USB-C 3.2, IP68",
    "status": "active",
    "category": "Oppo",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/1755618275_68a49be3973d0.png"
    ]
  },
  {
    "id": 26,
    "name": "vivo Y300 Pro",
    "price": "203.00",
    "stock": 5,
    "description": "vivo Y300 Pro Android smartphone. Announced Sep 2024. Features 6.77″ display, Snapdragon 6 Gen 1 chipset, 6500 mAh battery, 512 GB storage, 12 GB RAM",
    "status": "active",
    "category": "Vivo",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/vivo_y300_pro-b.jpg.png",
      "https://krstoreapi.phalla.lol/images/products/vivo_y300_pro-t.jpg.png",
      "https://krstoreapi.phalla.lol/images/products/vivo_y300_pro-w.jpg.png"
    ]
  },
  {
    "id": 36,
    "name": "Iphone 17",
    "price": "168.00",
    "stock": 10,
    "description": "LTPO Super Retina XDR OLED, 120Hz, HDR10, 1000 nits (typ), 1600 nits (HBM), 3000 nits (peak)",
    "status": "active",
    "category": "Apple",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/5.png",
      "https://krstoreapi.phalla.lol/images/products/2-removebg-preview.png"
    ]
  },
  {
    "id": 32,
    "name": "AirPods Pro 3",
    "price": "100.00",
    "stock": 10,
    "description": "Fast, free engraving of emoji with a click. Type in names, initials, or numbers.\r\nYou can even combine them.",
    "status": "active",
    "category": "Accessories",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/airpods-pro-3-hero-select-202509.png"
    ]
  },
  {
    "id": 33,
    "name": "AirPods 4",
    "price": "190.00",
    "stock": 10,
    "description": "AirPods 4 have been redesigned for all-day comfort in an even more compact form. Both AirPods 4 models bring improved sound quality and audio features with the H2 chip, and both have up to 30 hours of listening time using the charging case. Footnote ¹",
    "status": "active",
    "category": "Accessories",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/airpods-4-anc-select-202409.png"
    ]
  },
  {
    "id": 34,
    "name": "AirPods Max",
    "price": "90.00",
    "stock": 10,
    "description": "Add emoji with a click. Type in names, initials, or numbers.\r\nYou can even combine them.",
    "status": "active",
    "category": "Accessories",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/airpods-max-select-202409-midnight.png"
    ]
  },
  {
    "id": 35,
    "name": "60W USB-C Charge Cable (1 m)",
    "price": "50.00",
    "stock": 10,
    "description": "Keep all your selections by saving this device to Your Saves, then come back anytime and pick up right where you left off.",
    "status": "active",
    "category": "Accessories",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/MQKJ3.png"
    ]
  },
  {
    "id": 37,
    "name": "HONOR 90 5G",
    "price": "10.00",
    "stock": 5,
    "description": "Chip: Snapdragon 7 Gen 1\r\nGeekbench: ~2,880\r\nBattery: 5,000 mAh, 66W wired\r\nDisplay: 6.7″ OLED, 120Hz\r\nPorts: USB-C (2.0)",
    "status": "active",
    "category": "Honor",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/2.jpg.png",
      "https://krstoreapi.phalla.lol/images/products/BLUE.jpg.png",
      "https://krstoreapi.phalla.lol/images/products/GREEN.jpg.png",
      "https://krstoreapi.phalla.lol/images/products/honor-90-Diamond-Silver.jpg.png"
    ]
  },
  {
    "id": 38,
    "name": "Honor 200 Pro",
    "price": "5.00",
    "stock": 10,
    "description": "Chip: Snapdragon 8s Gen 3\r\nGeekbench: ~4,750\r\nBattery: 5,200 mAh, 100W wired, 66W wireless\r\nDisplay: 6.78″ OLED, 120Hz\r\nPorts: USB-C (2.0)",
    "status": "active",
    "category": "Honor",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/img_8008.png",
      "https://krstoreapi.phalla.lol/images/products/img_8009-768x768.png",
      "https://krstoreapi.phalla.lol/images/products/White.png"
    ]
  },
  {
    "id": 39,
    "name": "HonorMagic6Pro",
    "price": "15.00",
    "stock": 6,
    "description": "Chip: Snapdragon 8 Gen 3\r\nGeekbench: ~6,780\r\nBattery: 5,600 mAh, 80W wired, 66W wireless\r\nDisplay: 6.8″ LTPO OLED, 120Hz\r\nPorts: USB-C (3.2 + DisplayPort)",
    "status": "active",
    "category": "Honor",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/HonorMagic6ProBlack.webp.png",
      "https://krstoreapi.phalla.lol/images/products/Honor-Magic6-Pro-Green.webp.png"
    ]
  },
  {
    "id": 40,
    "name": "IPhone 16 Pro max",
    "price": "168.00",
    "stock": 10,
    "description": "Chip: A18 Pro\r\nBattery: Best in lineup\r\nDisplay: 6.9″ OLED, 120Hz\r\nPorts: USB-C (USB 3.0), ProRes video",
    "status": "active",
    "category": "Apple",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/Screenshot 2025-07-20 003508.png",
      "https://krstoreapi.phalla.lol/images/products/Screenshot 2025-07-20 003516.png",
      "https://krstoreapi.phalla.lol/images/products/Screenshot 2025-07-20 003521.png"
    ]
  },
  {
    "id": 43,
    "name": "vivo Y17s",
    "price": "102.00",
    "stock": 12,
    "description": "vivo Y17s-128GB Storage-Specs and Price | vivo Pakistan",
    "status": "active",
    "category": "Vivo",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/vivo Y17s.png"
    ]
  },
  {
    "id": 44,
    "name": "Vivo Y12",
    "price": "134.00",
    "stock": 12,
    "description": "Vivo Y12 2023 Price in Saudi Arabia (KSA) April 2024 - Mobileinto Saudi Arabia (KSA)",
    "status": "active",
    "category": "Vivo",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/99c069bc501f6cc4b360d9905d4952b4.png",
      "https://krstoreapi.phalla.lol/images/products/5559222908320857975.png"
    ]
  },
  {
    "id": 45,
    "name": "Vivo buds air3",
    "price": "34.00",
    "stock": 23,
    "description": "50-Hour Ultra-Long Battery Life\r\nEnjoy nonstop, immersive sound with an ultra-low-power chip and advanced power management.",
    "status": "active",
    "category": "Accessories",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/5e46a29b145ce2dacbbe948e40d167dd.png"
    ]
  },
  {
    "id": 46,
    "name": "Vivo v60 lite",
    "price": "321.00",
    "stock": 12,
    "description": "Titanium Blue rests with quiet clarity, pairing subtle light with a finish that reflects\r\nself-assured elegance.Pop Pink radiates cheerful warmth with a chic twist—lifting mood while defining a confident, modern edge.Elegant",
    "status": "active",
    "category": "Vivo",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/7173ab959bd76446e4e63c63c6a0f7ff.png"
    ]
  },
  {
    "id": 47,
    "name": "vivo Wireless Sport Lite",
    "price": "35.00",
    "stock": 23,
    "description": "vivo Wireless Sport Lite",
    "status": "active",
    "category": "Accessories",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/1d9d5bd34933f86141c553ec98950252.png"
    ]
  },
  {
    "id": 48,
    "name": "35W Dual USB-C Port Compact Power Adapter",
    "price": "59.00",
    "stock": 23,
    "description": "35W Dual USB-C Port Compact Power Adapter",
    "status": "active",
    "category": "Accessories",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/MW2H3.png"
    ]
  },
  {
    "id": 49,
    "name": "Nimble 3-in-1 Fold Wireless Charger",
    "price": "356.00",
    "stock": 23,
    "description": "The Nimble Fold 3-in-1 Wireless Charger is a sleek and foldable solution to power your entire Apple ecosystem.",
    "status": "active",
    "category": "Accessories",
    "images": [
      "https://krstoreapi.phalla.lol/images/products/HRW22.jpg"
    ]
  }
]
  getProducts() {
    return this.product_list;

  }
}
