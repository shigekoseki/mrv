var Master = {
    Organism: [
        {id:'Ac', name:'Aeromonas caviae', title:'<h1>Aeromonas <small>caviae</small></h1>'},
        {id:'Ah', name:'Aeromonas hydrophila', title:'<h1>Aeromonas <small>hydrophila</small></h1>'},
        {id:'As', name:'Aeromonas sobria', title:'<h1>Aeromonas <small>sobria</small></h1>'},
    ],
    Food: [
        {id: 'culture_medium', name:'Culture medium'},
        {id: 'beef', name:'Beef'},
        {id: 'pork', name:'Pork'},
        {id: 'chicken', name:'Chicken'},
    ],
    Additive: [
        {id:'lactic', name:'Lactic Acid'},
        {id:'sorbic', name:'Sorbic Acid'},
        {id:'citric', name:'Citric Acid'},
        {id:'acetic', name:'Acetic Acid'},
        {id:'nitrite', name:'Nitrite Acid'},
        {id:'propionic', name:'Propionic Acid'},
        {id:'ascorbic', name:'Ascorbic Acid'},
        {id:'glucose', name:'Glucose Acid'},
        {id:'nacl', name:'NaCl Acid'},
    ],
    findOrganism: function (id) {
        var ret = undefined;
        $.each(this.Organism, function (i, v) {
            if (v.id == id) {
                ret = v;
                return false;
            }
        });
        return ret;
    },
    findAdditive: function (id) {
        var ret = undefined;
        $.each(this.Additive, function (i, v) {
            if (v.id == id) {
                ret = v;
                return false;
            }
        });
        return ret;
    },
    findFood: function (id) {
        var ret = undefined;
        $.each(this.Food, function (i, v) {
            if (v.id == id) {
                ret = v;
                return false;
            }
        });
        return ret;
    }
};

var Status = {
    Organism: undefined,
    Food: undefined,
    Additive: undefined
};

var Screen = {
    list: [
        {
            name: 'baclst',
            fragment: 'baclst.html',
            title: '<h1>MRV<small>Microbial Responses Viewer</small></h1>',
            init: function () {
                $('#main-content > div > div > a').click(function () {
                    var organism = $(this).attr('data-organism');
                    Status.Organism = Master.findOrganism(organism);
                    moveTo("foodlst");
                });
            }
        },
        {
            name: 'foodlst',
            fragment: 'foodlst.html',
            title: '{Organism-title}<a href="#" onclick="moveTo(\'baclst\')" class="back-button big page-back"></a>',
            init: function () {
                $('#main-content > div > div > a').click(function () {
                    var food = $(this).attr('data-food');
                    if( food != undefined ){
                        Status.Food = Master.findFood(food);
                        moveTo("cmmodel");
                        return;
                    }
                    var additive = $(this).attr('data-additive');
                    if( additive != undefined){
                        Status.Additive = Master.findAdditive(additive);
                        moveTo("additiveselect");
                    }
                });
            }
        },
        {
            name: 'cmmodel',
            fragment: 'culturemedium.html',
            title: '<h1>{Food-name}<small>{Organism-name}</small></h1><a href="#" onclick="moveTo(\'baclst\')" class="back-button big page-back"></a>',
            init: function () {
                var chart = new CultureMediumChart({
                    id: "home_left_chart",
                    model: PolynomialModel,
                    organismKey: "Ah",
                    axisx: CMAxis_Temp,
                    axisy: CMAxis_pH,
                    constValue: 0.99
                });
            }
        },
        {
            name: 'foodmodel',
            fragment: 'foodmodel.html',
            title: '<h1 id="caption">Beef <small>{Organism-name}</small></h1><a href="#" onclick="moveTo(\'foodlst\')" class="back-button big page-back"></a>',
            init: function () {
                var chart = new TempBar({
                    id: "home_left_chart",
                    organismKey: "Ah",
                    model: SqrtModel
                });
            }
        },
        {
            name: 'additiveselect',
            fragment: 'additiveselect.html',
            title: '<h1 id="caption">{Additive-name}<small>{Organism-name}</small></h1><a href="#" onclick="moveTo(\'foodlst\')" class="back-button big page-back"></a>',
            init: function () {
                var chart = new AdditivePPMChart({
                    id: "home_left_chart",
                    model: PolynomialModel,
                    organismKey: "Ah",
                    axisx: CMAxis_Temp,
                    axisy: CMAxis_pH,
                    constValue: 0.99
                });
                $('#main-content > div > div > div > ul > li').click(function () {
                    moveTo("additivemodel");
                });
            }
        },
        {
            name: 'additivemodel',
            fragment: 'additivemodel.html',
            title: '<h1 id="caption">{Additive-name}<small>{Organism-name}</small></h1><a href="#" onclick="moveTo(\'additiveselect\')" class="back-button big page-back"></a>',
            init: function () {
                var chart = new AdditiveChart({
                    id: "home_left_chart",
                    model: PolynomialModel,
                    organismKey: "Ah",
                    axisx: CMAxis_Temp,
                    axisy: CMAxis_pH,
                    constValue: 0.99
                });
            }
        },
        {
            name: 'datalist',
            fragment: 'datalist.html',
            title: '<h1 id="caption">{Additive-name}{Food-name}<small>{Organism-name}</small></h1><a href="#" onclick="moveTo(\'foodlst\')" class="back-button big page-back"></a>',
            init: function () {
                    var getChartOption = function (container) {
                            chart = {
                                chart: {
                                    renderTo: container,
                                    spacingTop: 10,
                                    spacingLeft: 0,
                                    spacingBottom: 0
                                },
                                credits: {
                                    enabled: false
                                },
                                exporting: {
                                    enabled: false
                                },
                                legend: {
                                    enabled: false
                                },
                                xAxis: {
                                    min: 0,
                                    max: 100,
                                    title: { text: "" }
                                },
                                yAxis: {
                                    type: "logarithmic",
                                    min: 1,
                                    max: 100000,
                                    title: { texts: "" }
                                },
                                title: {
                                    text: ''
                                },
                                series: [{
                                    type: 'spline',
                                    name: 'Regression Line',
                                    data: [[0, 1], [5, 100], [10, 10000], [20, 100000], [100, 100000]],
                                    marker: {
                                        enabled: false
                                    },
                                    states: {
                                        hover: {
                                            lineWidth: 0
                                        }
                                    },
                                    enableMouseTracking: false
                                }, {
                                    type: 'scatter',
                                    name: 'Observations',
                                    data: [[0, 10], [5, 5000], [10, 5000], [20, 120000]],
                                    marker: {
                                        radius: 0
                                    },
                                    enableMouseTracking: false
                                }]
                            };
	                    return chart;
                    };
                    $("div.data-chart").each(function(){
		            var op = getChartOption($(this).attr("id"));
		            var chart = new Highcharts.Chart(op);
	            });
            }
        },
        {
            name: 'detail',
            fragment: 'detail.html',
            title: '<h1 id="caption">**** <small>{Organism-name}</small></h1><a href="#" onclick="moveTo(\'datalist\')" class="back-button big page-back"></a>',
            init: function () {
            }
        },
    ],
    findScreen: function (name) {
        var ret = undefined;
        $.each(this.list, function (i, v) {
            if (v.name == name) {
                ret = v;
                return false;
            }
        });
        return ret;
    },
};

function moveTo(name) {
    console.log('moveTo ' + name);
    var sc = Screen.findScreen(name);
    console.log(Status);
    var title = sc.title;
    if( Status.Organism != undefined){
        title = title.replace('{Organism-title}', Status.Organism.title);
        title = title.replace('{Organism-name}', Status.Organism.name);
    }
    if( Status.Food != undefined){
        title = title.replace('{Food-name}', Status.Food.name);
    }else{
        title = title.replace('{Food-name}', '');
    }
    if( Status.Additive != undefined){
        title = title.replace('{Additive-name}', Status.Additive.name);
    }else{
        title = title.replace('{Additive-name}', '');
    }
    $('#header-content').html(title);
    $('#main-content').fadeOut('fast', function(){
        $('#main-content').html("");
        $('#main-content').load('fragment/'+sc.fragment, function () {
                //Screen init
                if (sc.init != undefined) sc.init();
                //For plugin-reinitialization
                $('[data-role="button-set"]').each(function () {
                    $(this).ButtonSet();
                })
                $()["slider"]({initAll: true});
                //Show
                $('#main-content').fadeIn('fast');
        });
    });
}


