const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");
const { body, validationResult, matchedData } = require("express-validator");
const cors = require("cors")
const Contacts = require("./routes/Contacts")

const PORT = process.env.PORT || 3000;

// Use express.json() middleware to parse JSON request bodies
app.use(cors())
app.use(express.json());
app.use(Contacts)

const URI = "mongodb://localhost:27017/Contacts";
mongoose
  .connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}...`);
      console.log(`Connected...`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });


