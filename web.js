var express = require('express');

var mongoose = require('mongoose');

mongoose.connect('localhost/MyDB');

var routes = require('./routes');

var server = express();

server.use(express.urlencoded());

server.set('views', __dirname);

server.get('/', function (req, res) {
    res.sendfile('index.html');
});

server.get('/dynamic', function (req, res) {
    res.render('dynamic.ejs');
});

server.post('/sayHello', routes.sayHello);

server.post('/createPerson', routes.createPerson);

server.listen(8080);
