require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./models/connection.js');

var app = express();

const cors = require('cors');
app.use(cors());

var indexRouter = require('./routes/index.js');
var usersRouter = require('./routes/users.js');
var tripsRouter = require('./routes/trips.js');
var bookingsRouter = require('./routes/bookings')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/trips', tripsRouter);
app.use('/bookings', bookingsRouter);

module.exports = app;