(function () {


// angular
//    .module('loc8rApp')
//    .directive('ratingStars', ratingStars);

// function ratingStars () {
// 	return {
// 		restrict: 'EA',
// 		scope: {
// 			thisRating : '=rating'
// 		},
// 		templateUrl: '/common/directives/ratingStars/ratingStars.template.html',
//     };
//  }

// })();


angular
      .module('loc8rApp')
      .directive('ratingStars', function ($scope) {


  $scope.ratingStates = [
    {stateOn: 'fa-check-circle', stateOff: 'fa-check-circle-o'},
    {stateOn: 'fa-star', stateOff: 'fa-start-o'},
    {stateOn: 'fa-heart', stateOff: 'fa-ban'},
    {stateOn: 'fa-heart'},
    {stateOff: 'fa-power-off'}
  ];
});

})();


