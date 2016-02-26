;(function() {
	'use strict';

	angular.module('app.filters', [])

	.filter('iif', iif);

	//
	// Ternary operator filter
	//
	function iif() {
		return function(input, trueValue, falseValue) {
			return input ? trueValue : falseValue;
		};
	}
}());