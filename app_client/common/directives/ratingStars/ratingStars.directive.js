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


angular.module('loc8rApp'),
 function ($scope) {
  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'fi-star', stateOff: 'fa-check-circle-o'},
    {stateOn: 'fa-star', stateOff: 'fa-start-o'},
    {stateOn: 'fi-star', stateOff: 'fa-ban'},
    {stateOn: 'fi-star'},
    {stateOff: 'fi-star'}
  ];
});


})();