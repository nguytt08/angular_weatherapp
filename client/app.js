var app = angular.module('WeatherApp', ['Weather', 'ngRoute']);


app.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'weather/weather.html',
      controller: 'WeatherCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });



})

// app.controller('WeatherCtrl', function WeatherCtrl($scope) {
//   $scope.weather = '42 degrees celsius and sunny'
// });

