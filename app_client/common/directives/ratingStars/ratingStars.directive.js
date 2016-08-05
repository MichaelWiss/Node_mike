angular.module('loc8rApp').controller('ratingCtrl', function ($scope) {

 

  $scope.ratingStates = [
    {stateOn: 'fi-star', stateOff: 'fi-star'},
    {stateOn: 'fi-star', stateOff: 'fi-star'},
    {stateOn: 'fi-star', stateOff: 'fi-star'},
    {stateOn: 'fi-star'},
    {stateOff: 'fi-star'}
  ];
});

.directive('ratingStars', function() {
  return {
	templateUrl: '/common/directives/ratingStars/ratingStars.template.html'
  };
});






