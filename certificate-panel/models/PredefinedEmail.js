const mongoose = require('mongoose');

const predefinedEmailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('PredefinedEmail', predefinedEmailSchema);
