var RecordChart = function (arg) {
    if (arg != undefined) {
        this.masterData = arg.masterData;
        this.init(arg.id);
    }
};

RecordChart.prototype = {
    init: function(id) {
        var getChartOption = function (container) {
            chart = {
                chart: {
                	type: 'scatter',
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
                    title: { text: "Hours elapsed" }
                },
                yAxis: {
                    min: 1,
                    title: { text: "log10" }
                },
                title: {
                    text: ''
                },
                plotOptions: {
                	scatter: {
                		animation: false
                	}
                },
                series: [{
                	name: 'growth',
                    data: []
                }]
            };
            return chart;
        };
        var data = this.masterData;
        var op = getChartOption(id);
        if( data != undefined && data.logc != undefined ){
            var hist = data.logc.split(";");
            var l = hist.length / 2;
            var data = Array();
            for(var i = 0 ; i < l ; i++ ){
            	data.push([parseFloat(hist[i*2]), parseFloat(hist[i*2+1])]);
            }
            op.series[0].data = data;
        }
        new Highcharts.Chart(op);
    }
};
