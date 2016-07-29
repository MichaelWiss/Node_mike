(function () {


angular
   .module('loc8rApp')
   .directive('ratingStars', ratingStars);

function ratingStars () {
	return {
		restrict: '',
		scope: {
			thisRating : '=rating'
		},
		templateUrl: '/common/directives/ratingStars/ratingStars.template.html'
	    };
    }
    $($document).foundation();
})();