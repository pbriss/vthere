
;(function() {
    'use strict';

    angular.module('agent.directives', [])
    .directive('cardBox', cardBox)
    .directive('countUp', countUp);

    cardBox.$inject = ['$timeout'];
    function cardBox($timeout) {
        return {
            restrict: 'A',
            link: function(scope, el) {
                $timeout(function() {
                    el.click(function() {
                        scope.counters[0].update(scope.counters[0].endVal + 2);
                        scope.counters[1].update(scope.counters[1].endVal + 6);
                        scope.counters[2].update(scope.counters[2].endVal + 50);

                        $('#dollar').addClass('animated rubberBand');

                        $timeout(function() {
                            $('#dollar').removeClass('animated rubberBand');
                        }, 1000);
                    });
                });
            }
        }
    }

    function countUp() {
        return {
            restrict: 'A',
            link: function(scope, el, attrs) {

                var counter = new CountUp($(el).attr('id'), 0, parseInt(attrs.value));
                counter.start();
                scope.counters.push(counter);
            }
        }
    }
}());