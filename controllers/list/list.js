app.controller('listController', function($scope, $http) {

    $http.get("https://cargo-trailer-server.herokuapp.com/api/trailers")
        .then(function(response) {
            console.log(response.data);
            console.log("Successfully got Trailers");
            $scope.trailers = response.data; 
        }, function(response) {
            console.log("Unable to get Trailers");
        });
    
});