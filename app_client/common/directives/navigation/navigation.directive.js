(function () {
	
	angular
	  .module('loc8rApp')
	  .directive('navigation', navigation);

	function navigation () {
	  return {
	     restrict: 'EA',
	     templatUrl: '/common/directives/navigation/navigation.template.html',
	  };
	}

}) ();