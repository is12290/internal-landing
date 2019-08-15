var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const serverless = require('serverless-http');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../dist/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist/public')));

const router = require('./routes');

app.use('/.netlify/functions/app', router)

// app.use(router);

app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
module.exports.handler = serverless(app);