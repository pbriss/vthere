;(function() {
	'use strict';

	angular.module('clientlogin', [
		'clientlogin.ctrls'
	])

	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
		.state('clientlogin', {
			url: '/',
			controller: 'ClientloginController',
			templateUrl: 'modules/clientlogin/clientlogin.html'
		})
	}])
}());


