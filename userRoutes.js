
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send('User registered');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) res.json(user);
    else res.status(400).send('Invalid credentials');
});

module.exports = router;
