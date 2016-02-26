;(function() {
	'use strict';

	var app = angular.module('app', [
		/* Angular modules */
		'ui.router',

		/* 3rd Party Modules */
		'angular-loading-bar',

		/* Custom Modules */
		'shared',
		'login',
		'home'
	])

	// disable spinner in loading-bar
	.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
	    cfpLoadingBarProvider.latencyThreshold = 0;
	}])

	// route provider
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
	}])

	.run(['$rootScope', function ($rootScope) {
		$rootScope.$on('$stateChangeError', function () {
		});

		$rootScope.$on('$stateChangeStart', function (event, toState) {
		});

		$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
		});
	}]);

}());


