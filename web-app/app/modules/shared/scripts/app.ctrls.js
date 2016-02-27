;(function() {
	'use strict';

	angular.module('app.ctrls', [])

	.controller('AppController', AppController)
	.controller('NavController', NavController)
	.controller('HeaderController', HeaderController);

	AppController.$inject = ['$scope', '$location', '$timeout'];
	function AppController($scope, $location, $timeout) {
		$timeout(function() {
			$.Components.init();
			$.App.init();
		});

		$scope.getClass = function (path) {
			if ($location.path().substr(0, path.length) === path) {
				return 'active';
			} else {
				return '';
			}
		}
	}

	NavController.$inject = ['$scope'];
	function NavController($scope) {
	}

	HeaderController.$inject = ['$scope'];
	function HeaderController($scope) {
	}
}());

