const express = require('express');
const router = express.Router();
let Review = require('../models/review');

router.get('/', (req, res) => {
  Review.find({}, ((err, reviews) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(reviews);
    }
  }))
});

router.post('/', (req, res) => {
  let newReview = new Review();

  newReview.name = req.body.name;
  newReview.rating = req.body.rating;
  newReview.review = req.body.review;

  newReview.save((err) => {
    if(err) {
      res.send(err);
    } else {
      res.json({success:true});
    }
  });
});

module.exports = router;