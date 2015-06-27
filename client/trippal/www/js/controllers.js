angular.module('travelchef.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, ActivityService) {
 
  $scope.searchForPlaces = function(activity) {
    $scope.hide = true;
    ActivityService.setSelectedActivity(activity);
    $scope.submitted = true;
    $state.go("app.searchresult");
  };

})

.controller('PlacesCtrl', function($scope, $ionicModal, $timeout, $state, TripService, ActivityService) {
  $scope.places = TripService.getPlaces();
  $scope.activity = ActivityService.getSelectedActivity();
  $scope.choosePlace = function(place) {
    $scope.smaller = true;
    $scope.selectedPlace = place;
    TripService.setSelectedPlace(place);
    $state.go("app.searchresult.place");
  };

})
.controller('PlaceCtrl', function($scope, $ionicModal, $timeout, $state, TripService) {
    
})

.controller('HomeController', function($scope, $timeout) {

});

