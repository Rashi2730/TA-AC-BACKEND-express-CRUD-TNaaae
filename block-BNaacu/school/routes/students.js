var express = require('express');
var router = express.Router();

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/', (req, res) => {
  res.send(req.body);
});

router.get('/', (req, res) => {
  res.render('list', { list: ['suraj', 'ankit', 'pashant', 'mehul'] });
});

router.get('/:id', (req, res) => {
  res.render('studentDetail', {
    student: { name: 'Rahul', email: 'rahul@gmail.com' },
  });
});
module.exports = router;
