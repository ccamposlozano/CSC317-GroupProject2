const express = require('express');
const { createProduct } = require('../models/product'); // Ensure the path is correct
const router = express.Router();

router.get('/add-products', async (req, res) => {
    try {
        await createProduct('Red Dress', 'Beautiful red dress', 49.99, 'images/products-img/women/kurti1.png', 10);
        await createProduct('Blue Dress', 'Stylish blue dress', 39.99, 'images/products-img/women/kurti2.png', 15);
        await createProduct('Green Dress', 'Elegant green dress', 29.99, 'images/products-img/women/kurti3.png', 20);
        await createProduct('Yellow Dress', 'Casual yellow dress', 19.99, 'images/products-img/women/kurti4.png', 25);
        res.send('Products added successfully');
    } catch (error) {
        res.status(500).send('Error adding products: ' + error.message);
    }
});

module.exports = router;
