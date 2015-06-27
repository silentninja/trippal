angular.module("starter.services")
.factory('TripService', function(){
	
	var Place = function(latitude, longitude, name, attractions, events, hotels, ratings, reviews, approxCost, similarity) {
		this.latitude = latitude;
		this.longitude = longitude;
		this.name = name;
		this.attractions = attractions || [];
		this.events = events || [];
		this.hotels = hotels || [];
		this.ratings = ratings || [];
		this.reviews = reviews || [];
		this.approxCost = approxCost || 1000;
		this.similarity = similarity || 1;

	};

	var initialPlaces = [
		new Place("", "", "Goa"),
		new Place("", "", "Delhi"),
		new Place("", "", "Pondicherry")
	];

	var selectedPlace = undefined;
	var getSelectedPlace = function(place) {
		selectedPlace = place;
	};

	var getInitialPlaces = function() {
		return initialPlaces;
	};

	return {
		getPlaces : getInitialPlaces,
		getSelectedPlace : getSelectedPlace
	}
});