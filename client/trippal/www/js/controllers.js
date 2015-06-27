angular.module('travelchef.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, ActivityService) {
 
  $scope.searchForPlaces = function(activity) {
    $scope.hide = true;
    ActivityService.setSelectedActivity(activity);
    $scope.submitted = true;
    $state.go("app.searchresult");
  };

})

.controller('PlacesCtrl', function($scope, $ionicModal, $timeout, $state, TripService) {
  $scope.places = TripService.getPlaces();

  $scope.choosePlace = function(place) {
    console.log(place.name);
    TripService.setSelectedPlace(place);
    $scope.place = TripService.getSelectedPlace();
    $state.go("app.searchresult.place");
  };

})
.controller('PlaceCtrl', function($scope, $ionicModal, $timeout, $state, TripService) {
  
})

.controller('HomeController', function($scope, $timeout) {

});

