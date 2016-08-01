(function () {


angular
   .module('loc8rApp')
   .directive('ratingStars', ratingStars);

function ratingStars () {
	return {
		restrict: 'EA',
		scope: {
			thisRating : '=rating'
		},
		templateUrl: '/common/directives/ratingStars/ratingStars.template.html',
    };
 }

})();

angular.module('foundationDemoApp').controller('RatingDemoCtrl', function ($scope) {
  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'fa-check-circle', stateOff: 'fa-check-circle-o'},
    {stateOn: 'fa-star', stateOff: 'fa-start-o'},
    {stateOn: 'fa-heart', stateOff: 'fa-ban'},
    {stateOn: 'fa-heart'},
    {stateOff: 'fa-power-off'}
  ];


})();


