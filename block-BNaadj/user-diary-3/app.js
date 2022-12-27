//requires
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');
var userRouter = require('./routes/user');
var indexRouter = require('./routes/index');

//mongoConnect
mongoose.connect('mongodb://127.0.0.1:27017/user-diary-3', (err) => {
  console.log(err ? err : 'connected: true');
});

var app = express();

//setup engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares

app.use(logger('tiny'));

//capture form
app.use(express.urlencoded({ extended: false }));

//setup static directory
// app.use(express.static(path.join(__dirname, 'public')));

// routing middlewares
app.use('/', indexRouter);
app.use('/users', userRouter);

//error handlers

//404
app.use((req, res, next) => {
  res.statusCode(404).send('Page not found');
});

//custom error handlers
app.use((err, req, res, next) => {
  res.send(err);
});

//listener
app.listen(3000, () => {
  console.log('server is listening on port 3k');
});
