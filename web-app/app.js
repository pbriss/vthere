var express        = require('express');
var bodyParser     = require('body-parser');                    // pull information from HTML POST (express4)
var logger         = require('morgan');                         // log requests to the console (express4)
var app            = express();
var server 		   = require('http').Server(app);


var rootFolder = process.env.NODE_ENV == 'production' ? 'dist' : 'app';

app.use(express.static(__dirname + '/' + rootFolder));

// log every request to the console
app.use(logger('dev'));
app.use(bodyParser.json());

// get an instance of router
var router = express.Router();
app.use('/', router);

// expose app
exports = module.exports = app;

app.set('port', process.env.PORT || 3000);
server.listen(app.get('port'));

console.log('Listening on: ' + app.get('port'));