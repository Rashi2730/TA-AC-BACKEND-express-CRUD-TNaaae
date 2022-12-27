var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', (req, res) => {
  User.find({}, (err, userr) => {
    if (err) return next(err);
    res.send({ list: userr });
  });
});

// router.get('/new', (req, res) => {
//   res.render('form');
// });

router.post('/', (req, res) => {
  console.log(req.body);
  User.create(req.body, (err, data) => {
    if (err) return res.redirect('/users/new');
    if (data) return res.redirect('/');
  });
});

router.put('/:id/edit', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    console.log(updatedUser);
    if (err) return next(err);
    res.send(updatedUser);
  });
});

router.delete('/:id/delete', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) return next(err);
    res.send(user);
  });
});

module.exports = router;
