;(function() {
    'use strict';

    angular.module('vrplay.ctrls', [])

    .controller('VrplayController', VrplayController);

    VrplayController.$inject = ['$stateParams', '$scope', '$timeout'];
    function VrplayController($stateParams, $scope, $timeout) {

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
        }

        $scope.video = $scope.videos[$stateParams.id];

        runEleVRPlayer();
    }

}());