var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: 'loginController'
        })
        .when("/list", {
            templateUrl: "views/list.html",
            controller: 'listController'
        })
        .when("/create", {
            templateUrl: "views/create.html",
            controller: 'createController'
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

