;(function() {
	'use strict';

	angular.module('app.ctrls', [])

	.controller('AppController', AppController)
	.controller('NavController', NavController)
	.controller('HeaderController', HeaderController);

	AppController.$inject = ['$rootScope', '$scope', '$location', '$timeout'];
	function AppController($rootScope, $scope, $location, $timeout) {
		$timeout(function() {
			$.Components.init();
			$.App.init();
		});

		$scope.getClass = function (path) {
			if ($location.path().substr(0, path.length) === path) {
				return 'active';
			} else {
				return '';
			}
		};

		$rootScope.currentConcert = {};

		$rootScope.concerts = [
			{
				id: 0,
				type: 'Event',
				venue: 'indoor',
				name: 'Launch',
				location: 'San Francisco, USA',
				isLive: true,
			},
			{
				id: 1,
				type: 'Classical',
				venue: 'intimate',
				name: 'Artur Sychowski',
				location: 'London, UK',
				isLive: false,
			},
			{
				id: 2,
				type: 'Pop',
				venue: 'intimate',
				name: 'Bob Douwe',
				location: 'Stockholm, Sweden',
				isLive: true,
			},
			{
				id: 3,
				type: 'Classical',
				venue: 'indoor',
				name: 'Elisir D\'Amore',
				location: 'San Francisco, USA',
				isLive: true,
			},
			{
				id: 4,
				type: 'Pop',
				venue: 'club',
				name: 'Jannabi',
				location: 'Seoul, South Korea',
				isLive: true,
			},
			{
				id: 5,
				type: 'Pop',
				venue: 'intimate',
				name: 'Laysha',
				location: 'Seoul, South Korea',
				isLive: true,
			},
			{
				id: 6,
				type: 'Rock',
				venue: 'outdoor',
				name: 'Papa Roach',
				location: 'Los Angeles, USA',
				isLive: true,
			},
			{
				id: 7,
				type: 'Rock',
				venue: 'intimate',
				name: 'Dean Portier',
				location: 'New York, USA',
				isLive: false,
			},
			{
				id: 8,
				type: 'Rock',
				venue: 'club',
				name: 'Victor Milesen',
				location: 'San Francisco, USA',
				isLive: true,
			},
			{
				id: 9,
				type: 'Rock',
				venue: 'outdoor',
				name: 'Volbeat',
				location: 'London, UK',
				isLive: true,
			},
		];
	}

	NavController.$inject = ['$scope'];
	function NavController($scope) {
	}

	HeaderController.$inject = ['$scope'];
	function HeaderController($scope) {
	}
}());

