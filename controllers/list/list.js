app.controller('listController', function ($scope, $http) {

    $http.get("https://cargo-trailer-server.herokuapp.com/api/trailers")
        .then(function (response) {
            console.log(response.data);
            console.log("Successfully got Trailers");
            $scope.trailers = response.data;
        }, function (response) {
            console.log("Unable to get Trailers");
        });

    $scope.delete = function (id) {
        $http({
            url: 'https://cargo-trailer-server.herokuapp.com/api/trailers/' + id,
            method: 'DELETE',
        }).then(function (res) {
            console.log(res.data);
            console.log("trailer deleted");
            $scope.trailers.splice(id,1);
        }, function (error) {
            console.log(error);
            console.log("trailer not deleted");
        });
    };

    $scope.Manufacturer = [
        {"manufacturer" : "Arising"},
        {"manufacturer" : "Big Tex Trailers"},
        {"manufacturer" : "Little Tex Trailers"},
    ];

    $scope.conditions = [
        {"condition" : "New"},
        {"condition" : "Used"},
        {"condition" : "Cosmetic Damage"},
    ];

    $scope.size = [
        {"dimension" : "6X12"},
        {"dimension" : "7X14"},
        {"dimension" : "8.5X16"},
        {"dimension" : "8.5X24"},
    ];

    $scope.years = [
        {"year" : "2018"},
        {"year" : "2019"},
        {"year" : "2020"},
    ];


//HTML slider

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

//Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
output.innerHTML = this.value;
}

$scope.pagination = {
    currentPage: 0,
    pageSize: 5,
    numberOfPages: function () {
        return Math.ceil($scope.trailers.length / $scope.pagination.pageSize);
    }
};

  });

  app.filter('startFrom', function () {
    if(typeof input === undefined){
        return null;
    }else{
        return function (input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    }
});
