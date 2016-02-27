/**
 * Theme: Ubold Admin Template
 * Author: Coderthemes
 * VectorMap
 */

! function($) {
	"use strict";

	var VectorMap = function() {
	};

	VectorMap.prototype.init = function() {
		//various examples
		$('#world-map-markers').vectorMap({
			map : 'world_mill_en',
			scaleColors : ['#ea6c9c', '#ea6c9c'],
			normalizeFunction : 'polynomial',
			hoverOpacity : 0.7,
			hoverColor : false,
			regionStyle : {
				initial : {
					fill : '#63758c'
				}
			},
			 markerStyle: {
                initial: {
                    r: 9,
                    'fill': '#ffbd4a',
                    'fill-opacity': 1.0,
                    'stroke': '#fff',
                    'stroke-width' : 4,
                    'stroke-opacity': 0.4
                },

                hover: {
                    'stroke': '#fff',
                    'fill-opacity': 1,
                    'stroke-width': 1
                }
            },
			backgroundColor : 'transparent',
			markers : [{
				latLng : [37.804259, -122.411362]
			}, {
				latLng : [41.341850, -103.946107]
			}, {
				latLng : [38.276666, -110.179609]
			}, {
				latLng : [39.940984, -89.175937]
			}, {
				latLng : [46.203781, -121.301057]
			}, {
				latLng : [30.696414, -98.776547]
			}, {
				latLng : [52.336769, -123.239641]
			}, {
				latLng : [-4.695444, -54.641801]
			}, {
				latLng : [-3.064797, -49.043089]
			}, {
				latLng : [-1.659778, -63.281370]
			}, {
				latLng : [-28.373014, -51.855589]
			}, {
				latLng : [48.755480, 5.097536]
			}, {
				latLng : [46.505215, 10.722536]
			}, {
				latLng : [39.984715, -3.691526]
			}, {
				latLng : [37.795914, 127.968630]
			}, {
				latLng : [38.211444, 93.339724]
			}, {
				latLng : [26.361379, 103.535036]
			}, {
				latLng : [26.045947, 111.620974]
			}, {
				latLng : [37.517588, 127.617067]
			}, {
				latLng : [57.262066, 38.026698]
			}, {
				latLng : [39.818707, 40.487571]
			}, {
				latLng : [2.532928, -73.519605]
			}, {
				latLng : [18.541355, 80.240581]
			}, {
				latLng : [29.639882, -82.101690]
			}]
		});
	},
	//init
	$.VectorMap = new VectorMap, $.VectorMap.Constructor =
	VectorMap
}(window.jQuery),

//initializing
function($) {
	"use strict";
}(window.jQuery);
