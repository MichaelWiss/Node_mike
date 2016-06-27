angular.module('loc8rApp', ['ngRoute']);

function config ($routeProvider) {
	$routeProvider
	   .when('/', {
         templateUrl: 'places/placesResults.html',
         controller: 'placesExplorerController.js',
         controllerAs: 'vm'
	   })
	   .otherwise({redirectTo: '/'});
}


angular
   .module('loc8rApp')
   .config(['$routeProvider', config]);