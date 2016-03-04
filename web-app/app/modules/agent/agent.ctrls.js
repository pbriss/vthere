;(function() {
    'use strict';

    angular.module('agent.ctrls', [])

    .controller('AgentController', AgentController);

    AgentController.$inject = ['$scope', '$timeout'];
    function AgentController($scope, $timeout) {

        $scope.registered = Math.round(Math.random() * 5230 + 30);
        $scope.watching = Math.round(Math.random() * $scope.registered);
        $scope.revenue = Math.round(Math.random() * 75456 + 30);
        $scope.counters = [];

        $timeout(function() {
            $.VectorMap.init();
            $.DashboardCRM.init();

            Morris.Donut({
                element: 'morris-donut-chart',
                data: [
                    {label: "First Time", value: 45},
                    {label: "2nd Time", value: 24},
                    {label: "3rd Time", value: 16},
                    {label: "4th Time", value: 10},
                    {label: "5th+ Time", value: 5}
                ]
            });
        });

    }

}());