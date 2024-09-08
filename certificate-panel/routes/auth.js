const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const PredefinedEmail = require('../models/PredefinedEmail');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if email is in predefined list
    const isPredefined = await PredefinedEmail.findOne({ email });
    if (!isPredefined) {
      return res.status(400).json({ msg: 'Email not allowed for registration' });
    }

    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    user = new User({
      email,
      password
    });
    await user.save();

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Set token in cookies
    res.cookie('token', token, {
      httpOnly: true,
    });

    res.status(201).json({ msg: 'User registered', token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check if password matches
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Set token in cookies
    res.cookie('token', token, {
      httpOnly: true,
    });

    res.status(200).json({ msg: 'User logged in', token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Logout route
router.get('/logout', authMiddleware, (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ msg: 'Logged out' });
});

// Logout from all devices
router.get('/logoutAll', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.tokens = [];
    await user.save();

    res.clearCookie('token');
    res.status(200).json({ msg: 'Logged out from all devices' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
