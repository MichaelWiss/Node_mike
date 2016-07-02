(function () {
angular
   .module('loc8rApp')
   .service('foursquareApi', foursquareApi);

function foursquareApi ($http) {
   var foursquare = function(foursquare) {
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
};
}
})();