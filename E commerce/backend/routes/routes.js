const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts } = require('../models/product');
const { addToCart, getCartItems } = require('../models/cart');

// Products API
router.post('/products', async (req, res) => {
    try {
        const { name, description, price, imageUrl, stock } = req.body;
        const product = await createProduct(name, description, price, imageUrl, stock);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch all products
router.get('/products', async (req, res) => {
    try {
        const products = await getAllProducts();
        console.log('Fetched products:', products); // Log the fetched products
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error); // Log any errors
        res.status(500).json({ error: error.message });
    }
});

// Cart API
router.post('/cart', async (req, res) => {
    try {
        const { userId, productId } = req.body;
        await addToCart(userId, productId);
        res.status(200).json({ message: 'Product added to cart' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/cart/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const cartItems = await getCartItems(userId);
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
