angular
  .module('loc8rApp')
  .controller('homeCtrl', homeCtrl);

function homeCtrl (loc8rData, geolocation) {
	var vm = this;
	vm.pagHeader = {
		title: 'Loc8r',
		strapline: 'Find places to work with wifi near you!'
	};
	vm.sidebar = {
		content: "Looking for wifi and a seat etc etc"
	};
	vm.message = "Checking your location";
	vm.getData = function (position) {
		var lat = position.coords.latitude,
		    lng = position.coords.longitude;
		vm.message = "Searching for nearby places";
		loc8rData.locationByCoords(lat, lng)
		   .success(function(data) {
		   	vm.message = data.length > 0 ? "" : "No locations found nearby";
		   	vm.data = { locations: data };
		   })
		   .error(function (e) {
		   	vm.message = "Sorry, something's gone wrong";
		   });
		};

		vm.noGeo = function () {
			vm.$apply(function() {
				vm.message = "Geolocation is not supported by this browser.";
			});
		};
		geolocation.getPositon(vm.getData, vm.showError, vm.noGeo);
}