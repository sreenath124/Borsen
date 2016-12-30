$(document).ready(function() {

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
        regionsSelectableOne: false,
        showTooltip: true,
        zoomButtons: false,
        zoomOnScroll: false,
        onRegionClick: function(event, code, region) {
            var map = $('#world_map').vectorMap('get', 'mapObject');
            console.log(map.getRegionName(code));
            switch (code) {
                case 'AS':
                    $('#AS').toggleClass('accr_visible');
                    break;
                case 'NA':
                    $('#NA').toggleClass('accr_visible');
                    break;
                case 'SA':
                    $('#SA').toggleClass('accr_visible');
                    break;
                case 'AF':
                    $('#AF').toggleClass('accr_visible');
                    break;
                case 'EU':
                    $('#EU').toggleClass('accr_visible');
                    break;
                case 'OC':
                    $('#OC').toggleClass('accr_visible');
                    break;

            }

        }
    });

    $('.accordian_sec button').click(function(e) {
    	e.preventDefault();
       			    var map = $('#world_map').vectorMap('get', 'mapObject');
                 var id = this.id;
                 if(id == 'asia') {
                 	map.setSelectedRegions('AS');
                 }
                 else if(id == 'africa') {
                 	map.setSelectedRegions('AF');
                 }
                 else if(id == 'europe') {
                 	map.setSelectedRegions('EU');
                 }
                 else if(id == 'north_america') {
                 	map.setSelectedRegions('NA');
                 }
                 else if(id == 'south_america') {
                 	map.setSelectedRegions('SA');
                 }
                 else if(id == 'oceania') {
                 	map.setSelectedRegions('OC');
                 }
                  
        $(this).next('.accr_hidden').toggleClass('accr_visible');

    });
    
    setInterval(function() {
    	var name,
    		business_name,
    		email,
    		industry,
    		sales,
    		audience,
    		export_to,
    		business_type=[],
    		industry_type = [],
    		sales_type = [],
    		solution_type = [];

    	 name = $('#personal_details input[name="name"]').val();
   		 business_name = $('#personal_details input[name="business_name"]').val();
   		 email = $('#personal_details input[name="email"]').val();
		
		$('.solutions input:checked').each(function() {
    		solution_type.push($(this).attr('name'));
    	});

    	$('.industry input:checked').each(function() {
    		industry_type.push($(this).attr('name'));
    	});

    	$('.sales input:checked').each(function() {
    		sales_type.push($(this).attr('name'));
    	});




    	$('.audience input:checked').each(function() {
    		business_type.push($(this).attr('name'));
    	});
    	

    	$('.flyout #name').text(name);
    	$('.flyout #business_name').text(business_name);
    	$('.flyout #email').text(email);
    	$('.flyout #audience').text(business_type.join(','));
    	$('.flyout #sales').text(sales_type.join(','));
    	$('.flyout #solutions').text(solution_type.join(','));

    }, 2000);

    $('.flyout_btn').on('click', function() {
    	$('.flyout').toggleClass('expand_flyout');
    });
    $('#menu_btn').on('click', function() {
    	$('.nav_bar').toggleClass('expand_navbar');
    });
    $('.accordian_sec input').on('click', function() {
    	$(this).prev('img.flag').toggleClass('filter_remove');
    });
});
