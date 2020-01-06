var app = angular.module('myApp', ['ngRoute', 'ngStorage']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: 'loginController'
        })
        .when("/list", {
            templateUrl: "views/list.html",
            controller: 'listController',
        })
        .when("/create", {
            templateUrl: "views/create.html",
            // controller: 'createController'
        })
        .when("/edit/:id", {
            templateUrl: "views/edit.html",
            controller: 'editController'
        })
        .otherwise({
            redirectTo: '/'
        });
    // $locationProvider.html5Mode(true);

    
});

app.controller('navController', function ($scope) {
    
    $scope.userLoggedIn = sessionStorage.getItem("userIn");
})


