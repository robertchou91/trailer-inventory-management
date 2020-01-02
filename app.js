var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/main.html"
        })
        .when("/list", {
            templateUrl: "views/list.html"
        })
        .when("/create", {
            templateUrl: "views/create.html"
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
});
