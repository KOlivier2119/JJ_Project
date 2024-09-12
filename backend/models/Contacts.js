const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,

  },
  message: {
    type: String,
    required: true
  }
});

const Contacts = mongoose.model('User', ContactSchema)

module.exports = Contacts