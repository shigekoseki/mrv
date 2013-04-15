var Screen = {
    list: [
        {
            name: 'baclst',
            fragment: 'baclst.html',
            title: '<h1>MRV<small>Microbial Responses Viewer</small></h1>',
            init: function () {
                $('#main-content > div > div > a').click(function () {
                    moveTo("foodlst");
                });
            }
        },
        {
            name: 'foodlst',
            fragment: 'foodlst.html',
            title: '<h1>Aeromonas <small>caviae</small></h1><a href="#" onclick="moveTo(\'baclst\')" class="back-button big page-back"></a>',
            init: function () {
            }
        },
        {
            name: 'cmmodel',
            fragment: 'culturemedium.html',
            title: '<h1>Culture medium<small>Aeromonas caviae</small></h1><a href="#" onclick="moveTo(\'baclst\')" class="back-button big page-back"></a>',
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
            title: '<h1 id="caption">Beef <small>Aeromonas caviae</small></h1><a href="#" onclick="moveTo(\'foodlst\')" class="back-button big page-back"></a>',
            init: function () {
                var chart = new TempBar({
                    id: "home_left_chart",
                    organismKey: "Ah",
                    model: SqrtModel
                });
            }
        },
        {
            name: 'additivemodel',
            fragment: 'additivemodel.html',
            title: '<h1 id="caption">Lactic Acid <small>Aeromonas caviae</small></h1><a href="#" onclick="moveTo(\'foodlst\')" class="back-button big page-back"></a>',
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
            name: 'datalist',
            fragment: 'datalist.html',
            title: '<h1 id="caption">****<small>Aeromonas caviae</small></h1><a href="#" onclick="moveTo(\'foodlst\')" class="back-button big page-back"></a>',
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
            title: '<h1 id="caption">**** <small>Aeromonas caviae</small></h1><a href="#" onclick="moveTo(\'datalist\')" class="back-button big page-back"></a>',
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
    $('#header-content').html(sc.title);
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


