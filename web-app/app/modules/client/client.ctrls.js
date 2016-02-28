;(function() {
    'use strict';

    angular.module('client.ctrls', [])

    .controller('ClientController', ClientController);

    ClientController.$inject = ['$scope', '$timeout'];
    function ClientController($scope, $timeout) {

        $scope.concerts = [
            { id: 1, type: 'intimate'},
            { id: 2, type: 'indoor'},
            { id: 3, type: 'outdoor'},
            { id: 4, type: 'club'},
            { id: 5, type: 'intimate'},
            { id: 6, type: 'indoor'},
            { id: 7, type: 'intimate'},
            { id: 8, type: 'intimate'},
            { id: 9, type: 'club'},
            { id: 10, type: 'intimate'},
            { id: 11, type: 'outdoor'},
            { id: 12, type: 'outdoor'}
        ];

        $timeout(function() {
            var $container = $('.portfolioContainer');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            $('.portfolioFilter a').click(function(){
                $('.portfolioFilter .current').removeClass('current');
                $(this).addClass('current');

                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        }, 500);

    }

}());