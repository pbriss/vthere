;(function() {
	'use strict';

	angular.module('home', [
		'home.ctrls'
	])

	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
		.state('home', {
			parent:'layout',
			url: '/home',
			controller: 'HomeController',
			templateUrl: 'modules/home/home.html'
		})
	}])
}());


