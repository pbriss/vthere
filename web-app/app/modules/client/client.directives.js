
;(function() {
    'use strict';

    angular.module('client.directives', [])
    .directive('concertbox', concertbox);

    concertbox.$inject = ['$rootScope'];
    function concertbox($rootScope) {
        return {
            restrict: 'A',
            link: function(scope, el, attrs) {
                el.click(function(e) {
                    $rootScope.currentConcert = scope.concerts[parseInt(attrs.id)];
                    $rootScope.$apply();

                    Custombox.open({
                        target: '#concertbox-login',
                        effect: 'makeway'
                    });
                    e.preventDefault();

                });
            }
        }
    }
}());