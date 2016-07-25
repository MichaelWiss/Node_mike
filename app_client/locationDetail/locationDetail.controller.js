(function () {
	
	angular
	  .module('loc8rApp')
	  .controller('locationDetailCtrl', locationDetailCtrl);
    locationDetailCtrl.$inject = ['$routeParams'];
	function locationDetailCtrl ($routeparams) {
	  var vm = this;
        vm.locationid = $routeParams.locationid;
	  vm.pageHeader = {
	     title: vm.locationid
	  };
	}
}) ();