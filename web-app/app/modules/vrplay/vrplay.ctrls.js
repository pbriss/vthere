;(function() {
    'use strict';

    angular.module('vrplay.ctrls', [])

    .controller('VrplayController', VrplayController);

    VrplayController.$inject = ['$stateParams', '$scope', '$rootScope'];
    function VrplayController($stateParams, $scope, $rootScope) {

        $scope.videos = {
            1: "modules/vrplay/videos/ArturSychowski_classical_intimate.mp4",
            2: "modules/vrplay/videos/DouweBob_pop_intimate.mp4",
            3: "modules/vrplay/videos/ElisirDAmore_classical_indoor.mp4",
            4: "modules/vrplay/videos/Jannabi_kpop_club.mp4",
            5: "modules/vrplay/videos/Laysha_kpop_intimate.mp4",
            6: "modules/vrplay/videos/PapaRoach_rock_outdoor.mp4",
            7: "modules/vrplay/videos/PortierDean_rock_intimate.mp4",
            8: "modules/vrplay/videos/VictorMilesen_rock_club.mp4",
            9: "modules/vrplay/videos/Volbeat_rock_outdoor.mp4"
        };

        $scope.video = $scope.videos[$stateParams.id];

        $scope.currentConcert = $rootScope.concerts[$stateParams.id];

        runEleVRPlayer();

        $scope.numWatching = Math.floor(Math.random() * 1000) + 100;

        $scope.friends = [
            {id: 2, name: 'Rick Samuel', isOnline: true},
            {id: 3, name: 'Jessica Lauren', isOnline: false},
            {id: 5, name: 'Benjamin San Souci', isOnline: false},
            {id: 6, name: 'Marc Tangier', isOnline: true},
        ];
    }

}());