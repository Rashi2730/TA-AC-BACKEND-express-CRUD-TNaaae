//requires
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var userRoutes = require('./routes/users');

//mongoConnect
mongoose.connect('', (err) => {
  console.log(err ? err : 'Connected True');
});

//engine
app.set('view-engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);

app.use((req, res, next) => {
  res.status(404).send('PAGE NOT FOUND');
});

app.listen(3000, () => {
  console.log('Server listening to port 3k');
});
