var app = angular.module("myApp", ["ngRoute"]);

// Customer ID
var versusID = "58d241886377390f246dc948"
// my.twenty-one api
var API = 'http://my.twenty-one.co/api-v1/'


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../views/home.html"
    })
    .when("/destination/:destinationID", {
        templateUrl : "../views/destination.html",
        controller : 'destinationCtrl'
    })
    .when("/excursion/:serviceID", {
        templateUrl : "../views/excursion.html",
        controller : 'serviceCtrl'
    })
    .when("/package/:serviceID", {
        templateUrl : "../views/package.html",
        controller : 'serviceCtrl'
    })

});