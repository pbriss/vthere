;(function() {
	'use strict';

	angular.module('vrplay', [
		'vrplay.ctrls'
	])

	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
		.state('vrplay', {
			url: '/vrplay/:id',
			controller: 'VrplayController',
			templateUrl: 'modules/vrplay/vrplay.html'
		})
	}])
}());

