app.controller('editController', function ($scope, $http, $routeParams, $window) {
    $scope.regex = '\\d+';
   $scope.regex1 = '^[a-zA-Z0-9]{4}-[a-zA-Z0-9]{3}$'
   $scope.regex2 = '^[a-zA-Z-]{1,22}$'
   $scope.regex3 = '(17[78][0-9]|179[0-9]|1[89][0-9]{2}|[2-5][0-9]{3}|6[0-6][0-9]{2}|6700)'
   $scope.regex4 = '([1-9]|[1-8][0-9]|9[0-9])'
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
        $http.get("https://cargo-server-production.herokuapp.com/api/trailers/" + id)
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
            // quantity: $scope.quantity

        }


        $http.put('https://cargo-server-production.herokuapp.com/api/trailers/' + id, (data)).then(function (response) {

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

