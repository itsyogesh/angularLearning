var app = angular.module("myApp", []);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "templates/home.html",
        controller: 'HomeController'
    })
    .when('/settings',  {
        templateUrl: 'templates/settings.html',
        controller: 'SettingsController'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('HomeController', function($scope){

});

app.controller('MailListingController', function($scope, $http){
  $scope.email = [];

  $http({
    method: 'GET',
    url: '/api/mail'
  })
  .success(function(data, status, headers){
    $scope.email = data.all;
    console.log(data.all);
  })
  .error(function(data, status, headers){});
});

app.controller('ContentController', function($scope){

});

app.controller('SettingsController', function($scope){
  $scope.settings = {
    name: "Ari",
    email: "me@example.com"
  };
  $scope.updateSettings = function() {
    console.log("updateSettings was called.");
  }
});
