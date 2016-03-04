var express        = require('express');
var bodyParser     = require('body-parser');                    // pull information from HTML POST (express4)
var logger         = require('morgan');                         // log requests to the console (express4)
var app            = express();
var server 		   = require('http').Server(app);


var rootFolder = process.env.NODE_ENV == 'production' ? 'dist' : 'app';


var offers = [];
var answers = [];

app.use(express.static(__dirname + '/' + rootFolder));

// log every request to the console
app.use(logger('dev'));
app.use(bodyParser.json());

// get an instance of router
var router = express.Router();
app.use('/', router);
app.post('/offer', function(req, res) {
  offers.push(req.body);
  console.log(req.body);
  console.log(JSON.stringify(offers));
  res.send('Success');
});
app.post('/answer', function(req, res) {
  answers.push(req.body);
  console.log(JSON.stringify(answers));
  res.send('Success');
});

app.get('/offers', function(req, res){
  res.json(offers);
});

app.get('/answers', function(req, res) {
  res.json(answers);
});

app.get('/clear', function(req, res){
  offers = [];
  answers = [];
  res.send('Success');
});

var hasShaken = false;
app.get('/hasShaken', function(req, res) {
  res.send(hasShaken.toString());
  hasShaken = false;
});

app.get('/shake', function(req, res) {
  hasShaken = true;
  res.send('Success');
});

// expose app
exports = module.exports = app;

app.set('port', process.env.PORT || 3000);
server.listen(app.get('port'));

console.log('Listening on: ' + app.get('port'));
