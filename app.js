var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "main.html"
        })
        .when("/list", {
            templateUrl: "list.html"
        })
        .when("/create", {
            templateUrl: "create.html"
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
});
