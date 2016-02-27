;(function() {
    'use strict';

    angular.module('agent.ctrls', [])

    .controller('AgentController', AgentController);

    AgentController.$inject = ['$scope', '$timeout'];
    function AgentController($scope, $timeout) {

        $scope.registered = 1523;
        $scope.watching = 628;
        $scope.revenue = 67899;
        $scope.counters = [];

        $timeout(function() {
            $.VectorMap.init();
            $.DashboardCRM.init();
        });

    }

}());