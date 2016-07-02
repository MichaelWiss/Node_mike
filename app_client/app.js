(function () {
angular.module('loc8rApp', ['ngRoute']);

function config ($routeProvider) {
	$routeProvider
	   .when('/', {
	   	 templateUrl: 'home/home.view.html',
	   	 controller: 'homeCtrl',
	   	 controllerAs: 'vm'
	   })
	   .otherwise({redirectTo: '/'});
}





angular
   .module('loc8rApp')
   .config(['$routeProvider', config]);
})();

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
