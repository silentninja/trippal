angular.module("travelchef.services", [])
.factory('TripService', function(){
	
	var Place = function(latitude, longitude, name, imageURL, attractions, events, hotels, ratings, reviews, approxCost, similarity) {
		this.latitude = latitude;
		this.longitude = longitude;
		this.name = name;
		this.imageURL = imageURL;
		this.attractions = attractions || [];
		this.events = events || [];
		this.hotels = hotels || [];
		this.ratings = ratings || [];
		this.reviews = reviews || [];
		this.approxCost = approxCost || 1000;
		this.similarity = similarity || 1;

	};

	var initialPlaces = [
		new Place("", "", "Goa", "img/goa.jpg"),
		new Place("", "", "Delhi", "img/delhi.jpg"),
		new Place("", "", "Pondicherry", "img/pondy.jpg")
	];

	var selectedPlace = undefined;
	var setSelectedPlace = function(place) {
		selectedPlace = place;
	};

	var getSelectedPlace = function() {
		return selectedPlace;
	};

	var getInitialPlaces = function() {
		return initialPlaces;
	};

	return {
		getPlaces : getInitialPlaces,
		getSelectedPlace : getSelectedPlace,
		setSelectedPlace : setSelectedPlace
	}
})
.factory('ActivityService', function(){
	
	var selectedActivity = undefined;
	var setSelectedActivity = function(activity) {
		selectedActivity = activity;
	};

	var getSelectedActivity = function() {
		return selectedActivity;
	};

	var getInitialActivities = function() {
		return initialActivities;
	};

	return {
		getInitialActivities : getInitialActivities,
		setSelectedActivity : setSelectedActivity,
		getSelectedActivity : getSelectedActivity
	}
});