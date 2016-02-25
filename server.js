var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var googleTranslate = require('google-translate')('AIzaSyD24-rh2xnOHPYdIsmvgl29arHT54bNOyI');


var app = express();

mongoose.connect('mongodb://localhost/translator')
var transCtrl = require('./controllers/transCtrl.js');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	googleTranslate.translate('My name is Brandon', 'es', function(err, translation) {
  console.log(translation.translatedText);
  res.sendFile("home.html", {root: './public/html/'})
  // =>  Mi nombre es Brandon
});
})


app.post('/something', transCtrl.someFunc)











var port = 3000
app.listen(port, function(){
	console.log('Server running on port ' + port)
})