var app = angular.module('myApp', ['ngRoute', 'ngStorage']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: 'logincontrol'
        })
        .when("/list", {
            templateUrl: "views/list.html",
            controller: 'listController',
            // resolve: {
            //     'check': function($location, $sessionStorage) {
            //         if (!$sessionStorage.loggedIn) {
            //             $location.path('/'); 
            //         } else {
            //             console.log("testing");
            //         }
            //     }
            // }
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

    // $scope.getSession = sessionStorage.getItem('userIn');
});


