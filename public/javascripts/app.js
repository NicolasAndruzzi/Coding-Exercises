var app = angular.module('crownPeak', ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/splash.html',
      controller: 'splashController'
    })
    .when('/challenge1', {
      templateUrl: 'views/challenge1.html',
      controller: 'challenge1Controller'
    })
    .when('/challenge2', {
      templateUrl: 'views/challenge2.html',
      controller: 'challenge2Controller'
    })
    .when('/challenge3', {
      templateUrl: 'views/challenge3.html',
      controller: 'challenge3Controller'
    })
    // .when('/challenge4', {
    //   templateUrl: 'views/challenge4.html',
    //   controller: 'challenge4Controller'
    // })
    // .when('/challenge5', {
    //   templateUrl: 'views/challenge5.html',
    //   controller: 'challenge5Controller'
    // })
    .when('/challenge6', {
      templateUrl: 'views/challenge6.html',
      controller: 'challenge6Controller'
    })
    .when('/challenge7', {
      templateUrl: 'views/challenge7.html',
      controller: 'challenge7Controller'
    })
    .when('/404error', {
      templateUrl: 'views/404error.html',
      controller: '404errorController'
    })
    .otherwise({
      redirectTo: '/404error'
    });
});
