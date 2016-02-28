;(function() {
    'use strict';

    angular.module('client.ctrls', [])

    .controller('ClientController', ClientController);

    ClientController.$inject = ['$rootScope', '$scope', '$timeout'];
    function ClientController($rootScope, $scope, $timeout) {

        $rootScope.currentConcert = {};

        $scope.concerts = [
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
                isLive: true,
            },
            {
                id: 2,
                type: 'Pop',
                venue: 'intimate',
                name: 'Bob Douwe',
                location: 'Stockholm, Sweden',
                isLive: false,
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
                isLive: false,
            },
            {
                id: 6,
                type: 'Rock',
                venue: 'outdoor',
                name: 'Papa Roach',
                location: 'Los Angeles, USA',
                isLive: false,
            },
            {
                id: 7,
                type: 'Rock',
                venue: 'intimate',
                name: 'Dean Portier',
                location: 'New York, USA',
                isLive: true,
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
                isLive: false,
            },
        ];

		//
        //$timeout(function() {
        //    var $container = $('.portfolioContainer');
        //    $container.isotope({
        //        filter: '*',
        //        animationOptions: {
        //            duration: 750,
        //            easing: 'linear',
        //            queue: false
        //        }
        //    });
		//
        //    $('.portfolioFilter a').click(function(){
        //        $('.portfolioFilter .current').removeClass('current');
        //        $(this).addClass('current');
		//
        //        var selector = $(this).attr('data-filter');
        //        $container.isotope({
        //            filter: selector,
        //            animationOptions: {
        //                duration: 750,
        //                easing: 'linear',
        //                queue: false
        //            }
        //        });
        //        return false;
        //    });
        //}, 500);

    }

}());