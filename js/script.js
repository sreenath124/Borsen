$(document).ready(function() {

    var flag_as = {
            value: false
        },
        flag_eu = {
            value: false
        },
        flag_na = {
            value: false
        },
        flag_sa = {
            value: false
        },
        flag_oc = {
            value: false
        },
        flag_af = {
            value: false
        };

    $('.world_map').vectorMap({
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
            var map = $('.world_map').vectorMap('get', 'mapObject');
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
        var id = this.id;
        $(this).toggleClass('accr_button_active');
        $(this).next('.accr_hidden').toggleClass('accr_visible');

    });
    setInterval(function() {
        var cvr = [],
            name,
            business_name,
            email,
            industry,
            sales,
            audience,
            export_to,
            source = [],
            slider,
            business_type = [],
            industry_type = [],
            sales_type = [],
            solution_type = [],
            asia = [],
            europe = [],
            africa = [],
            namerica = [],
            samerica = [],
            oceania = [];
            
            map= $('.world_map').vectorMap('get', 'mapObject');

        $('.cvr_input').each(function() {
            cvr.push($(this).val());
        });

        name = $('#personal_details input[name="name"]').val();
        business_name = $('#personal_details input[name="business_name"]').val();
        email = $('#personal_details input[name="email"]').val();
        slider = $('#slider').val();

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

        $("#AS input:checked").each(function() {
            asia.push($(this).next('label').text());
            $(this).prev('img.flag').addClass('filter_remove');
        });
        $("#EU input:checked").each(function() {
            europe.push($(this).next('label').text());
            $(this).prev('img.flag').addClass('filter_remove');
        });
        $("#AF input:checked").each(function() {
            africa.push($(this).next('label').text());
            $(this).prev('img.flag').addClass('filter_remove');
        });
        $("#SA input:checked").each(function() {
            samerica.push($(this).next('label').text());
            $(this).prev('img.flag').addClass('filter_remove');
        });
        $("#NA input:checked").each(function() {
            namerica.push($(this).next('label').text());
            $(this).prev('img.flag').addClass('filter_remove');
        });
        $("#OC input:checked").each(function() {
            oceania.push($(this).next('label').text());
            $(this).prev('img.flag').addClass('filter_remove');
        });

        $('.flyout #cvr_value').text(cvr.join(''));
        $('.flyout #name').text(name);
        $('.flyout #business_name').text(business_name);
        $('.flyout #email').text(email);
        $('.flyout #itsb').text(source.join(','));
        $('.flyout #hunter').text(100 - slider + "%");
        $('.flyout #farmer').text(slider + '%');
        $('.flyout #industry').text(industry_type.join(','));
        $('.flyout #audience').text(business_type.join(','));
        $('.flyout #sales').text(sales_type.join(','));
        $('.flyout #solutions').text(solution_type.join(','));
        $('.flyout #asia_value').text(asia.join(','));
        $('.flyout #africa_value').text(africa.join(','));
        $('.flyout #namerica_value').text(namerica.join(','));
        $('.flyout #samerica_value').text(samerica.join(','));
        $('.flyout #europe_value').text(europe.join(','));
        $('.flyout #oceania_value').text(oceania.join(','));

        if(asia.length === 0) {
            $('.asia_chbox').prop('checked', false);
            map.setSelectedRegions({'AS':false});
            flag_as.value=false;
        }
        else{
             $('.asia_chbox').prop('checked', true);
            map.setSelectedRegions({'AS':true});
            flag_as.value=true;
        }
        if(africa.length===0){
            $('.africa_chbox').prop('checked', false);
            map.setSelectedRegions({'AF': false});
            flag_af.value = false;
        }
        else{
            $('.africa_chbox').prop('checked', true);
            map.setSelectedRegions({'AF': true});
            flag_af.value = true;
        }

        if(namerica.length===0) {
            $('.namerica_chbox').prop('checked', false);
            map.setSelectedRegions({'NA': false});
            flag_na.value= false;
        }
        else {
             $('.namerica_chbox').prop('checked', true);
            map.setSelectedRegions({'NA': true});
            flag_na.value= true;
        }
        if(samerica.length===0) {
            $('.samerica_chbox').prop('checked', false);
            map.setSelectedRegions({'SA': false});
            flag_sa.value= false;
        }
        else {
             $('.samerica_chbox').prop('checked', true);
            map.setSelectedRegions({'SA': true});
            flag_sa.value= true;
        }
        if(europe.length===0) {
            $('.europe_chbox').prop('checked', false);
            map.setSelectedRegions({'EU': false});
            flag_eu.value=false;
        }
        else{
            $('.europe_chbox').prop('checked', true);
            map.setSelectedRegions({'EU': true});
            flag_eu.value= true;
        }
        if(oceania.length===0) {
            $('.oceania_chbox').prop('checked', false);
            map.setSelectedRegions({'OC': false});
            flag_oc.value=false;
        }
        else{
            $('.oceania_chbox').prop('checked', true);
            map.setSelectedRegions({'OC': true});
            flag_oc.value= true;
        }

        $('.accordian input:checkbox:not(:checked)').each(function() {
            $(this).prev('img.flag').removeClass('filter_remove');
        });

        


    }, 500);

    $('.flyout_btn').on('click', function() {
        $('.flyout_menu').toggleClass('expand_flyout');
    });
    $('#menu_btn').on('click', function() {
        $('.nav_bar').toggleClass('expand_navbar');
    });
 


    var map = $('.world_map').vectorMap('get', 'mapObject');
   
    
    $('.asia_chbox').on('click', function() {
        onMapCheckboxClick("#AS", "AS", flag_as);

    });
    $('.europe_chbox').on('click', function() {
        onMapCheckboxClick("#EU", "EU", flag_eu);

    });
    $('.oceania_chbox').on('click', function() {
        onMapCheckboxClick("#OC", "OC", flag_oc);

    });
    $('.namerica_chbox').on('click', function() {
      onMapCheckboxClick("#NA", "NA", flag_na);

    });
    $('.samerica_chbox').on('click', function() {
        onMapCheckboxClick("#SA", "SA", flag_sa);

    });
    $('.africa_chbox').on('click', function() {
        onMapCheckboxClick("#AF", "AF", flag_af);
    });
  

    function onMapCheckboxClick(accordion_id, region_code, flags) {
        var map = $('.world_map').vectorMap('get', 'mapObject');
        var region_object = {};
        if (!!flags.value) {
            flags.value = false;
            $(accordion_id).prev('button').removeClass('accr_button_active');
            $(accordion_id).removeClass('accr_visible').find('.checkboxes').prop('checked', false);
            region_object[region_code]= false;
            map.setSelectedRegions(region_object);
        } else {
            map.setSelectedRegions(region_code);
            $(accordion_id).prev('button').addClass('accr_button_active');
            $(accordion_id).addClass('accr_visible').find('.checkboxes').prop('checked', true);
            flags.value = true;
        }
        return false;
    }

});
