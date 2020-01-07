app.controller('editController', function ($scope, $http, $routeParams, $window) {
    $scope.trailer = [];
    var id = $routeParams.id;
    console.log(id);

    $scope.upload = function () {
        var f = document.getElementById('file').files[0];
        var r = new FileReader();
        r.onloadend = function (e) {
            $scope.image = r.result;
        }
        r.readAsDataURL(f);
    }

    $scope.getById = function () {
        $http.get("https://cargo-trailer-server.herokuapp.com/api/trailers/" + id)
            .then(function (response) {
                // console.log(response);
                $scope.trailer = response.data;
                console.log(response.data);
            });
    }
    $scope.getById();

    $scope.submit = function () {
        var data = {

            title: $scope.modelnum,
            image: $scope.image,
            manufacturer: $scope.manufacturer,
            price: $scope.amount,
            model: $scope.modelnum,
            capacity: $scope.payload,
            dimension: $scope.dimension,
            condition: $scope.condition,
            color: $scope.color,
            year: $scope.year,
            quantity: $scope.quantity

        }


        $http.put('https://cargo-trailer-server.herokuapp.com/api/trailers/' + id, (data)).then(function (response) {

            if (response.data)

                $scope.msg = "Post Data Submitted Successfully!";
            console.log($scope.msg)
            console.log(response.status)
            console.log(response.data)
            $window.location.href = '#!/list'

        })
    }


});

app.directive('myModelValue', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            model: '=ngModel'
        },
        link: function (scope, element, attr, controller) {
            attr.$observe('myModelValue', function (finalValue) {
                scope.model = finalValue;
            });
        }
    };
});

