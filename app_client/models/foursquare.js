var foursquarevenues = require('foursquarevenues');


	var foursquare = (require('foursquarevenues'))('CLIENTIDKEY', 'CLIENTSECRETKEY');
 
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



module.exports = foursquare.model();