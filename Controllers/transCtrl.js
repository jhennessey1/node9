// var Language = require('../models/translateModel.js'); 
var config = require('../config.js')
var googleTranslate = require('google-translate')(config.key);

function translate(req, res){
	console.log("came to ctrl")
	googleTranslate.translate(req.body.text, req.body.languageFrom, req.body.languageTo, function(err, translation) {
  		if(translation.translatedText.toLowerCase() === req.body.text.toLowerCase()){
  			res.send("I'm afraid I can't let you do that, Dave.")
  		}
  		res.send(translation.translatedText);
	});
	console.log("made it through google API")
}

module.exports = {
	translate : translate
}