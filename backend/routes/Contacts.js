const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Contacts = require("../models/Contacts"); // Ensure this is the correct model

router.post(
  "/contacts",
  [
    body("username")
      .notEmpty()
      .isString()
      .withMessage("Username cannot be empty and must be a string"),
    body("email")
      .notEmpty()
      .isEmail()
      .withMessage("Please enter a valid email address"),
    body("message")
      .notEmpty()
      .isString()
      .withMessage("Message cannot be empty and must be a string"),
  ],
  async (req, res) => {
    // Validate the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract the valid data
    const validData = req.body; // Use req.body directly, since matchedData might cause issues

    try {
      // Create and save the new contact
      const newContact = new Contacts(validData);
      await newContact.save();

      // Send a success response
      res.status(201).json({
        message: "Contact saved successfully",
        newContact,
      });
    } catch (error) {
      // Handle any errors that occur during saving
      console.error("Error saving contact:", error); // Log the error for debugging
      res.status(500).json({
        error: error.message || "Failed to save contact",
      });
    }
  }
);

module.exports = router;
