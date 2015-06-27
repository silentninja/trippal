// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('travelchef', ['ionic', 'travelchef.controllers', 'travelchef.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    controller: 'AppCtrl',
    templateUrl: "./../templates/home.html"
  })
  .state('app.searchresult', {
    url: "/searchresult",
    controller: 'PlacesCtrl',
    templateUrl: "./../templates/browse.html"
  })
  .state('app.searchresult.place', {
    url: "/place",
    controller: 'PlaceCtrl',
    templateUrl: "./../templates/place.html"
  })



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app');
});
