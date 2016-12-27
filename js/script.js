$(document).ready(function() {
    $('.accordian_sec button').click(function(e) {
        e.preventDefault();
        $(this).next('.accr_hidden').toggleClass('accr_visible');
    });


    $('#world_map').vectorMap({
        map: 'continents_mill',
        backgroundColor: '',
        borderColor: '#818181',
        borderOpacity: 0.25,
        borderWidth: 1,
        regionStyle: {
            initial: {
                fill: '#128da7'
            },
            hover: {
                fill: "#A0D1DC"
            },
            selected: {
            	fill: "#010101"
            }
        },
        enableZoom: false,
        hoverColor: '#c9dfaf',
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#000000',
        selectedRegions: null,
        regionsSelectable: true,
    	regionsSelectableOne: true,
        showTooltip: true,
        zoomButtons: false,
        zoomOnScroll: false,
        onRegionClick: function(event, code, region) {
        	var map = $('#world_map').vectorMap('get', 'mapObject');
        	console.log(map.getRegionName(code));
            switch(code) {
            	case 'AS': 
            		$('#AS').toggleClass('accr_visible');
            		break;
            	case 'NA': 
            		$('#NA').toggleClass('accr_visible');
            		break;
            	case 'SA':
            		$('#SA').toggleClass('accr_visible');
            		break;
            	case 'AF' :
            		$('#AF').toggleClass('accr_visible');
            		break;
            	case 'EU':
            		$('#EU').toggleClass('accr_visible');
            		break;
            	case 'OC' :
            		$('#OC').toggleClass('accr_visible');
            		break;

            }

        }
    });


});
