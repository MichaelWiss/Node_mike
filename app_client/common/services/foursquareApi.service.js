(function () {
angular
   .module('loc8rApp')
   .service('foursquareApi', foursquareApi);

var foursquareConfig = {
	'secrets' : {
		'clientId' : 'APP_CLIENT_ID',
		'clientSecret' : 'APP_CLIENT_SECRET',
		'redirectUrl' : 'REDIRECT_URL'
	}
};
function foursquareApi (geolocation) {
 var foursquare = require('node-foursquare-venues')(foursquareConfig);

 

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




}
   })();