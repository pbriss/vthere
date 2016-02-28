
/**
* Theme: Ubold Admin Template
* Author: Coderthemes
* Morris Chart
*/

!function($) {
    "use strict";

    var DashboardCRM = function() {
    	this.$realData = []
    };
    
     //creates line chart
    DashboardCRM.prototype.createLineChart = function(element, data, xkey, ykeys, labels, opacity, Pfillcolor, Pstockcolor, lineColors) {
        Morris.Line({
          element: element,
          data: data,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          fillOpacity: opacity,
          pointFillColors: Pfillcolor,
          pointStrokeColors: Pstockcolor,
          behaveLikeLine: true,
          gridLineColor: '#36404a',
          hideHover: 'auto',
          resize: true, //defaulted to true
          lineColors: lineColors
        });
    },
    
    DashboardCRM.prototype.init = function() {

        //create line chart
        var $data  = [
    		{ y: '2007', a: 20,  b: 10 },
        	{ y: '2008', a: 35,  b: 25 },
        	{ y: '2009', a: 40,  b: 30 },
            { y: '2010', a: 55,  b: 45 },
            { y: '2011', a: 60,  b: 50 },
            { y: '2012', a: 75,  b: 75 },
            { y: '2013', a: 80,  b: 100 },
            { y: '2014', a: 95,  b: 125 },
            { y: '2015', a: 100, b: 150 }
          ];
        this.createLineChart('morris-line-chart', $data, 'y', ['a', 'b'], ['Users - Registered ', 'Users - Watching'],['0.1'],['#ffffff'],['#999999'], ['#81c868', '#ffbd4a']);


    },
    //init
    $.DashboardCRM = new DashboardCRM, $.DashboardCRM.Constructor = DashboardCRM
}(window.jQuery),

//initializing 
function($) {
    "use strict";
}(window.jQuery);