const PORT = process.env.PORT || 8080;
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

const mongoURI = 'mongodb://127.0.0.1:27017/DressStore';


mongoose.connect(mongoURI)
  .then(() => console.log('Connected!'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


module.exports = app;

