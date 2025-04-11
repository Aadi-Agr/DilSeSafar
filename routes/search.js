const express = require("express");
const router = express.Router();

const listings = require("../models/listing");

router.post("/", async (req, res) => {
  // console.log(req.query.search);
  const nameQuery = req.body.search;
  const results = await listings.find({ location: new RegExp(nameQuery, "i") });
  res.render("../views/listings/search.ejs", { results });
  // const alistings=await
});

module.exports = router;
