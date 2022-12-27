var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', (req, res) => {
  User.find({}, (err, userr) => {
    if (err) return next(err);
    res.render('userList', { list: userr });
  });
});

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/', (req, res) => {
  User.create(req.body, (err, data) => {
    if (err) return res.redirect('/users/new');
    if (data) return res.redirect('/');
  });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('singleUser', { user: user });
  });
});

router.get('/:id/edit', (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('userEdit', { user: user });
  });
});

router.post('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect('/users/');
  });
});

router.get('/:id/delete', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});
module.exports = router;
