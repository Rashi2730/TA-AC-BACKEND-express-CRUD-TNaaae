var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var studentRouter = require('./routes/students');

mongoose.connect('mongodb://127.0.0.1:27017/', (err) => {
  console.log(err ? err : 'Connected true');
});

var app = express();

//middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/students', studentRouter);

app.use((req, res, next) => {
  res.status(404).send('PAGE NOT FOUND');
});



app.listen(3000, () => {
  console.log('Server listening to port 3k');
});
