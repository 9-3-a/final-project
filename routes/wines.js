const express = require('express');
const router = express.Router();
let Wine = require('../models/wine');

router.get('/', (req, res) => {
  Wine.find({}, ((err, wines) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(wines);
    }
  }))
});

router.post('/', (req, res) => {
  let neWine = new Wine();

  neWine.name = req.body.name;
  neWine.type = req.body.type;
  neWine.image = req.body.image;

  neWine.save((err) => {
    if(err) {
      res.send(err);
    } else {
      res.json({success:true});
    }
  });
});

module.exports = router;