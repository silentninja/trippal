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

	var Attraction = function(id, name, lat, lon, shortdesc, categories, approxCost, openTime, closeTime, visitingTime, suitableTime, ratings, reviews, avgrating) {
		this.id = id;
		this.name = name;
		this.lat = lat;
		this.lon = lon;
		this.shortdesc = shortdesc;
		this.categories = categories;
		this.approxCost = approxCost || 9400;
		this.openTime = openTime || 8.30;
		this.closeTime = closeTime || 5.30;
		this.visitingtime = visitingTime || 2;
		this.suitableTime = suitableTime || 2;
		this.ratings = ratings || [];
		this.reviews = reviews || [];
		this.avgrating = avgrating || 3.5;
	};

	var initialPlaces = [
		new Place(
				15.4989,
		 		73.8278, 
		 		"Goa", 
		 		"", 
		 		"Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 16th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to laid-back fishing villages such as Agonda.", 
		 		"img/goa.jpg",
		 		[
		 			new Attraction(
		 					"attr1",
		 					"Goa Beach",
		 					15.4989,
		 					73.82,
		 					200,
		 					"Desc 1",
		 					[
		 						"beach",
		 						"bar",
		 						"volleyball"
		 					]
		 			),
		 			new Attraction(
		 					"attr2",
		 					"Goa Church",
		 					15.4989,
		 					73.8278,
		 					1000,
		 					"Desc 2",
		 					[
		 						"church",
		 						"religious"
		 					]
		 			),
		 			new Attraction(
		 					"attr3",
		 					"Angel Hack",
		 					15.485,
		 					73.81,
		 					1500,
		 					"Desc 3",
		 					[
		 						"hackathon",
		 						"development"
		 					]
		 			)
		 		]
		 	),
		new Place(
				28.6139, 
				77.2090, 
				"Delhi", 
				"", 
				"Delhi (/ˈdɛli/, Hindustani pronunciation: [d̪ɪlliː] Dilli), officially the National Capital Territory of Delhi, is the Capital territory of India.[3] It has a population of about 11 million and a metropolitan population of about 16.3 million, making it the second most populous city and second most populous urban agglomeration in India.[2][4] Such is the nature of urban expansion in Delhi that its growth has expanded beyond the NCT to incorporate towns in neighbouring states and at its largest extent can count a population of about 25 million residents as of 2014.", 
				"img/delhi.jpg",
				[]
			),
		new Place(
				11.9310, 
				79.7852, 
				"Pondicherry", 
				"", 
				"Pondicherry (or Puducherry), a French colonial settlement in India until 1954, is now a Union Territory town bounded by the southeastern Tamil Nadu state. Its French legacy is preserved in its French Quarter, with tree-lined streets, mustard-colored colonial villas and chic boutiques. A seaside promenade runs along the Bay of Bengal and passes several statues, including a 4m-high Gandhi Memorial.", 
				"img/pondy.jpg",
				[]
			),
		new Place(
				12.4208, 
				75.7397, 
				"Coorg", 
				"", 
				"Kodagu also known as Kodava Nadu, is an administrative district in Karnataka, India. It occupies an area of 4,102 square kilometres (1,584 sq mi) in the Western Ghats of southwestern Karnataka. In 2001 its population was 548,561, 13.74% of which resided in the district's urban centres, making it the least populous of the 30 districts in Karnataka.[3] The district is bordered by Dakshina Kannada district to the northwest, Hassan district to the north, Mysore district to the east, Kannur district of Kerala to the southwest, and the Wayanad district of Kerala to the south. Agriculture is the most important factor that upholds the economy of Kodagu and the main crops cultivated in this region are rice and coffee. Coorg is rich in natural resources which included timber and spices. Madikeri (English: Mercara) is the headquarters of Kodagu.", 
				"img/coorg.png",
				[]
			)
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
		activity.id = "beach";
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
})
.factory('TripChefService', function(TripService, ActivityService) {

	var assumptions = {
		starttime : 8.30,
		lunchtime : 12.30,
		snackstime : 17.30,
		dinner : 19.30,
		endtime : 21,
		threshold : 1
	};

	var Rating = {
		REJECT : 0,
		LEAST_FEASIBLE : 1,
		LESS_FEASIBLE : 2,
		LIKELY : 3,
		HIGHLY_LIKELY : 4,
		FAVOURABLE : 5
	};

	var AttractionRating = function(id, rating) {
		this.id = id;
		this.rating = rating;
	};

	var getVisitingTimeFromPlace = function(fromplace, attraction, index) {
		//check traffic also
		var visitingtime = [3, 5, 1];
		return visitingtime[index];
	};

	var checkRatingOfPlaceBasedOnDuration = function(fromplace, starttime, endtime) {
		
		var attractionRatings = [];

		var attractions = TripService.getSelectedPlace().attractions;

		var duration = endtime - starttime;
		
		attractions.forEach(function(attraction, index) {

			//distance based feasibility
			var goingtime = getVisitingTimeFromPlace(fromplace, attraction, index);
			var comingtime = goingtime;
			var visitingtime = attraction.visitingTime;

			var totalVisitingTime = (goingtime + visitingtime + comingtime);

			
			if(duration < goingtime) {
				attractionRatings.push(new AttractionRating(attraction.id, Rating.REJECT));
				return;
			}
			if(duration < goingtime + visitingtime) {
				attractionRatings.push(new AttractionRating(attraction.id, Rating.REJECT));
				return;
			}
			
			if(duration < totalVisitingTime) {
				if((duration - totalVisitingTime) < assumptions.threshold) {
					attractionRatings.push(new AttractionRating(attraction.id, Rating.LIKELY));
					return;
				} else {
					attractionRatings.push(new AttractionRating(attraction.id, Rating.LESS_FEASIBLE));
					console.log("something may be missed");
					return;
				}
			}
			if(duration > goingtime) {
				if(duration > (goingtime + visitingtime)) {
					if(duration > totalVisitingTime) {
						attractionRatings.push(new AttractionRating(attraction.id, Rating.FAVOURABLE));
						return;
					}
				} else {
					if((duration - totalVisitingTime) < assumptions.threshold) {
						attractionRatings.push(new AttractionRating(attraction.id, Rating.HIGHLY_LIKELY));
						return;
					}
				}
			}

			//relevance based feasibility
			attractionRatings.push(new AttractionRating(attraction.id, Rating.LESS_FEASIBLE));
			return;
		});

		return attractionRatings;
	};

	var checkRatingOfPlaceBasedOnRating = function() {
		var attractions = TripService.getSelectedPlace().attractions;
		var attractionRatings = [];
		var avgrating = [2, 5, 1];
		attractions.forEach(function(attraction, index) {
			//rating based feasibility
			var rating = avgrating[index];
			attractionRatings.push(new AttractionRating(attraction.id, Math.floor(rating)));
		});
		return attractionRatings;
	};

	var checkRatingOfPlaceBasedOnRelevance = function() {
		var attractions = TripService.getSelectedPlace().attractions;
		var attractionRatings = [];
		attractions.forEach(function(attraction) {
			//rating based feasibility
			var tags = attraction.categories;
			var tagOfActivity = ActivityService.getSelectedActivity().id;

			if(tags.indexOf(tagOfActivity) != -1) {
				attractionRatings.push(new AttractionRating(attraction.id, Rating.FAVOURABLE));
			} else {
				attractionRatings.push(new AttractionRating(attraction.id, Rating.REJECT));
			}
		});
		return attractionRatings;
	};

	var checkRatingOfPlaceBasedOnCostFactors = function(cost) {
		var attractions = TripService.getSelectedPlace().attractions;
		var attractionRatings = [];
		attractions.forEach(function(attraction) {
			//rating based feasibility
			if(cost > attraction.approxCost && cost < (2*attraction.approxCost)) {
				attractionRatings.push(new AttractionRating(attraction.id, Rating.LESS_FEASIBLE));
			} else if(cost < (attraction.approxCost)) {
				attractionRatings.push(new AttractionRating(attraction.id, Rating.FAVOURABLE));
			} else if(cost > (2*attraction.approxCost) && cost < (3*attraction.approxCost)) {
				attractionRatings.push(new AttractionRating(attraction.id, Rating.LEAST_FEASIBLE));
			} else if(cost > (3*attraction.approxCost)){
				attractionRatings.push(new AttractionRating(attraction.id, Rating.REJECT));
			} else {
				attractionRatings.push(new AttractionRating(attraction.id, Rating.FAVOURABLE));
			}
			
		});
		return attractionRatings;
	};

	var similarityRatings = [];
	var getPlacesInOrder = function(fromplace, starttime, endtime, cost) {
		similarityRatings = [];
		var durationFeasibilityRatings = checkRatingOfPlaceBasedOnDuration(fromplace, (starttime || assumptions.starttime), (endtime || assumptions.endtime));
		var relevanceFeasibilityRatings = checkRatingOfPlaceBasedOnRelevance();
		var ratingFeasibilityRatings = checkRatingOfPlaceBasedOnRating();
		var costFeasibilityRatings = null;
		if(cost!=undefined && cost) {
			costFeasibilityRatings = checkRatingOfPlaceBasedOnCostFactors(cost);
		} else {
			costFeasibilityRatings = checkRatingOfPlaceBasedOnCostFactors(1000);
		}

		var attractions = TripService.getSelectedPlace().attractions;

		var SimilarityRating = function(id, rating) {
			this.id = id;
			this.rating = rating;
		};

		attractions.forEach(function(attraction, index) {
			var similarityRating = 0;
			similarityRating += durationFeasibilityRatings[index].rating * 6;
			similarityRating += relevanceFeasibilityRatings[index].rating * 5;
			similarityRating += ratingFeasibilityRatings[index].rating * 4;
			similarityRating += costFeasibilityRatings[index].rating * 4;
			similarityRatings.push(new SimilarityRating(attraction.id, similarityRating));
		});

		similarityRatings.sort(function(a, b) {
				return b.rating - a.rating;
		});

		console.log(similarityRatings);

		return similarityRatings;
	};


	var getPlan = function() {
		var events = [];
		var sortedSimilarityRatings = similarityRatings;
		console.log(sortedSimilarityRatings);
		var attractions = TripService.getSelectedPlace().attractions;

		var PlanEvent = function(id, name, boardTime, leaveTime, duration, shortDesc) {
			this.id = id;
			this.name = name;
			this.boardTime = boardTime;
			this.leaveTime = leaveTime;
			this.duration = duration;
			this.shortDesc = shortDesc;
		};

		sortedSimilarityRatings.forEach(function(selectedAttraction) {
			console.log(selectedAttraction);
			attractions.forEach(function(attraction) {
				if(selectedAttraction.id==attraction.id) {
					events.push(
						new PlanEvent(
							attraction.id,
							attraction.name,
							attraction.openTime,
							attraction.openTime + attraction.visitingtime,
							attraction.visitingtime,
							attraction.shortdesc
						)
					);
				}
			});
		});

		return { events : events };
	};

	return {
		getPlacesInOrder : getPlacesInOrder,
		getPlan : getPlan
	}
});