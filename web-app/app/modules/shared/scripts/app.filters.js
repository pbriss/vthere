;(function() {
	'use strict';

	angular.module('app.filters', [])

	.filter('capitalize', capitalize);

	//
	// Ternary operator filter
	//
	function capitalize() {
		return function(input, all) {
			var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
			return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
		}
	}
}());