const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: true
  },
  tokens: [{
    type: String
  }]
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    console.log('Hashed password:', this.password); // Log the hashed password
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Method to add a token
userSchema.methods.addToken = function(token) {
  this.tokens = this.tokens.concat(token);
  return this.save();
};

// Method to remove a token
userSchema.methods.removeToken = function(token) {
  this.tokens = this.tokens.filter(t => t !== token);
  return this.save();
};

module.exports = mongoose.model('User', userSchema);
