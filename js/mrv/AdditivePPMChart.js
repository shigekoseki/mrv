var AdditivePPMChart = function (arg) {
    if (arg != undefined) {
        this.organismKey = arg.organismKey;
        this.model = arg.model;
        this.constValue = arg.constValue;
        this.init(arg.id);
    }
};

AdditivePPMChart.prototype = {
    model: undefined,
    axisFontSize: 9.0,
    constValue: 0.0,
    MainRangeMin: 0.0,
    MainRangeMax: 0.5,
    getOption: function (container) {
        var op = {
            chart: {
                zoomType: 'none',
                animation: false,
                renderTo: container
            },
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },
            xAxis: [{
                labels: {
                    formatter: function () {
                        return this.value + 'ppm';
                    }
                },
                categories: [0, 300, 600, 900, 1200, 10000]
            }],
            yAxis: {
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                },
                title: {
                    text: 'Effect'
                },
                max: 100,
                min: 0
            },
            legend: {
                enabled: false
            },
            tooltip: {
                shared: false
            },

            series: [{
                name: 'Effect',
                type: 'column',
                data: [100, 60, 40, 30, 20, 0],
                marker: {
                    enabled: true
                },
            }, {
                color: '#FF0000',
                name: 'Effect error',
                type: 'errorbar',
                data: [[100, 100], [90, 40], [60, 20], [60, 10], [50, 0], [5, 0]],
                stemWidth: 1,
                whiskerLength: 40
            }]
        };

        return op;
    },
    init: function(id) {
        var op = this.getOption(id);
        var chart = new Highcharts.Chart(op);
    }
};
