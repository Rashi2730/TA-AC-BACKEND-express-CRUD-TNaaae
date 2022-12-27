var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/', (req, res) => {
  User.create(req.body, (err, data) => {
    if (err) return res.redirect('/users/new');
    if (data) return res.redirect('/');
  });
});

module.exports = router;
