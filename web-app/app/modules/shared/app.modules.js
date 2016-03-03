
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
				'header@layout': {
					templateUrl: 'modules/shared/header.html',
					controller: 'HeaderController'
				},
				'chat@layout': {
					templateUrl: 'modules/shared/chat.html'
				}
			}
		})
		.state('layoutagent',{
			url: '',
			abstract: true,
			views: {
				'': {
					templateUrl: 'modules/shared/layout-agent.html',
					controller: 'AppController'
				},
				'nav@layoutagent': {
					templateUrl: 'modules/shared/nav.html',
					controller: 'NavController'
				},
				'header@layoutagent': {
					templateUrl: 'modules/shared/header.html',
					controller: 'HeaderController'
				},
				'chat@layoutagent': {
					templateUrl: 'modules/shared/chat.html'
				}
			}
		})
	}])
}());


