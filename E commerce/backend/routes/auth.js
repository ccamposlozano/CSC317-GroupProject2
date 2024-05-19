const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { createUser, findUserByUsername } = require('../models/user');
const bcrypt = require('bcryptjs');

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await createUser(username, password);
    res.status(201).send('User registered');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Login
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

module.exports = router;
