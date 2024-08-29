const express = require("express");
const router = express.Router();
const {body, matchedData, validationResult} = require("express-validator")
const User = require("../models/User")

router.post(
  "/contacts",
  [
    body("username").notEmpty().isString().withMessage("It cannot be a number"),
    body("email")
      .notEmpty()
      .isEmail()
      .withMessage("Please enter a valid email"),
    body("message").notEmpty().isString().withMessage("Must be a string"),
  ],
  async (req, res) => {
    // Validate the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract the valid data
    const validData = matchedData(req);
    console.log(validData);

    try {
      // Create and save the new contact
      const newContact = new User(validData);
      await newContact.save();

      // Send a success response
      res
        .status(201)
        .json({ message: "Contact saved successfully", newContact });
    } catch (error) {
      // Handle any errors that occur during saving
      res
        .status(500)
        .json({ error: error.message || "Failed to save contact" });
    }
  }
);

module.exports = router;
