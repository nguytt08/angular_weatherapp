var app = angular.module('Weather', []);
var apiKey = '84aa29c86caa8e7fa64cec3c67083b4e';

app.controller('WeatherCtrl', ['$scope', '$http', function ($scope, $http) {
  // $http.defaults.headers.common['APPID'] = apiKey;
  $scope.temp = 42

  $scope.getWeather = function(location) {
    if (!isNaN(location)) {
      var apiUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${location}`
    } else {
      var apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}`
      }

      $http.get(apiUrl, {params: {'APPID': apiKey, 'units': 'imperial'}})
    .then(function(data) {
      $scope.weather = data;
      console.log(data.data.name, data.data.weather[0].description);
  })
    .catch(function(err) {
      console.log('Error retrieving from API', err);
    });

}


  $scope.submitLoc = function() {
    console.log('submit button clicked');
    console.log('location', $scope.location, isNaN($scope.location));

    $scope.getWeather($scope.location);
  }


  // $scope.getTemp();
}]);
