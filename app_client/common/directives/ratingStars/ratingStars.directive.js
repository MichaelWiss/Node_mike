(function () {


angular
   .module('loc8rApp')
   .directive('ratingStars', ratingStars);

function ratingStars () {
	return {
		restrict: 'E',
		scope: {
			thisRating : '=rating'
		},
		templateUrl: '/common/directives/ratingStars/ratingStars.template.html'
	    };
    }
})();