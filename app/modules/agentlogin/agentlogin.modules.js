;(function() {
	'use strict';

	angular.module('agentlogin', [
		'agentlogin.ctrls'
	])

	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
		.state('agentlogin', {
			url: '/agent',
			controller: 'AgentloginController',
			templateUrl: 'modules/agentlogin/agentlogin.html'
		})
	}])
}());


