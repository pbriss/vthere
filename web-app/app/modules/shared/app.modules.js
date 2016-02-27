
;(function() {'use strict';

	angular.module('shared', [
		'app.ctrls',
		'app.filters',
		'app.services',
		'app.directives'
	])

	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
		.state('layout',{
			url: '',
			abstract: true,
			views: {
				'': {
					templateUrl: 'modules/shared/layout.html',
					controller: 'AppController'
				},
				'nav@layout': {
					templateUrl: 'modules/shared/nav.html',
					controller: 'NavController'
				},
				'header@layout': {
					templateUrl: 'modules/shared/header.html',
					controller: 'HeaderController'
				},
				'chat@layout': {
					templateUrl: 'modules/shared/chat.html'
				}
			}
		})
	}])
}());


