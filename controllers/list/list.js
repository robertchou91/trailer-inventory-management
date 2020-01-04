app.controller('listController', function ($scope, $http) {

   $http.get("https://cargo-trailer-server.herokuapp.com/api/trailers")
        .then(function (response) {
            console.log("Successfully got Trailers");
            $scope.trailers = response.data;
        }, function (response) {
            console.log("Unable to get Trailers");
        }); 

    $scope.delete = function (id) {
        $http({
            url: 'https://cargo-trailer-server.herokuapp.com/api/trailers/' + id,
            method: 'DELETE',
        }).then(function (response) {
            console.log("trailer deleted");
            $scope.refresh();
        }, function (error) {
            console.log(error);
            console.log("trailer not deleted");
        });
    };

    $scope.refresh = function(){
        $http.get('https://cargo-trailer-server.herokuapp.com/api/trailers/')
              .then(function(response){
                   $scope.trailers = response.data;
              });
    }

    $scope.conditions = [
        {"condition" : "new"},
        {"condition" : "used"},
        {"condition" : "damaged"},
    ];

});