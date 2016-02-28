;(function() {
	'use strict';

	angular.module('vrplay', [
		'vrplay.ctrls'
	])

	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
		.state('vrplay', {
			parent:'layout',
			url: '/vrplay/:id',
			controller: 'VrplayController',
			templateUrl: 'modules/vrplay/vrplay.html'
		})
    .state('fallback', {
			url: '/fallback',
			templateUrl: 'modules/fallback/index.html'
		})
	}])
}());
