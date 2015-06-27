angular.module("travelchef.services", [])
.factory('TripService', function(){
	
	var Place = function(latitude, longitude, name, shortdesc, desc, imageURL, attractions, events, hotels, ratings, reviews, approxCost, similarity) {
		this.latitude = latitude;
		this.longitude = longitude;
		this.name = name;
		this.shortdesc = shortdesc;
		this.desc = desc;
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
		new Place("", "", "Goa", "", "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 16th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to laid-back fishing villages such as Agonda.", "img/goa.jpg"),
		new Place("", "", "Delhi", "", "Delhi (/ˈdɛli/, Hindustani pronunciation: [d̪ɪlliː] Dilli), officially the National Capital Territory of Delhi, is the Capital territory of India.[3] It has a population of about 11 million and a metropolitan population of about 16.3 million, making it the second most populous city and second most populous urban agglomeration in India.[2][4] Such is the nature of urban expansion in Delhi that its growth has expanded beyond the NCT to incorporate towns in neighbouring states and at its largest extent can count a population of about 25 million residents as of 2014.", "img/delhi.jpg"),
		new Place("", "", "Pondicherry", "", "Pondicherry (or Puducherry), a French colonial settlement in India until 1954, is now a Union Territory town bounded by the southeastern Tamil Nadu state. Its French legacy is preserved in its French Quarter, with tree-lined streets, mustard-colored colonial villas and chic boutiques. A seaside promenade runs along the Bay of Bengal and passes several statues, including a 4m-high Gandhi Memorial.", "img/pondy.jpg"),
		new Place("", "", "Coorg", "", "Kodagu also known as Kodava Nadu, is an administrative district in Karnataka, India. It occupies an area of 4,102 square kilometres (1,584 sq mi) in the Western Ghats of southwestern Karnataka. In 2001 its population was 548,561, 13.74% of which resided in the district's urban centres, making it the least populous of the 30 districts in Karnataka.[3] The district is bordered by Dakshina Kannada district to the northwest, Hassan district to the north, Mysore district to the east, Kannur district of Kerala to the southwest, and the Wayanad district of Kerala to the south. Agriculture is the most important factor that upholds the economy of Kodagu and the main crops cultivated in this region are rice and coffee. Coorg is rich in natural resources which included timber and spices. Madikeri (English: Mercara) is the headquarters of Kodagu.", "img/coorg.png")
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