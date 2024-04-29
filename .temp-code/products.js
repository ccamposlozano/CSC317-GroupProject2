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
        detailPageUrl: 'product-detail.html?productId=1' // Replace with actual link
    },
    // Men's Clothing
    {
        // credit to: https://unsplash.com/photos/blue-denim-jeans-on-white-textile-5NPId7L1_p4
        id: 2,
        category: 'Man',
        name: 'Classic Denim Jeans',
        description: 'Denim jeans that offer both comfort and durability.',
        image:  'assets/images/Man.jpg', // Replace with actual image path
        price: '69.99',
        detailPageUrl: 'product-detail.html?productId=2' // Replace with actual link
    },
    // Girl's Clothing
    {
        //credit to: https://unsplash.com/photos/a-little-girl-wearing-glasses-and-a-skirt-FKRGK3GjKtE
        id: 3,
        category: 'Girl',
        name: 'Cute Black and White Grid Skirt',
        description: 'Adorable black and white grid skirt for girls, perfect for parties and playdates.',
        image: 'assets/images/Girl.jpg', // Replace with actual image path
        price: '19.99',
        detailPageUrl:'product-detail.html?productId=3' // Replace with actual link
    },
    // Boy's Clothing
    {
        // credit to: https://unsplash.com/photos/man-in-black-crew-neck-t-shirt-and-black-pants-standing-on-stairs-PC_GoetwkjI
        id: 4,
        category: 'Boy',
        name: 'Black Cap',
        description: 'Cool and comfortable cap for boys, great for everyday wear.',
        image: 'assets/images/Boy.jpg', // Replace with actual image path
        price: '11.99',
        detailPageUrl: 'product-detail.html?productId=4' // Replace with actual link
    },
    // Baby's Clothing
    {
        //credit to: https://unsplash.com/photos/five-pairs-of-socks-pinned-on-clothesline-MDIGo4Ez-0g
        id: 5,
        category: 'Baby',
        name: 'Soft Short Socks',
        description: 'Super soft and snuggly short socks for babies. Babies will feel happy wearing it, which delights families. ',
        image: 'assets/images/Baby.jpg', // Replace with actual image path
        price: '2.99/pair',
        detailPageUrl: 'product-detail.html?productId=5' // Replace with actual link
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