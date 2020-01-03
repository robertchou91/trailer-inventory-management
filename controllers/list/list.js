app.controller('listController', function ($scope, $http) {

    $http.get("https://cargo-trailer-server.herokuapp.com/api/trailers")
        .then(function (response) {
            console.log(response.data);
            console.log("Successfully got Trailers");
            $scope.trailers = response.data;
        }, function (response) {
            console.log("Unable to get Trailers");
        });

    $scope.delete = function (object) {
        $http({
            url: 'https://cargo-trailer-server.herokuapp.com/api/trailers/' + object.id,
            method: 'DELETE',
        }).then(function (res) {
            console.log(res.data);
            console.log("trailer deleted");
        }, function (error) {
            console.log(error);
            console.log("trailer not deleted");
        });
    };
});