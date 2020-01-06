app.controller('listController', function ($scope, $window, $http) {
    $scope.trailers = [];
    // $scope.userLoggedIn = true;
    // $scope.userLoggedIn = sessionStorage.getItem("userIn");;
    console.log($scope.userLoggedIn);
    $http.get("https://cargo-trailer-server.herokuapp.com/api/trailers")
        .then(function (response) {
            console.log("Successfully got Trailers");
            $scope.trailers = response.data;
            console.log($scope.trailers);
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

    $scope.refresh = function () {
        $http.get('https://cargo-trailer-server.herokuapp.com/api/trailers/')
            .then(function (response) {
                $scope.trailers = response.data;
            });
    }

    $scope.Manufacturer = [
        { "manufacturer": "Arising" },
        { "manufacturer": "Big Tex Trailers" },
        { "manufacturer": "Little Tex Trailers" },
    ];

    $scope.conditions = [
        { "condition": "New" },
        { "condition": "Used" },
        { "condition": "Cosmetic Damage" },
    ];

    $scope.size = [
        { "dimension": "6X12" },
        { "dimension": "7X14" },
        { "dimension": "8.5X16" },
        { "dimension": "8.5X24" },
    ];

    $scope.years = [
        { "year": "2018" },
        { "year": "2019" },
        { "year": "2020" },
    ];

    $scope.pagination = {
        currentPage: 0,
        pageSize: 25,
        numberOfPages: function () {
            return Math.ceil($scope.trailers.length / $scope.pagination.pageSize);
        }
    };

    if (sessionStorage.userIn != "true") {
        $window.location.href = '/';
    }


});


app.filter('startFrom', function () {
    if (typeof input === undefined) {
        return null;
    } else {
        return function (input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    }
});


