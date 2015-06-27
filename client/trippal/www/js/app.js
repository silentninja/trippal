// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('travelchef', ['ionic', 'travelchef.controllers', 'travelchef.services', 'ngAnimate'])

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
    templateUrl: "./templates/home.html"
  })
  .state('app.search', {
    url: "/search",
        views: {
          "main" : {
            controller: 'AppCtrl',
            templateUrl: "./templates/mainsearch.html"
          }
        }
  })
  .state('app.searchresult', {
    url: "/searchresult",
        views: {
          "main" : {
            controller: 'PlacesCtrl',
            templateUrl: "./templates/browse.html"
          }
          }
        })

  .state('app.searchresult.place', {
    url: "/place",
        views: {
          "places" : {
            controller: 'PlaceCtrl',
            templateUrl: "./templates/place.html"
          }
        }
  })



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
})

.run(function($rootScope, $state) {
      //TODO: write clearing logic
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

        if(toState===fromState) {
          $state.reload();
        }


      });

    });
