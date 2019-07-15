/*
** All imports
** Imports from official libs
*/
var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

/*
** All imports
** Imports from libs created in this project
** Two routers to use (could be more or less)
*/
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

/*
** Middleware to authorize CORS
** Allow AJAX calls to hit this server
** Allow all origins
** Allow GET POST PUT HEAD DELETE OPTIONS methods
** Allow content-type and x-requested-with
*/
app.use((req, res,next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*')
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with')
  next()
})

/*
** Activate some configs
** logger in dev mode
** Handle and transform request as JSON
*/
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*
** Read url list from top to bottom (and stop on the first match)
** When the url start with /aa, forward into indexRouter
** When the url start with /users, forward into usersRouter
*/
app.use('/aa', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
