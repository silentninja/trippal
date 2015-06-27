angular.module('travelchef.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, ActivityService) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.searchForPlaces = function(activity) {
    $scope.hide = true;
    console.log("Activity", activity);
    ActivityService.setSelectedActivity(activity);

    $state.go("app.searchresult");
  };

})

.controller('PlacesCtrl', function($scope, $ionicModal, $timeout, $state, TripService) {
  
  $scope.places = TripService.getPlaces();

})

.controller('HomeController', function($scope, $timeout) {




    });

