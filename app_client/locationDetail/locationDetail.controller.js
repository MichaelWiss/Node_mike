(function () {
	
	angular
	  .module('loc8rApp')
	  .controller('locationDetailCtrl', locationDetailCtrl);
    locationDetailCtrl.$inject = ['$routeParams', 'loc8rData'];
	function locationDetailCtrl ($routeparams, loc8rData) {
	  var vm = this;
      vm.locationid = $routeParams.locationid;

      loc8rData.locationById(vm.locationid)
        .success(function(data) {
        	vm.data = { location: data };
            vm.pageHeader = {
            	title: vm.data.location.name
            };
        })
        .error(function (err) {
        	concole.log(err);
        });


	  vm.pageHeader = {
	     title: vm.locationid
	  };
	}
}) ();