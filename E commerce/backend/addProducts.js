const { createProduct } = require('./models/product');

async function addProducts() {
    try {
        await createProduct('Red Dress', 'Beautiful red dress', 49.99, 'images/products-img/women/kurti1.png', 10);
        await createProduct('Blue Dress', 'Stylish blue dress', 39.99, 'images/products-img/women/kurti2.png', 15);
        await createProduct('Green Dress', 'Elegant green dress', 29.99, 'images/products-img/women/kurti3.png', 20);
        await createProduct('Yellow Dress', 'Casual yellow dress', 19.99, 'images/products-img/women/kurti4.png', 25);
        console.log('Products added successfully');
    } catch (error) {
        console.error('Error adding products:', error);
    }
}

addProducts();
