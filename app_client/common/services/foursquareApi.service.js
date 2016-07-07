(function () {
angular
   .module('loc8rApp')
   .service('foursquareApi', foursquareApi);

function foursquareApi ($http) {
   var foursquare = angular.module('foursquarevenues');


   foursquare.getVenues(params, function(error, venues) {
    if (!error) {
      console.log(venues);
      return get(venues);
    }
  });
 
  foursquare.exploreVenues(params, function(error, venues) {
    if (!error) {
        console.log(venues);
  }
});
}
})();