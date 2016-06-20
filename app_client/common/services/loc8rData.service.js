(function () {
angular
  .module('loc8rApp')
  .service('loc8rData', loc8rData);

   var searchString= 'lat,lng';

function loc8rData ($http) {
	//var locationByCoords = function (lat, lng) {
		//return $http.get('/api/locations?lng=' + lng + '&lat=' + lat +
		//	'&maxDistance=20');
}


 var foursquare = require('foursquarevenues')(foursquareConfig);
 
	var params = {
		"ll": "40.7,-74"
	};
 
	foursquare.getVenues(params, function(error, venues) {
		if (!error) {
			console.log(venues);
		}
	});
 
	foursquare.exploreVenues(params, function(error, venues) {
		if (!error) {
  			console.log(venues);
		}
	});
   
   return {
   	venues : venues
   };

	//return {
	//	locationByCoords : locationByCoords
	//};


})();
