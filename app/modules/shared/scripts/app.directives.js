
;(function() {
	'use strict';

	angular.module('app.directives', [])
	.directive('tooltip', tooltip);

	//
	// Tooltip directive
	//
	function tooltip() {
		return {
			restrict: 'A',
			replace: true,
			link: function(scope, el) {
			}
		}
	}
}());