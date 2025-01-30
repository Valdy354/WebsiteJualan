const products = [
    {
        name: "ASUS ROG Strix B550-F Gaming",
        category: "Motherboard",
        price: 3299000,
        specs: ["AMD AM4", "DDR4 4400MHz", "Wi-Fi 6"],
        image: "https://th.bing.com/th/id/OIP.Zaz0XJ9e4ejQeI-b3GhqIQHaFv?w=237&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        name: "Samsung 980 Pro 1TB NVMe SSD",
        category: "SSD",
        price: 2199000,
        specs: ["PCIe 4.0", "Read 7000MB/s", "1TB"],
        image: "https://th.bing.com/th/id/OIP.QXC3IqxR7Vk4yHw74t2JUAHaFj?w=208&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        name: "NVIDIA GeForce RTX 3080",
        category: "GPU",
        price: 14999000,
        specs: ["10GB GDDR6X", "HDMI 2.1", "PCIe 4.0"],
        image: "https://th.bing.com/th/id/OIP.R-0E2e25SDu0V4uCpwZ-zwHaEK?w=323&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        name: "AMD Ryzen 9 5900X",
        category: "Processor",
        price: 6799000,
        specs: ["12 Core 24 Thread", "4.8GHz Boost", "AM4"],
        image: "https://th.bing.com/th/id/OIP.9AQctBpEhkmSiUwsxj8o4wHaE8?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        name: "Corsair Vengeance RGB Pro 32GB",
        category: "RAM",
        price: 1899000,
        specs: ["DDR4 3600MHz", "CL18", "RGB Lighting"],
        image: "https://th.bing.com/th/id/OIP.tjMiQCB1voMUMIc9ax4FWgHaEk?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        name: "LG UltraGear 27GN800-B",
        category: "Monitor",
        price: 5499000,
        specs: ["27\" IPS", "144Hz", "1ms Response"],
        image: "https://th.bing.com/th/id/OIP.SY9I3pIbuqHovDXznhddXQHaEr?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        name: "Ajazz AK820 GTS PRO ",
        category: "Keyboard",
        price: 914000,
        specs: ["Wireless 2.4G", "4000 mAh", "Bluetooth 5.1"],
        image: "https://sm.ign.com/t/ign_me/screenshot/default/img-8584_w36p.1920.jpg"
    },
    {
        name: "STARLINK High Performance ",
        category: "Router",
        price: 41999000,
        specs: ["Standar IEEE 802.11a/b/g/n/ac", " Dual Band - 3 x 3 MIMO", "Wi-Fi 5"],
        image: "https://th.bing.com/th/id/OIP.N2fnyq5wxOgKaNGI1k-ZRwHaEt?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        name: "APPLE Airpods Max",
        category: "Headphone",
        price: 9999000,
        specs: [" 40mm dynamic drivers", " 7.4 x 6.6 x 3.3 inches", "ANC, spatial audio, audio sharing, Siri"],
        image: "https://www.bhphotovideo.com/images/images2500x2500/apple_mgyj3am_a_airpods_max_silver_1610234.jpg"
    },
    {
        name: "Mesin Pemotong Rumput S8000",
        category: "Pemotong Rumput",
        price: 15000000,
        specs: ["barang baru tak perlu minyak, mengunakan teknologi terbaru titipan adudu"],
        image: "https://th.bing.com/th/id/OIP.dNO-uduSYU5zs1M7cGLWgwAAAA?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    }

];

function renderProducts(products) {
    const container = document.getElementById('productContainer');
    container.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <div class="product-specs">${product.specs.join(' · ')}</div>
            <div class="product-price">RP ${product.price.toLocaleString('id-ID')},00</div>
        `;
        container.appendChild(productCard);
    });
}

document.getElementById('sort').addEventListener('change', (e) => {
    const sorted = [...products].sort((a, b) => {
        return e.target.value === 'price-asc' ? a.price - b.price : b.price - a.price;
    });
    renderProducts(sorted);
});

// Initial render
renderProducts(products);