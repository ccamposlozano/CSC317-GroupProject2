const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { createUser, findUserByUsername, findUserById } = require('../models/user');
const bcrypt = require('bcryptjs');

// Register route
router.post('/register', async (req, res) => {
    try {
        const { username, password, email, firstName, lastName } = req.body;
        const user = await createUser(username, password, email, firstName, lastName);
        res.status(201).send('User registered');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await findUserByUsername(username);
        if (!user) {
            return res.status(400).send('User not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Profile route
router.get('/profile', async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log('Token:', token); // Debugging log
        const decoded = jwt.verify(token, 'your_jwt_secret');
        console.log('Decoded:', decoded); // Debugging log
        const user = await findUserById(decoded.id);

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(400).json({ message: 'Invalid token' });
    }
});

module.exports = router;
