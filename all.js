

var app = angular.module('myApp',['ionic','utilityModule']);


app.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.tabs.position('bottom');

    $stateProvider
        .state('start',{
            url:'/start',
            templateUrl:'tpl/start.html'
        });







    $urlRouterProvider.otherwise('/start');






});