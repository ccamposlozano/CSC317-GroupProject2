window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    // Ensure it's an integer and parse with a radix of 10 for decimal
    const productId = parseInt(urlParams.get('productId'), 10);

    // Find the product by ID
    const product = products.find(p => p.id === productId);

    if (product) {
        displayProductDetails(product);
    } else {
        console.error('Product not found');
        // Optionally, update the DOM to inform the user that the product is not found
    }
};

function displayProductDetails(product) {
    const container = document.getElementById('product-detail-container');
    container.innerHTML = `
        <h1>${product.name}</h1>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
    `;
}