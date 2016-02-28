;(function() {
    'use strict';

    angular.module('client.ctrls', [])

    .controller('ClientController', ClientController);

    ClientController.$inject = ['$scope', '$timeout'];
    function ClientController($scope, $timeout) {


        $scope.closeCustomBox = function () {
            $timeout(function () {
                Custombox.close();
            }, 1000);
        };

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