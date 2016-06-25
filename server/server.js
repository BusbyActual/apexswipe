var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var morgan = require('morgan');
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
var auth0 = require('./auth0.js');

var yelpRouter = require('./routes/yelpRouter');
var deckRouter = require('./routes/deckRouter');
var userRouter = require('./routes/userRouter');
var jwtCheck = jwt({
  secret: new Buffer(auth0.clientSecret),
  audience: auth0.clientID
});

app.use(morgan('dev'));
app.use('/', express.static('public')); // This is used to serve up static files in the public directory for deployment purposes.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use('/', jwtCheck);
app.use('/yelpSearch', yelpRouter);
app.use('/decks', deckRouter);
app.use('/users', userRouter);

module.exports = http;


