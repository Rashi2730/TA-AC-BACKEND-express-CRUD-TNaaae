var express = require('express');
var route = express.Router();
var User = require('../models/user');

route.get('/', (req, res) => {
  User.find({}, (err, user) => {
    console.log(user);
    if (err) return next(err);
    res.render('userList', { list: user });
  });
});
route.get('/new', (req, res) => {
  res.render('form');
});

route.post('/', (req, res, next) => {
  User.create(req.body, (err, user) => {
    if (err) return res.redirect('/users/new');
    if (user) return res.redirect(`/users/${user.id}`);
  });
});

route.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('singleUser', { user: user });
  });
});

route.get('/:id/edit', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('editUser', { user: user });
  });
});

route.post('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect('/users/');
  });
});

route.get('/:id/delete', (req, res, next) => {
  User.findByIdAndDelete(req.params.id, (err, deleteUser) => {
    if (err) return next(err);
    res.redirect('/users/');
  });
});
module.exports = route;
