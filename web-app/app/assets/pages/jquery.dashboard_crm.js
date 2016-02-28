
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
            { y: '2009', a: 0, b: 0},
            { y: '2010', a: 12,  b: 6},
            { y: '2011', a: 25,  b: 20},
            { y: '2012', a: 40,  b: 30},
            { y: '2013', a: 100,  b: 90},
            { y: '2014', a: 250,  b: 220},
            { y: '2015', a: 600, b: 500}
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