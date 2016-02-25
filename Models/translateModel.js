var mongoose = require('mongoose');


var languageSchema = mongoose.Schema ({
	language : String,
	langCode : String
})

module.exports = mongoose.model('Language', languageSchema)