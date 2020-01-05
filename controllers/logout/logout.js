app.controller('logoutController', function($scope, $window) {
    $scope.logout = function () {
        sessionStorage.removeItem("userIn");
        $scope.$parent.userLoggedIn = false;
        console.log($scope.$parent.userLoggedIn);
        $window.location.href = '/';
    }
})