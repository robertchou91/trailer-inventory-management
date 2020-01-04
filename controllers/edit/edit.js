app.controller('editController', function($scope, $http, $routeParams) {
    // $scope.trailer = [];
    var id = $routeParams.id;
    console.log(id);
    $scope.getById = function() {
        $http.get("https://cargo-trailer-server.herokuapp.com/api/trailers/" + id)
            .then(function(response) {
                // console.log(response);
                $scope.trailer = response.data;
                console.log(response.data);
            });
    }
    $scope.getById();
    
        
});