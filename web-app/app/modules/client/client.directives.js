
;(function() {
    'use strict';

    angular.module('client.directives', [])
    .directive('concertbox', concertbox);

    function concertbox() {
        return {
            restrict: 'A',
            link: function(scope, el) {
                el.click(function(e) {

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