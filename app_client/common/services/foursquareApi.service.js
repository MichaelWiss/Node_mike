(function () {
angular
   .module('loc8rApp')
   .service('foursquareApi', foursquareApi);

function foursquareApi ($http) {
   var foursquareApi = angular.module('foursquarevenues', []);
   var foursquare = (require('foursquarevenues'))('env.clientId', 'env.clientSecret');
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