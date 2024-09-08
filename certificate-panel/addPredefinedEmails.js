require('dotenv').config();
const mongoose = require('mongoose');

// Define schema and model for predefined emails
const predefinedEmailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
});

const PredefinedEmail = mongoose.model('PredefinedEmail', predefinedEmailSchema);

const predefinedEmails = [
  'admin@example.com',
  'user@example.com'
];

async function addPredefinedEmails() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB connected');

    // Add predefined emails
    for (const email of predefinedEmails) {
      await PredefinedEmail.updateOne({ email }, { email }, { upsert: true });
    }

    console.log('Predefined emails added to MongoDB');

  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    // Close the connection
    await mongoose.disconnect();
  }
}

addPredefinedEmails();
