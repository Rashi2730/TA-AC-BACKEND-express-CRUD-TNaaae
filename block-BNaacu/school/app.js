var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://127.0.0.1:27017/', (err) => {
  console.log(err ? err : 'Connected true');
});

var app = express();

app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/tudents/new', (req, res) => {
  res.render('form.ejs');
});

app.use((req, res, next) => {
  res.send('PAGE NOT FOUND');
});

app.listen(3000, () => {
  console.log('Server listening to port 3k');
});
