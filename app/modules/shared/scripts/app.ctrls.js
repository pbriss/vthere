;(function() {
	'use strict';

	angular.module('app.ctrls', [])

	.controller('AppController', AppController)
	.controller('NavController', NavController)
	.controller('HeaderController', HeaderController);

	AppController.$inject = ['$timeout'];
	function AppController($timeout) {
		$timeout(function() {
			$.Components.init();
			$.App.init();
		});
	}

	NavController.$inject = ['$scope'];
	function NavController($scope) {
	}

	HeaderController.$inject = ['$scope'];
	function HeaderController($scope) {
	}
}());

