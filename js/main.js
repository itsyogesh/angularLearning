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

app.controller('MailListingController', function($scope){
  $scope.email = [{
    'id': 1,
    'from': 'yogi@fullstack.io',
    'to' : 'ravi@fullstack.io',
    'subject': 'Great job',
    'body': 'Congrats on the release of the app'
  }];
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
