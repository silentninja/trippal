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

.controller('PlacesCtrl', function($scope, $ionicModal, $timeout, $state, TripService, ActivityService, TripChefService, $timeout) {
  $scope.places = TripService.getPlaces();
  $scope.activity = ActivityService.getSelectedActivity();
  
  var Marker = function(id, latitude, longitude, labelContent) {
      this.id = id;
      this.coords = {
        latitude : latitude,
        longitude : longitude
      },
      this.options = {
        labelContent : labelContent,
        labelClass : "label-marker"
      }
  };

  var Circle = function(id, latitude, longitude) {
    this.id =  id,
    this.center = {
      latitude: latitude,
      longitude: longitude
    },
    this.radius = 500,
    this.stroke = {
      color: '#08B21F',
      weight: 2,
      opacity: 1
    },
    this.fill = {
      color: '#08B21F',
      opacity: 0.5
    }
  };

  var Line = function(id, to, from) {
      this.id = id;
      this.path = [];
      this.path.push(to);
      this.path.push(from);
      this.stroke =  {
        color: '#6060FB',
        weight: 2
      }
  };

  $scope.customizePlan = function(costBudget) {
    $scope.costBudget = costBudget;
    $scope.choosePlace($scope.selectedPlace);
  };

  $scope.choosePlace = function(place) {
    $scope.smaller = true;
    $scope.isLoaded = false;
    $scope.selectedPlace = place;
    TripService.setSelectedPlace(place);
    console.log($scope.costBudget);
    if($scope.costBudget && $scope.costBudget!=undefined) {
      TripChefService.getPlacesInOrder("attr1", 10, 12, Number($scope.costBudget));
    } else {
      TripChefService.getPlacesInOrder("attr1", 10, 12);
    }
    
    $scope.map = { center: {latitude: $scope.selectedPlace.latitude, longitude: $scope.selectedPlace.longitude }, zoom: 14 };
    $scope.circles = [];
    $scope.markers = [];
    $scope.polylines = [];
    $scope.finalPlan = [];
    
    if($scope.selectedPlace && $scope.selectedPlace.attractions && $scope.selectedPlace.attractions.length > 0) {
      $scope.circles.push(new Circle(0, $scope.selectedPlace.attractions[0].lat, $scope.selectedPlace.attractions[0].lon));
      $scope.selectedPlace.attractions.forEach(function(attraction) {
        console.log(attraction);
        $scope.markers.push(new Marker(attraction.id, attraction.lat, attraction.lon, attraction.name));
      });
      
      $scope.preferredPath = [1, 0, 2];

      $scope.selectedPlace.attractions.forEach(function(attraction, index) {
        if((index+1) < $scope.preferredPath.length) {
          var line = new Line(
            index, 
            { 
              latitude : $scope.markers[index].coords.latitude, 
              longitude : $scope.markers[index].coords.longitude 
            }, 
            { 
              latitude : $scope.markers[index+1].coords.latitude, 
              longitude : $scope.markers[index+1].coords.longitude 
            }
          );
          $scope.polylines.push(line);
        }  
      });
      $scope.finalPlan = TripChefService.getPlan();
    }
    


    $state.go("app.searchresult.place");
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

