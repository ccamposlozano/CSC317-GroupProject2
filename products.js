// Add product objects with id, name, description, image, price, and detailPageUrl

// Fabricated prices, descriptions and names for all listed products below.
// Credit to: all images from Unsplash website (https://unsplash.com/).

const products = [
    // Women's Clothing
    {
        // Credit to: https://unsplash.com/photos/green-sleeveless-dress-hanged-on-white-wall-VyI0GBHSsJ8
        id: 1,
        category: 'Woman',
        name: 'Green Sleeveless Dress',
        description: 'A beautiful green sleeveless dress. Comfortable and semi-causual. Perfect for daliy and dating dress.',
        image: 'assets/images/Woman.jpg', // Replace with actual image path
        price: '99.98',
        detailPageUrl: 'link-to-detailed-product-page-for-womens-dress' // Replace with actual link
    },
    // Men's Clothing
    {
        id: 2,
        category: 'Man',
        name: 'Classic Denim Jeans',
        description: 'Rugged and stylish denim jeans that offer both comfort and durability.',
        image: 'path-to-mens-jeans-image', // Replace with actual image path
        price: '39.99',
        detailPageUrl: 'link-to-detailed-product-page-for-mens-jeans' // Replace with actual link
    },
    // Girl's Clothing
    {
        id: 3,
        category: 'Girl',
        name: 'Cute Tulle Skirt',
        description: 'Adorable tulle skirt for girls, perfect for parties and playdates.',
        image: 'path-to-girls-skirt-image', // Replace with actual image path
        price: '19.99',
        detailPageUrl: 'link-to-detailed-product-page-for-girls-skirt' // Replace with actual link
    },
    // Boy's Clothing
    {
        id: 4,
        category: 'Boy',
        name: 'Graphic Tee',
        description: 'Cool and comfortable graphic tee for boys, great for everyday wear.',
        image: 'path-to-boys-tee-image', // Replace with actual image path
        price: '14.99',
        detailPageUrl: 'link-to-detailed-product-page-for-boys-tee' // Replace with actual link
    },
    // Baby's Clothing
    {
        id: 5,
        category: 'Baby',
        name: 'Soft Onesie',
        description: 'Super soft and snuggly onesie for babies, made from gentle fabric.',
        image: 'path-to-baby-onesie-image', // Replace with actual image path
        price: '9.99',
        detailPageUrl: 'link-to-detailed-product-page-for-baby-onesie' // Replace with actual link
    }
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-category">${product.category}</div>
            <a href="${product.detailPageUrl}">
                <img src="${product.image}" alt="${product.name}" class="product-thumbnail" />
            </a>
            <div class="product-details">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="product-price">$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

displayProducts();