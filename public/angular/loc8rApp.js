angular.module('loc8rApp', [require('angular-route')]);

var locationListCtrl = function ($scope) {
	$scope.data = {
	  locations: [{
	  	name : 'Burger Queen',
	  	address : '125 High Street, Reading, RG6 1PS',
	  	rating : 3,
	  	facilities : ['Hot drinks', 'Food', 'Premium wifi', ],
	  	distance : '0.296456',
	  	_id: '5370a35f2536f6785f8dfb6a'
	  }, {
	  	name: 'Costy',
	  	address : '125 High Street, Reading, RP6 1Ps',
	  	rating: 5,
	  	facilities: ['Hot drinks', 'Food', 'Alcoholic drinks'],
	  	distance: '0.7865456',
	  	_id: '5370a35f2536f6785f8dfb6a'
	  }]};
};

angular
  .module('loc8rApp', ['angular-route'])
  .controller('locationListCtrl', locationListCtrl);
