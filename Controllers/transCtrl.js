var Language = require('../models/translateModel.js'); 

var codes = require('../models/languageCodes.json');

var someFunc = function(){
	googleTranslate.translate('My name is Brandon', 'es', function(err, translation) {
  		res.send(translation.translatedText);
  // =>  Mi nombre es Brandon
	});
}

module.exports = {
	someFunc : someFunc
}