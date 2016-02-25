angular.module('translateMod')
	.controller('translateCtrl', ['$scope', '$http', 'translateFac', function($scope, $http, translateFac){
		$scope.greeting = "Whattup"

		$scope.languages = translateFac.languages;

		$http.post('/something').then(console.log(req.body))
		// googleTranslate.translate('My name is Brandon', 'es', function(err, translation) {
  // 			console.log(translation.translatedText);
  // // =>  Mi nombre es Brandon
		// });




	}])