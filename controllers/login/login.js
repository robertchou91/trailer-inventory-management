app.controller("loginController", function ($scope, $http, $window) {
	$scope.submit = function () {
		var data = {
			username: $scope.username,
			password: $scope.password
		}


		$http.post('https://cargo-trailer-server.herokuapp.com/api/login', (data)).then(function (response) {
			if (response.data) {
				// $scope.user = response.data;

				sessionStorage.userIn = "true";
				$scope.$parent.userLoggedIn = sessionStorage.getItem("userIn");
				// var user = JSON.parse(sessionStorage.getItem("userIn"));
				// $scope.$parent.userLoggedIn = user;
				// console.log(user);
				console.log($scope.userLoggedIn);
				$scope.msg = "Succesfully logged in";
				alert($scope.msg);
				console.log($scope.msg);
				console.log(response.status);
				$window.location.href = '#!/list';


			}


		})
	}

	if (sessionStorage.userIn == "true") {
		$window.location.href =  '#!/list';
	}



});



