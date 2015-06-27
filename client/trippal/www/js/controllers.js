angular.module('travelchef.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, ActivityService, $rootScope) {
 
  $scope.searchForPlaces = function(activity) {
    $scope.hide = true;
    ActivityService.setSelectedActivity(activity);
    $scope.submitted = true;
    $state.go("app.searchresult");
  };

      var off = $rootScope.$on('$stateChangeSuccess', function () {
        if($state.is("app.searchresult")) {

        }
        else if ($state.is("app.searchresult.place")) {

        }
        else if ($state.is('app.search')) {
          $scope.submitted = false;

          // update your resources here, do whatever you need
        }
      });
      $scope.$on('$destroy', off);
})

.controller('PlacesCtrl', function($scope, $ionicModal, $timeout, $state, TripService, ActivityService) {
  $scope.places = TripService.getPlaces();
  $scope.activity = ActivityService.getSelectedActivity();
  $scope.choosePlace = function(place) {
    $scope.smaller = true;
    $scope.isLoaded = false;
    $scope.selectedPlace = place;
    TripService.setSelectedPlace(place);
    $scope.loader();
  };
      $scope.loader = function() {
        $timeout(function() {
          $scope.isLoaded = true;
          $state.go("app.searchresult.place");
        }, 5000);
      };


  $scope.toggleSearch = function() {
    $scope.showSearch = !$scope.showSearch;
  }

})
.controller('PlaceCtrl', function($scope, $ionicModal, $timeout, $state, TripService) {
    $scope.loader();
    })

.controller('HomeController', function($scope, $timeout) {

});

