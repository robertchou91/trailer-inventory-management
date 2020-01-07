app.controller("loginController", function ($scope, $http, $window) {
	$scope.submit = function () {
		var data = {
			username: $scope.username,
			password: $scope.password
		}


		$http.post('https://cargo-trailer-server.herokuapp.com/api/login', (data)).then(function (response) {

			sessionStorage.userIn = "true";
			$scope.$parent.userLoggedIn = sessionStorage.getItem("userIn");
			$scope.msg = "Succesfully logged in";
			console.log($scope.msg);
			console.log(response.status);
			$window.location.href = '#!/list';
		}, function (response) {
		})
	}


	if (sessionStorage.userIn == "true") {

		$window.location.href = '#!/list';
	}

});



