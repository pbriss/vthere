;(function() {
	'use strict';

	angular.module('client', [
		'client.ctrls'
	])

	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
		.state('client', {
			parent:'layout',
			url: '/client',
			controller: 'ClientController',
			templateUrl: 'modules/client/client.html'
		})
	}])
}());

