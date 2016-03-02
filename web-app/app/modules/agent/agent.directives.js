
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
                    scope.counters[0].update(scope.counters[0].endVal + 2);
                    scope.counters[1].update(scope.counters[1].endVal + 6);
                    scope.counters[2].update(scope.counters[2].endVal + 50);

                    $('#dollar').addClass('animated rubberBand');

                    $timeout(function() {
                        $('#dollar').removeClass('animated rubberBand');
                    }, 1000);
                }, 10000);

                $timeout(function() {
                    scope.counters[0].update(scope.counters[0].endVal + 2);
                    scope.counters[1].update(scope.counters[1].endVal + 6);
                    scope.counters[2].update(scope.counters[2].endVal + 50);

                    $('#dollar').addClass('animated rubberBand');

                    $timeout(function() {
                        $('#dollar').removeClass('animated rubberBand');
                    }, 1000);
                }, 25000);


                $timeout(function() {
                    scope.counters[0].update(scope.counters[0].endVal + 2);
                    scope.counters[1].update(scope.counters[1].endVal + 6);
                    scope.counters[2].update(scope.counters[2].endVal + 50);

                    $('#dollar').addClass('animated rubberBand');

                    $timeout(function() {
                        $('#dollar').removeClass('animated rubberBand');
                    }, 1000);
                }, 50000);



                $timeout(function() {
                    scope.counters[0].update(scope.counters[0].endVal + 2);
                    scope.counters[1].update(scope.counters[1].endVal + 6);
                    scope.counters[2].update(scope.counters[2].endVal + 50);

                    $('#dollar').addClass('animated rubberBand');

                    $timeout(function() {
                        $('#dollar').removeClass('animated rubberBand');
                    }, 1000);
                }, 75000);




                $timeout(function() {
                    scope.counters[0].update(scope.counters[0].endVal + 2);
                    scope.counters[1].update(scope.counters[1].endVal + 6);
                    scope.counters[2].update(scope.counters[2].endVal + 50);

                    $('#dollar').addClass('animated rubberBand');

                    $timeout(function() {
                        $('#dollar').removeClass('animated rubberBand');
                    }, 1000);
                }, 100000);




                $timeout(function() {
                    scope.counters[0].update(scope.counters[0].endVal + 2);
                    scope.counters[1].update(scope.counters[1].endVal + 6);
                    scope.counters[2].update(scope.counters[2].endVal + 50);

                    $('#dollar').addClass('animated rubberBand');

                    $timeout(function() {
                        $('#dollar').removeClass('animated rubberBand');
                    }, 1000);
                }, 30000);

                //
                //el.click(function() {
                //
                //    //$.Notification.notify('custom', 'right middle', '@alexb', 'This is sooo awesome!');
                //    //var $notify = $('.notifyjs-corner');
                //    //$notify.insertAfter('#wrapper');
                ////
                //    //$notify.css({position: 'absolute', left: $($('circle')[0]).offset().left, top: $($('circle')[0]).offset().top - 30});
                //    //$notify.find('.notifyjs-wrapper').css({display: 'inline-block', width: '100px'});
                ////
                //    //$timeout(function() {
                //    //    $notify.addClass('animated zoomOutLeft');
                //    //    $timeout(function() {
                //    //        $notify.removeClass('animated zoomOutLeft');
                //    //    }, 2000);
                //    //}, 2000);
                //});
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