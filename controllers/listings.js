const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");

router.get("/", async (req, res) => {
  try {
    const populatedListings = await Listing.find({}).populate('owner');
    console.log('Populated Listings:', populatedListings);
    res.render("listings/index.ejs", {listings: populatedListings})
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
});

router.get("/new", async (req, res) => {
  try {
    res.render("listings/new.ejs");
  } catch (error) {
    console.log(err);
    res.status(500).send("Error retrieving form");
  }
});

router.post("/", async (req, res) => {
  req.body.owner = req.session.user._id;
  await Listing.create(req.body);
  res.redirect("/listings");
});




module.exports = router;
