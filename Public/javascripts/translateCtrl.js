angular.module('translateMod')
	.controller('translateCtrl', ['$scope', '$http', 'translateFac', function($scope, $http, translateFac){
		$scope.greeting = "Translate some shit, why don't you?"

		$scope.languages = translateFac.languages;
		$scope.translateThis = function() {
			console.log("function is called")

			$http.post('/translate', $scope.translation)
				.then(function(serverResponse){
					console.log(serverResponse)
					$scope.showText = serverResponse.data
				})
		}

		}])

angular.module('translateMod')
	.controller('loginCtrl', ['$scope', '$http', function($scope, $http){
		

		$scope.signup = function(){
            $http({
                method : 'POST',
                url    : '/signup',
                data   : $scope.signupForm
            }).then(function(returnData){
                console.log(returnData)
                if ( returnData.data.success ) { window.location.href="/quiz" }
            })
        }

        $scope.login = function(){
            $http({
                method : 'POST',
                url    : '/login_data',
                data   : $scope.loginForm
            }).then(function(returnData){
                if ( returnData.data.success ) { window.location.href="/quiz" } 
                else { console.log(returnData)}
            })
        }
		
	}])

angular.module('translateMod')
    .controller('quiz', ['$scope', '$http', function($scope, $http){
        $http({
            method : 'GET',
            url    : '/api/me',
        }).then(function(returnData){
            console.log(returnData)
            if ( returnData.data.user ) {
                $scope.user = returnData.data.user
            }
        })        
    }])