const products = [
    // Add product objects with id, name, description, image, price, and detailPageUrl
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <a href="${product.detailPageUrl}">
                <img src="${product.image}" alt="${product.name}" class="product-thumbnail" />
            </a>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

displayProducts();
