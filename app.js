"use strict";

// =====================
// Données de base (catégories, produits informatiques)
// =====================
const categories = [
  { id: 0, name: "Tous" }, // Catégorie "Tous" pour tout afficher
  { id: 1, name: "Ordinateurs" },
  { id: 2, name: "Smartphones" },
  { id: 3, name: "Accessoires" },
  { id: 4, name: "Composants Ordinateur" },
];

const products = [
  // Ordinateurs (20)
  { id: 1, name: "Dell XPS 13", price: 1200, image: "assets/images/Produits/p1.jpg", category: 1, rating: 4.8, desc: "Ultrabook 13'' Full HD, Intel i7, 16Go RAM, 512Go SSD.", brand: "Dell", cores: 8 },
  { id: 2, name: "MacBook Air M2", price: 1400, image: "assets/images/Produits/p2.jpg", category: 1, rating: 4.9, desc: "Apple M2, 8Go RAM, 256Go SSD, écran Retina.", brand: "Apple", cores: 8 },
  { id: 3, name: "HP Spectre x360", price: 1300, image: "assets/images/Produits/p3.jpg", category: 1, rating: 4.7, desc: "Intel i5, 8Go RAM, 512Go SSD, écran tactile.", brand: "HP", cores: 4 },
  { id: 4, name: "Lenovo ThinkPad X1", price: 1500, image: "assets/images/Produits/p4.jpg", category: 1, rating: 4.8, desc: "Intel i7, 16Go RAM, 1To SSD, 14''.", brand: "Lenovo", cores: 8 },
  { id: 5, name: "Asus ZenBook 14", price: 1100, image: "assets/images/Produits/p5.jpg", category: 1, rating: 4.6, desc: "AMD Ryzen 7, 16Go RAM, 512Go SSD.", brand: "Asus", cores: 8 },
  { id: 6, name: "Acer Swift 3", price: 900, image: "assets/images/Produits/p6.jpg", category: 1, rating: 4.5, desc: "Intel i5, 8Go RAM, 256Go SSD.", brand: "Acer", cores: 4 },
  { id: 7, name: "MSI Modern 15", price: 1050, image: "assets/images/Produits/p7.jpg", category: 1, rating: 4.4, desc: "Intel i7, 16Go RAM, 512Go SSD.", brand: "MSI", cores: 8 },
  { id: 8, name: "Huawei MateBook D14", price: 950, image: "assets/images/Produits/p8.jpg", category: 1, rating: 4.3, desc: "AMD Ryzen 5, 8Go RAM, 512Go SSD.", brand: "Huawei", cores: 6 },
  { id: 9, name: "Microsoft Surface Laptop 4", price: 1350, image: "assets/images/Produits/p9.jpg", category: 1, rating: 4.7, desc: "Intel i5, 8Go RAM, 512Go SSD.", brand: "Microsoft", cores: 4 },
  { id: 10, name: "Razer Blade 15", price: 1800, image: "assets/images/Produits/p10.jpg", category: 1, rating: 4.8, desc: "Intel i7, 16Go RAM, RTX 3060.", brand: "Razer", cores: 8 },
  { id: 11, name: "Dell Inspiron 15", price: 800, image: "assets/images/Produits/p11.jpg", category: 1, rating: 4.2, desc: "Intel i3, 8Go RAM, 256Go SSD.", brand: "Dell", cores: 4 },
  { id: 12, name: "Apple MacBook Pro 16", price: 2500, image: "assets/images/Produits/p12.jpg", category: 1, rating: 4.9, desc: "Apple M1 Pro, 16Go RAM, 1To SSD.", brand: "Apple", cores: 10 },
  { id: 13, name: "HP Pavilion 14", price: 700, image: "assets/images/Produits/p13.jpg", category: 1, rating: 4.1, desc: "Intel i3, 8Go RAM, 256Go SSD.", brand: "HP", cores: 4 },
  { id: 14, name: "Lenovo IdeaPad 3", price: 650, image: "assets/images/Produits/p14.jpg", category: 1, rating: 4.0, desc: "AMD Ryzen 3, 8Go RAM, 256Go SSD.", brand: "Lenovo", cores: 4 },
  { id: 15, name: "Asus VivoBook S15", price: 950, image: "assets/images/Produits/p15.jpg", category: 1, rating: 4.3, desc: "Intel i5, 8Go RAM, 512Go SSD.", brand: "Asus", cores: 4 },
  { id: 16, name: "Acer Aspire 5", price: 850, image: "assets/images/Produits/p16.jpg", category: 1, rating: 4.2, desc: "AMD Ryzen 5, 8Go RAM, 512Go SSD.", brand: "Acer", cores: 6 },
  { id: 17, name: "MSI GF63 Thin", price: 1200, image: "assets/images/Produits/p17.jpg", category: 1, rating: 4.5, desc: "Intel i5, 16Go RAM, GTX 1650.", brand: "MSI", cores: 6 },
  { id: 18, name: "Huawei MateBook X Pro", price: 1600, image: "assets/images/Produits/p18.jpg", category: 1, rating: 4.7, desc: "Intel i7, 16Go RAM, 1To SSD.", brand: "Huawei", cores: 8 },
  { id: 19, name: "Microsoft Surface Pro 7", price: 1100, image: "assets/images/Produits/p19.jpg", category: 1, rating: 4.6, desc: "Intel i5, 8Go RAM, 256Go SSD.", brand: "Microsoft", cores: 4 },
  { id: 20, name: "Razer Book 13", price: 1700, image: "assets/images/Produits/p20.jpg", category: 1, rating: 4.8, desc: "Intel i7, 16Go RAM, 512Go SSD.", brand: "Razer", cores: 8 },

  // Smartphones (20)
  { id: 21, name: "iPhone 14 Pro", price: 1100, image: "assets/images/Produits/s1.jpg", category: 2, rating: 4.7, desc: "Écran 6.1'', 128Go, triple capteur photo, 5G.", brand: "Apple" },
  { id: 22, name: "Samsung Galaxy S23", price: 950, image: "assets/images/Produits/s2.jpg", category: 2, rating: 4.6, desc: "Écran AMOLED 6.1'', 128Go, 5G, triple capteur.", brand: "Samsung" },
  { id: 23, name: "Google Pixel 7", price: 800, image: "assets/images/Produits/s3.jpg", category: 2, rating: 4.5, desc: "Écran 6.3'', 128Go, Android 13.", brand: "Google" },
  { id: 24, name: "OnePlus 11", price: 850, image: "assets/images/Produits/s4.jpg", category: 2, rating: 4.4, desc: "Écran 6.7'', 256Go, 5G.", brand: "OnePlus" },
  { id: 25, name: "Xiaomi 13 Pro", price: 900, image: "assets/images/Produits/s5.jpg", category: 2, rating: 4.5, desc: "Écran 6.73'', 256Go, 5G.", brand: "Xiaomi" },
  { id: 26, name: "Oppo Find X5", price: 780, image: "assets/images/Produits/s6.jpg", category: 2, rating: 4.3, desc: "Écran 6.55'', 256Go, 5G.", brand: "Oppo" },
  { id: 27, name: "Sony Xperia 1 IV", price: 1200, image: "assets/images/Produits/s7.jpg", category: 2, rating: 4.2, desc: "Écran 6.5'', 256Go, 5G.", brand: "Sony" },
  { id: 28, name: "Huawei P50 Pro", price: 950, image: "assets/images/Produits/s8.jpg", category: 2, rating: 4.1, desc: "Écran 6.6'', 256Go, 5G.", brand: "Huawei" },
  { id: 29, name: "Realme GT 2 Pro", price: 700, image: "assets/images/Produits/s9.jpg", category: 2, rating: 4.0, desc: "Écran 6.7'', 128Go, 5G.", brand: "Realme" },
  { id: 30, name: "Vivo X80 Pro", price: 980, image: "assets/images/Produits/s10.jpg", category: 2, rating: 4.3, desc: "Écran 6.78'', 256Go, 5G.", brand: "Vivo" },
  { id: 31, name: "Apple iPhone 13", price: 900, image: "assets/images/Produits/s11.jpg", category: 2, rating: 4.6, desc: "Écran 6.1'', 128Go, double capteur.", brand: "Apple" },
  { id: 32, name: "Samsung Galaxy S22", price: 850, image: "assets/images/Produits/s12.jpg", category: 2, rating: 4.5, desc: "Écran AMOLED 6.1'', 128Go, 5G.", brand: "Samsung" },
  { id: 33, name: "Google Pixel 6a", price: 500, image: "assets/images/Produits/s13.jpg", category: 2, rating: 4.4, desc: "Écran 6.1'', 128Go, Android 12.", brand: "Google" },
  { id: 34, name: "OnePlus Nord 2T", price: 400, image: "assets/images/Produits/s14.jpg", category: 2, rating: 4.2, desc: "Écran 6.43'', 128Go, 5G.", brand: "OnePlus" },
  { id: 35, name: "Xiaomi Redmi Note 12", price: 300, image: "assets/images/Produits/s15.jpg", category: 2, rating: 4.1, desc: "Écran 6.67'', 128Go, 5G.", brand: "Xiaomi" },
  { id: 36, name: "Oppo Reno8", price: 600, image: "assets/images/Produits/s16.jpg", category: 2, rating: 4.3, desc: "Écran 6.4'', 256Go, 5G.", brand: "Oppo" },
  { id: 37, name: "Sony Xperia 10 IV", price: 450, image: "assets/images/Produits/s17.jpg", category: 2, rating: 4.0, desc: "Écran 6.0'', 128Go, 5G.", brand: "Sony" },
  { id: 38, name: "Huawei Nova 9", price: 350, image: "assets/images/Produits/s18.jpg", category: 2, rating: 4.1, desc: "Écran 6.57'', 128Go, 4G.", brand: "Huawei" },
  { id: 39, name: "Realme 9 Pro+", price: 320, image: "assets/images/Produits/s19.jpg", category: 2, rating: 4.2, desc: "Écran 6.4'', 128Go, 5G.", brand: "Realme" },
  { id: 40, name: "Vivo Y76 5G", price: 280, image: "assets/images/Produits/s20.jpg", category: 2, rating: 4.0, desc: "Écran 6.58'', 128Go, 5G.", brand: "Vivo" },

  // Accessoires (20)
  { id: 41, name: "Logitech MX Master 3S", price: 90, image: "assets/images/Produits/ac1.jpg", category: 3, rating: 4.9, desc: "Souris sans fil ergonomique, USB-C, Bluetooth.", brand: "Logitech" },
  { id: 42, name: "Keychron K2", price: 85, image: "assets/images/Produits/ac2.jpg", category: 3, rating: 4.8, desc: "Clavier compact RGB, Bluetooth/USB, switches Gateron.", brand: "Keychron" },
  { id: 43, name: "Corsair K95 RGB", price: 180, image: "assets/images/Produits/ac3.jpg", category: 3, rating: 4.7, desc: "Clavier mécanique gaming, rétroéclairage RGB.", brand: "Corsair" },
  { id: 44, name: "SteelSeries Arctis 7", price: 130, image: "assets/images/Produits/ac4.jpg", category: 3, rating: 4.6, desc: "Casque sans fil gaming, micro rétractable.", brand: "SteelSeries" },
  { id: 45, name: "Razer DeathAdder V2", price: 70, image: "assets/images/Produits/ac5.jpg", category: 3, rating: 4.5, desc: "Souris filaire, capteur optique 20K.", brand: "Razer" },
  { id: 46, name: "HyperX Cloud II", price: 100, image: "assets/images/Produits/ac6.jpg", category: 3, rating: 4.7, desc: "Casque filaire, micro détachable.", brand: "HyperX" },
  { id: 47, name: "Logitech C920 HD Pro", price: 60, image: "assets/images/Produits/ac7.jpg", category: 3, rating: 4.6, desc: "Webcam Full HD 1080p.", brand: "Logitech" },
  { id: 48, name: "Elgato Stream Deck", price: 150, image: "assets/images/Produits/ac8.jpg", category: 3, rating: 4.8, desc: "Contrôleur de streaming 15 touches LCD.", brand: "Elgato" },
  { id: 49, name: "Samsung T7 SSD 1To", price: 120, image: "assets/images/Produits/ac9.jpg", category: 3, rating: 4.7, desc: "SSD externe USB 3.2, 1To.", brand: "Samsung" },
  { id: 50, name: "SanDisk Ultra 128Go", price: 25, image: "assets/images/Produits/ac10.jpg", category: 3, rating: 4.5, desc: "Clé USB 3.0, 128Go.", brand: "SanDisk" },
  { id: 51, name: "Kingston A400 SSD 480Go", price: 45, image: "assets/images/Produits/ac11.jpg", category: 3, rating: 4.6, desc: "SSD interne SATA 480Go.", brand: "Kingston" },
  { id: 52, name: "TP-Link Archer AX10", price: 70, image: "assets/images/Produits/ac12.jpg", category: 3, rating: 4.4, desc: "Routeur WiFi 6, 1.5Gbps.", brand: "TP-Link" },
  { id: 53, name: "Anker PowerCore 20000", price: 50, image: "assets/images/Produits/ac13.jpg", category: 3, rating: 4.7, desc: "Batterie externe 20000mAh, USB-C.", brand: "Anker" },
  { id: 54, name: "Logitech G502 Hero", price: 60, image: "assets/images/Produits/ac14.jpg", category: 3, rating: 4.8, desc: "Souris filaire gaming, 11 boutons.", brand: "Logitech" },
  { id: 55, name: "Corsair MM300 Pro", price: 30, image: "assets/images/Produits/ac15.jpg", category: 3, rating: 4.5, desc: "Tapis de souris gaming XL, étanche.", brand: "Corsair" },
  { id: 56, name: "SteelSeries QcK", price: 20, image: "assets/images/Produits/ac16.jpg", category: 3, rating: 4.6, desc: "Tapis de souris, 320x270mm.", brand: "SteelSeries" },
  { id: 57, name: "Razer Kraken X", price: 60, image: "assets/images/Produits/ac17.jpg", category: 3, rating: 4.4, desc: "Casque gaming léger, micro flexible.", brand: "Razer" },
  { id: 58, name: "HyperX Alloy FPS Pro", price: 80, image: "assets/images/Produits/ac18.jpg", category: 3, rating: 4.7, desc: "Clavier mécanique compact, switches Red.", brand: "HyperX" },
  { id: 59, name: "Elgato Cam Link 4K", price: 110, image: "assets/images/Produits/ac19.jpg", category: 3, rating: 4.8, desc: "Clé d'acquisition HDMI vers USB.", brand: "Elgato" },
  { id: 60, name: "Samsung EVO Plus 256Go", price: 35, image: "assets/images/Produits/ac20.jpg", category: 3, rating: 4.6, desc: "Carte microSDXC UHS-I, 256Go.", brand: "Samsung" },

  // Composants Ordinateur (20)
  { id: 61, name: "Carte mère ASUS Prime B550M-A", price: 120, image: "assets/images/Produits/c1.jpg", category: 4, rating: 4.7, desc: "Socket AM4, micro-ATX, DDR4, PCIe 4.0", brand: "ASUS" },
  { id: 62, name: "Barrette RAM Corsair Vengeance 16Go", price: 70, image: "assets/images/Produits/c2.jpg", category: 4, rating: 4.8, desc: "DDR4, 3200MHz, CL16", brand: "Corsair" },
  { id: 63, name: "SSD Samsung 970 EVO Plus 1To", price: 110, image: "assets/images/Produits/c3.jpg", category: 4, rating: 4.9, desc: "NVMe M.2, PCIe Gen3", brand: "Samsung" },
  { id: 64, name: "Processeur AMD Ryzen 5 5600X", price: 200, image: "assets/images/Produits/c4.jpg", category: 4, rating: 4.8, desc: "6 cœurs, 12 threads, 4.6GHz Boost", brand: "AMD" },
  { id: 65, name: "Carte graphique NVIDIA RTX 3060", price: 350, image: "assets/images/Produits/c5.jpg", category: 4, rating: 4.7, desc: "12Go GDDR6, Ray Tracing", brand: "NVIDIA" },
  { id: 66, name: "Alimentation Corsair 650W 80+ Bronze", price: 75, image: "assets/images/Produits/c6.jpg", category: 4, rating: 4.6, desc: "ATX, semi-modulaire", brand: "Corsair" },
  { id: 67, name: "Boîtier NZXT H510", price: 90, image: "assets/images/Produits/c7.jpg", category: 4, rating: 4.8, desc: "ATX, fenêtre latérale en verre trempé", brand: "NZXT" },
  { id: 68, name: "Ventirad Cooler Master Hyper 212", price: 35, image: "assets/images/Produits/c8.jpg", category: 4, rating: 4.7, desc: "120mm, 4 caloducs", brand: "Cooler Master" },
  { id: 69, name: "Disque dur Seagate Barracuda 2To", price: 55, image: "assets/images/Produits/c9.jpg", category: 4, rating: 4.5, desc: "3.5'', 7200rpm, SATA III", brand: "Seagate" },
  { id: 70, name: "Carte WiFi TP-Link Archer T6E", price: 30, image: "assets/images/Produits/c10.jpg", category: 4, rating: 4.4, desc: "PCIe, AC1300, double antenne", brand: "TP-Link" },
  { id: 71, name: "Clavier mécanique Logitech G413", price: 60, image: "assets/images/Produits/c11.jpg", category: 4, rating: 4.6, desc: "Switchs Romer-G, rétroéclairage rouge", brand: "Logitech" },
  { id: 72, name: "Souris gaming Razer DeathAdder V2", price: 50, image: "assets/images/Produits/c12.jpg", category: 4, rating: 4.7, desc: "Capteur optique 20K, 8 boutons", brand: "Razer" },
  { id: 73, name: "Écran ASUS VG249Q 24''", price: 180, image: "assets/images/Produits/c13.jpg", category: 4, rating: 4.8, desc: "IPS, 144Hz, 1ms", brand: "ASUS" },
  { id: 74, name: "Webcam Logitech C920 HD Pro", price: 70, image: "assets/images/Produits/c14.jpg", category: 4, rating: 4.7, desc: "Full HD 1080p, autofocus", brand: "Logitech" },
  { id: 75, name: "Microphone Blue Yeti USB", price: 120, image: "assets/images/Produits/c15.jpg", category: 4, rating: 4.8, desc: "Multipattern, plug & play", brand: "Blue" },
  { id: 76, name: "Carte son externe Focusrite Scarlett Solo", price: 100, image: "assets/images/Produits/c16.jpg", category: 4, rating: 4.7, desc: "USB, 2 entrées/2 sorties", brand: "Focusrite" },
  { id: 77, name: "Hub USB 3.0 Anker 4 ports", price: 25, image: "assets/images/Produits/c17.jpg", category: 4, rating: 4.6, desc: "Alimentation externe, compact", brand: "Anker" },
  { id: 78, name: "Lecteur de cartes SD UGREEN", price: 15, image: "assets/images/Produits/c18.jpg", category: 4, rating: 4.5, desc: "USB 3.0, multi-format", brand: "UGREEN" },
  { id: 79, name: "Câble HDMI 2.1 2m", price: 10, image: "assets/images/Produits/c19.jpg", category: 4, rating: 4.6, desc: "Ultra HD 8K, tressé", brand: "Amazon Basics" },
  { id: 80, name: "Tapis de souris SteelSeries QcK", price: 20, image: "assets/images/Produits/c20.jpg", category: 4, rating: 4.7, desc: "320x270mm, surface micro-texturée", brand: "SteelSeries" },
];

// =====================
// Panier (chargé depuis localStorage)
// =====================
let cart = JSON.parse(localStorage.getItem("cart") || "[]"); // On récupère le panier stocké ou un tableau vide

// Sauvegarde du panier dans localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Mise à jour du compteur d'articles dans le panier (dans le header)
function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

// =====================
// Affichage dynamique de la navigation principale
// =====================
function renderMainNav(selected = "home") {
  const nav = document.createElement('div');
  nav.className = 'main-nav';
  nav.innerHTML = `
    <a href="#" class="main-nav-link${selected === 'home' ? ' active' : ''}" data-nav="home">🏠 Accueil</a>
    <a href="#" class="main-nav-link${selected === 'categories' ? ' active' : ''}" data-nav="categories">📂 Catégories</a>
    <a href="#" class="main-nav-link${selected === 'products' ? ' active' : ''}" data-nav="products">🛒 Produits</a>
    <a href="#" class="main-nav-link${selected === 'cart' ? ' active' : ''}" data-nav="cart">🛍️ Panier</a>
  `;
  // On insère la navigation juste après le header et avant le menu catégories
  const header = document.querySelector('.header-alibaba');
  const oldNav = document.querySelector('.main-nav');
  if (oldNav) oldNav.remove();
  header.insertAdjacentElement('afterend', nav);
  // Listeners pour la navigation
  nav.querySelectorAll('.main-nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const navType = link.dataset.nav;
      renderMainNav(navType);
      // Afficher la barre des catégories uniquement pour la vue 'categories'
      if (navType === 'home') {
        hideCategoriesNav();
        showHome(); // Affiche la page d'accueil personnalisée
      } else if (navType === 'categories') {
        showCategoriesNav();
        showProducts(0); // Affiche tous les produits
        // Scroll automatique vers la barre des catégories
        setTimeout(() => {
          const catNav = document.querySelector('.categories-nav');
          if (catNav) catNav.scrollIntoView({behavior: 'smooth', block: 'start'});
        }, 100);
      } else if (navType === 'products') {
        hideCategoriesNav();
        showProducts(0);
      } else if (navType === 'cart') {
        hideCategoriesNav();
        showCart();
      }
    });
  });
}

// =====================
// Affichage de la page d'accueil améliorée
// =====================
function showHome() {
  const main = document.getElementById("main-content");
  // Images du carrousel
  const carouselImages = [
    'assets/images/Produits/aa1.jpg',
    'assets/images/Produits/aa2.jpg',
    'assets/images/Produits/aa3.jpg',
    'assets/images/Produits/aa4.jpg',
    'assets/images/Produits/aa5.jpg',
    'assets/images/Produits/aa6.jpg',
    'assets/images/Produits/aa7.jpg',
    'assets/images/Produits/aa8.jpg',
    'assets/images/Produits/aa9.jpg',
    'assets/images/Produits/aa10.jpg',
    'assets/images/Produits/aa11.jpg'
  ];
  // Sélection de produits en vedette (ex : les 12 premiers)
  const featured = products.slice(0, 12);
  main.innerHTML = `
    <section class="carousel-section">
      <div class="carousel-container">
        ${carouselImages.map((img, i) => `<img src='${img}' class='carousel-img' style='${i === 0 ? '' : 'display:none;'}'>`).join('')}
        <button class="carousel-btn prev">&#10094;</button>
        <button class="carousel-btn next">&#10095;</button>
        <div class="carousel-dots">
          ${carouselImages.map((_, i) => `<span class="carousel-dot${i === 0 ? ' active' : ''}" data-idx="${i}"></span>`).join('')}
        </div>
      </div>
    </section>
    <section class="home-banner-materiel improved-banner">
      <div class="banner-content">
        <h2 class="promo">-7% sur tout le high-tech</h2>
        <p class="promo-desc">Profitez de nos offres exceptionnelles sur une large sélection de produits informatiques !</p>
        <button class="banner-btn">J'EN PROFITE !</button>
      </div>
    </section>
    <section class="home-advantages-materiel improved-advantages">
      <div class="adv-card"><span>🛠️</span><div>18 ans d'expertise</div></div>
      <div class="adv-card"><span>📦</span><div>+ de 15 000 références</div></div>
      <div class="adv-card"><span>👍</span><div>1 million de clients</div></div>
      <div class="adv-card"><span>💬</span><div>Support 7j/7</div></div>
      <div class="adv-card"><span>🚚</span><div>Livraison rapide</div></div>
    </section>
    <section class="home-featured-products improved-featured">
      ${featured.map(prod => `
        <div class='product-card home-product improved-product'>
          <img src='${prod.image}' alt='${prod.name}' />
          <h3>${prod.name}</h3>
          <p>${prod.desc}</p>
          <div class='price-rating'>
            <span class='price'>$${prod.price.toFixed(2)}</span>
            <span class='rating'>⭐ ${prod.rating}</span>
          </div>
          <div class='home-product-btns'>
            <button class='order-now-btn improved-order-btn' data-id='${prod.id}'>Commander</button>
            <button class='add-cart-btn improved-add-btn' data-id='${prod.id}'>Ajouter au panier</button>
          </div>
        </div>
      `).join('')}
    </section>
  `;
  // Carrousel JS avec points
  let current = 0;
  const imgs = document.querySelectorAll('.carousel-img');
  const dots = document.querySelectorAll('.carousel-dot');
  const showImg = idx => {
    imgs.forEach((img, i) => img.style.display = i === idx ? '' : 'none');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
  };
  document.querySelector('.carousel-btn.next').onclick = () => {
    current = (current + 1) % imgs.length;
    showImg(current);
  };
  document.querySelector('.carousel-btn.prev').onclick = () => {
    current = (current - 1 + imgs.length) % imgs.length;
    showImg(current);
  };
  dots.forEach(dot => {
    dot.onclick = () => {
      current = +dot.dataset.idx;
      showImg(current);
    };
  });
  // Défilement automatique
  let carouselInterval = setInterval(() => {
    current = (current + 1) % imgs.length;
    showImg(current);
  }, 5000);
  // Pause au survol
  document.querySelector('.carousel-container').addEventListener('mouseenter', () => clearInterval(carouselInterval));
  document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
    carouselInterval = setInterval(() => {
      current = (current + 1) % imgs.length;
      showImg(current);
    }, 5000);
  });
  // Listener pour le bouton de la bannière (scroll vers produits)
  document.querySelector('.banner-btn').addEventListener('click', () => {
    document.querySelector('.home-featured-products').scrollIntoView({behavior: 'smooth'});
  });
  // Listener pour chaque bouton Commander (commande immédiate)
  document.querySelectorAll('.order-now-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodId = +btn.dataset.id;
      const prod = products.find(p => p.id === prodId);
      main.innerHTML = `<h2>Merci pour votre commande !</h2><p>Vous avez commandé : <b>${prod.name}</b> pour $${prod.price.toFixed(2)}.</p><button class='home-btn'>Retour à l'accueil</button>`;
      document.querySelector('.home-btn').addEventListener('click', showHome);
    });
  });
  // Listener pour chaque bouton Ajouter au panier
  document.querySelectorAll('.add-cart-btn.improved-add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodId = +btn.dataset.id;
      const prod = products.find(p => p.id === prodId);
      const found = cart.find(item => item.id === prodId);
      if (found) found.qty++;
      else cart.push({ id: prod.id, name: prod.name, price: prod.price, qty: 1 });
      saveCart();
      updateCartCount();
      btn.textContent = 'Ajouté !';
      setTimeout(() => { btn.textContent = 'Ajouter au panier'; }, 1200);
    });
  });
}

// =====================
// Affichage/masquage de la barre des catégories
// =====================
function showCategoriesNav(selectedCatId = 0) {
  const nav = document.querySelector('.categories-nav');
  nav.style.display = '';
  nav.innerHTML = categories.map(cat => `
    <a href="#" class="category-link${cat.id === selectedCatId ? ' active' : ''}" data-cat="${cat.id}">${cat.name}</a>
  `).join('');
  // Ajout listeners sur chaque catégorie
  nav.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const catId = +link.dataset.cat;
      showCategoriesNav(catId);
      showProducts(catId);
    });
  });
}
function hideCategoriesNav() {
  const nav = document.querySelector('.categories-nav');
  nav.style.display = 'none';
}

// =====================
// Filtres dynamiques selon la catégorie sélectionnée
// =====================
function renderCategoryFilters(categoryId, onFilterChange) {
  const filterBar = document.getElementById('filter-bar') || document.createElement('div');
  filterBar.id = 'filter-bar';
  filterBar.className = '';
  filterBar.innerHTML = '';
  let filterHTML = '';
  if (categoryId === 1) { // Ordinateurs
    // Récupérer toutes les marques et cores disponibles
    const brands = [...new Set(products.filter(p => p.category === 1).map(p => p.brand))];
    const cores = [...new Set(products.filter(p => p.category === 1).map(p => p.cores))].sort((a, b) => a - b);
    filterHTML += `<label>Marque : <select id='filter-brand'><option value=''>Toutes</option>${brands.map(b => `<option value='${b}'>${b}</option>`).join('')}</select></label>`;
    filterHTML += `<label style='margin-left:1.5em;'>Cœurs : <select id='filter-cores'><option value=''>Tous</option>${cores.map(c => `<option value='${c}'>${c}</option>`).join('')}</select></label>`;
  } else if (categoryId === 2) { // Smartphones
    const brands = [...new Set(products.filter(p => p.category === 2).map(p => p.brand))];
    filterHTML += `<label>Marque : <select id='filter-brand'><option value=''>Toutes</option>${brands.map(b => `<option value='${b}'>${b}</option>`).join('')}</select></label>`;
  }
  filterBar.innerHTML = filterHTML;
  // Insérer la barre de filtres juste après la barre des catégories
  const catNav = document.querySelector('.categories-nav');
  if (!document.getElementById('filter-bar')) catNav.insertAdjacentElement('afterend', filterBar);
  filterBar.style.display = filterHTML ? '' : 'none';
  filterBar.className = filterHTML ? '' : 'hidden';
  // Listeners sur les filtres
  if (filterHTML) {
    filterBar.querySelectorAll('select').forEach(sel => {
      sel.addEventListener('change', onFilterChange);
    });
  }
}

// =====================
// Affichage dynamique des produits avec filtres
// =====================
function showProducts(categoryId = 0, searchTerm = "") {
  let filtered = products;
  // Application des filtres dynamiques
  if (categoryId && categoryId !== 0) {
    filtered = filtered.filter(p => p.category === categoryId);
    // Filtres spécifiques selon la catégorie
    if (categoryId === 1) { // Ordinateurs
      const brand = document.getElementById('filter-brand')?.value;
      const cores = document.getElementById('filter-cores')?.value;
      if (brand) filtered = filtered.filter(p => p.brand === brand);
      if (cores) filtered = filtered.filter(p => String(p.cores) === cores);
    } else if (categoryId === 2) { // Smartphones
      const brand = document.getElementById('filter-brand')?.value;
      if (brand) filtered = filtered.filter(p => p.brand === brand);
    }
  }
  if (searchTerm) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Remplir le champ de recherche si présent
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = searchTerm;
  }
  const main = document.getElementById("main-content");
  if (filtered.length === 0) {
    main.innerHTML = `<p style='text-align:center;margin:2em;'>Aucun produit trouvé.</p>`;
    return;
  }
  main.innerHTML = `<div class='products-list'>${filtered.map(prod => `
    <div class='product-card'>
      <img src='${prod.image}' alt='${prod.name}' />
      <h3>${prod.name}</h3>
      <p>${prod.desc}</p>
      <div class='price-rating'>
        <span class='price'>$${prod.price.toFixed(2)}</span>
        <span class='rating'>⭐ ${prod.rating}</span>
      </div>
      <div class='product-btns'>
        <button class='order-now-btn improved-order-btn' data-id='${prod.id}'>Commander</button>
        <button class='add-cart-btn improved-add-btn' data-id='${prod.id}'>Ajouter au panier</button>
      </div>
    </div>
  `).join('')}</div>`;
  // Ajout listeners "Commander" (commande immédiate)
  document.querySelectorAll('.order-now-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodId = +btn.dataset.id;
      const prod = products.find(p => p.id === prodId);
      main.innerHTML = `<h2>Merci pour votre commande !</h2><p>Vous avez commandé : <b>${prod.name}</b> pour $${prod.price.toFixed(2)}.</p><button class='back-btn'><span class='back-icon'>↩️</span> Retour</button>`;
      document.querySelector('.back-btn').addEventListener('click', () => showProducts(categoryId, searchTerm));
    });
  });
  // Ajout listeners "Ajouter au panier"
  document.querySelectorAll('.add-cart-btn.improved-add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodId = +btn.dataset.id;
      const prod = products.find(p => p.id === prodId);
      const found = cart.find(item => item.id === prodId);
      if (found) found.qty++;
      else cart.push({ id: prod.id, name: prod.name, price: prod.price, qty: 1 });
      saveCart();
      updateCartCount();
      btn.textContent = 'Ajouté !';
      setTimeout(() => { btn.textContent = 'Ajouter au panier'; }, 1200);
    });
  });
  // Affichage/MAJ des filtres dynamiques
  if (categoryId === 1 || categoryId === 2) {
    renderCategoryFilters(categoryId, () => showProducts(categoryId));
  } else {
    const filterBar = document.getElementById('filter-bar');
    if (filterBar) filterBar.style.display = 'none';
  }
}

// =====================
// Affichage du panier façon Alibaba (avec modification de quantité et commande)
// =====================
function showCart() {
  const main = document.getElementById("main-content");
  if (cart.length === 0) {
    main.innerHTML = `<h2>Panier</h2><p>Votre panier est vide.</p>`;
    return;
  }
  main.innerHTML = `<h2>Panier</h2><div class='cart-list'>${cart.map(item => `
    <div class='cart-item'>
      <span>${item.name}</span>
      <div class='cart-qty'>
        <button class='qty-btn' data-id='${item.id}' data-action='decrease'>-</button>
        <span class='qty-value'>${item.qty}</span>
        <button class='qty-btn' data-id='${item.id}' data-action='increase'>+</button>
      </div>
      <span>$${(item.price * item.qty).toFixed(2)}</span>
      <button data-id='${item.id}' class='remove-cart-btn'>Supprimer</button>
    </div>
  `).join('')}</div>
  <div class='cart-total'>Total : $${cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2)}</div>
  <button class='order-btn'><span class='order-icon'>💳</span> Commander</button>`;

  // Listeners pour supprimer un produit
  document.querySelectorAll('.remove-cart-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = +btn.dataset.id;
      cart = cart.filter(item => item.id !== id);
      saveCart();
      updateCartCount();
      showCart();
    });
  });
  // Listeners pour modifier la quantité
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = +btn.dataset.id;
      const action = btn.dataset.action;
      const found = cart.find(item => item.id === id);
      if (found) {
        if (action === 'increase') found.qty++;
        if (action === 'decrease' && found.qty > 1) found.qty--;
        saveCart();
        updateCartCount();
        showCart();
      }
    });
  });
  // Listener pour commander
  document.querySelector('.order-btn').addEventListener('click', () => {
    cart = [];
    saveCart();
    updateCartCount();
    main.innerHTML = `<h2>Merci pour votre commande !</h2><p>Votre commande a été prise en compte.</p><button class='back-btn'><span class='back-icon'>↩️</span> Retour à la boutique</button>`;
    document.querySelector('.back-btn').addEventListener('click', () => showProducts(0));
  });
}

// =====================
// Gestion de la recherche améliorée
// =====================
document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const searchTerm = document.getElementById('search-input').value;
  renderMainNav('products');
  hideCategoriesNav();
  showProducts(0, searchTerm); // Recherche sur tous les produits
  // Garde le champ rempli
  document.getElementById('search-input').value = searchTerm;
});

// =====================
// Navigation (cart, accueil)
// =====================
document.querySelector('.header-right a[data-view="cart"]').addEventListener('click', function(e) {
  e.preventDefault();
  renderMainNav('cart');
  renderCategoriesNav(0);
  showCart();
});
// Logo = retour accueil (affiche tous les produits)
document.querySelector('.logo-img').addEventListener('click', function() {
  renderMainNav('home');
  renderCategoriesNav(0);
  showProducts(0);
});

// =====================
// Initialisation au chargement
// =====================
updateCartCount(); // Met à jour le compteur panier
renderMainNav('home'); // Affiche la navigation principale
hideCategoriesNav(); // Masque la barre des catégories au démarrage
showHome(); // Affiche la page d'accueil personnalisée au démarrage 