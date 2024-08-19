
const express = require('express');
const router = express.Router();
const Listing = require('../models/listing');


router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find();  
    res.render('listings/index.ejs', { listings });  
  } catch (err) {
    console.log(err);  
    res.status(500).send('Error retrieving listings');
  }
});


router.get('/new', async (req, res) => {
    try {
    res.render('listings/new.ejs');   
    } catch (error) {
        console.log(err);  
        res.status(500).send('Error retrieving form');   
    }
})

module.exports = router;