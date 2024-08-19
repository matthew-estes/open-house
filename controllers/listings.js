
const express = require('express');
const router = express.Router();
const Listing = require('../models/listing');

// GET all listings (index route)
router.get('/', async (req, res) => {
  try {
    // Make sure the 'listings' variable is properly initialized
    const listings = await Listing.find();  // Initialize the 'listings' variable here
    console.log(listings);  // Log the listings to the console
    res.render('listings/index.ejs', { listings });  // Render the listings index page and pass listings to the view
  } catch (err) {
    console.log(err);  // Log any errors that occur
    res.status(500).send('Error retrieving listings');
  }
});

module.exports = router;