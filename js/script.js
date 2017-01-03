$(document).ready(function() {

    $('#world_map').vectorMap({
        map: 'continents_mill',
        backgroundColor: '',
        borderColor: '#818181',
        borderOpacity: 0.25,
        borderWidth: 1,
        regionStyle: {
            initial: {
                fill: '#B0B1B5'
            },
            hover: {
                fill: "#A0D1DC"
            },
            selected: {
                fill: "#2A3F52"
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

        if (id == 'asia') {
            map.setSelectedRegions('AS');
        } else if (id == 'africa') {
            map.setSelectedRegions('AF');
        } else if (id == 'europe') {
            map.setSelectedRegions('EU');
        } else if (id == 'north_america') {
            map.setSelectedRegions('NA');
        } else if (id == 'south_america') {
            map.setSelectedRegions('SA');
        } else if (id == 'oceania') {
            map.setSelectedRegions('OC');
        }
        $(this).toggleClass('accr_button_active');
        $(this).find('input[type="checkbox"]').attr('checked', true);
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
            source = [],
            business_type = [],
            industry_type = [],
            sales_type = [],
            solution_type = [];

        name = $('#personal_details input[name="name"]').val();
        business_name = $('#personal_details input[name="business_name"]').val();
        email = $('#personal_details input[name="email"]').val();

        $('.source input:checked').each(function() {
            source.push($(this).attr('name'));
        });

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
        $('.flyout #itsb').text(source.join(','));
        $('.flyout #industry').text(industry_type.join(','));
        $('.flyout #audience').text(business_type.join(','));
        $('.flyout #sales').text(sales_type.join(','));
        $('.flyout #solutions').text(solution_type.join(','));

    }, 2000);

    $('.flyout_btn').on('click', function() {
        $('.flyout_menu').toggleClass('expand_flyout');
    });
    $('#menu_btn').on('click', function() {
        $('.nav_bar').toggleClass('expand_navbar');
    });
    $('.accordian_sec input').on('click', function() {
        $(this).prev('img.flag').toggleClass('filter_add');
    });
   
    var map = $('#world_map').vectorMap('get', 'mapObject');
    var flag_as=false,
        flag_eu=false,
        flag_na=false,
        flag_sa=false,
        flag_af=false,
        flag_oc=false;
    $('#asia_chbox').on('click', function() {
        if (!!flag_as) {
            flag_as = (!flag_as);
            map.clearSelectedRegions('AS');
         $('#AS').removeClass('accr_visible');
            console.log(flag_as);
        } else {
            map.setSelectedRegions('AS');
               $("#AS").addClass('accr_visible');
            flag_as = (!flag_as);
            console.log(flag_as);
        }

    });
    $('#europe_chbox').on('click', function() {
        if (!!flag_eu) {
            flag_eu = (!flag_eu);
            map.clearSelectedRegions('EU');
            $("#EU").removeClass('accr_visible');
            console.log(flag_eu);
        } else {
            map.setSelectedRegions('EU');
            $('#EU').addClass('accr_visible');
            flag_eu = (!flag_eu);
            console.log(flag_eu);
        }

    });
    $('#oceania_chbox').on('click', function() {
        if (!!flag_oc) {
            flag_oc = (!flag_oc);
            map.clearSelectedRegions('OC');
            $('#OC').removeClass('accr_visible');
            console.log(flag_oc);
        } else {
            $('#OC').addClass('accr_visible');
            map.setSelectedRegions('OC');
            flag_oc = (!flag_oc);
            console.log(flag_oc);
        }

    });
     $('#namerica_chbox').on('click', function() {
        if (!!flag_na) {
            flag_na = (!flag_na);
            map.clearSelectedRegions('NA');
            $("#NA").removeClass('accr_visible');
            console.log(flag_na);
        } else {
            map.setSelectedRegions('NA');
            $('#SA').addClass('accr_visible');
            flag_na = (!flag_na);
            console.log(flag_na);
        }

    });
     $('#samerica_chbox').on('click', function() {
        if (!!flag_sa) {
            flag_sa = (!flag_sa);
            $('#SA').removeClass('accr_visible');
            map.clearSelectedRegions('SA');
            console.log(flag_sa);
        } else {
            map.setSelectedRegions('SA');
            $("#SA").addClass('accr_visible');
            flag_sa = (!flag_sa);
            console.log(flag_sa);
        }

    });


});
