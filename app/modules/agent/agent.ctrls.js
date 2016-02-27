;(function() {
    'use strict';

    angular.module('agent.ctrls', [])

    .controller('AgentController', AgentController);

    AgentController.$inject = ['$timeout'];
    function AgentController($timeout) {
        $timeout(function() {
            $.VectorMap.init();
            $.DashboardCRM.init();

            var registered = new CountUp("registered", 0, 1523);
            registered.start();
            var watching = new CountUp("watching", 0, 628);
            watching.start();
            var revenue = new CountUp("revenue", 0, 67899);
            revenue.start();
        });

    }

}());