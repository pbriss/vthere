;(function() {
	'use strict';

	angular.module('login', [
		'login.ctrls'
	])

	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
		.state('login', {
			url: '/',
			controller: 'LoginController',
			templateUrl: 'modules/login/login.html'
		})
	}])
}());


