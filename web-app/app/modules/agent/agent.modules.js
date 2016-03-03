;(function() {
	'use strict';

	angular.module('agent', [
		'agent.ctrls',
		'agent.directives'
	])

	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
		.state('agent', {
			parent:'layoutagent',
			url: '/agent/home',
			controller: 'AgentController',
			templateUrl: 'modules/agent/agent.html'
		})
	}])
}());


