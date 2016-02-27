;(function() {
	'use strict';

	angular.module('app.services', [])

	.service('AppFactory', AppFactory);

	//
	// App factory
	//
	AppFactory.$inject = ['$rootScope', '$http'];
	function AppFactory($rs, $http) {

	}

}());