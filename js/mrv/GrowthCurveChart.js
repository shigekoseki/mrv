var GrowthCurveChart = function (arg) {
    if (arg != undefined) {
        this.init(arg.id);
    }
};

GrowthCurveChart.prototype = {
    init: function(id) {
        var getChartOption = function (container) {
            chart = {
                chart: {
                	type: 'spline',
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
                    title: { text: "log10" }
                },
                title: {
                    text: ''
                },
                plotOptions: {
                	spline: {
                		animation: false,
                		marker: {
                			enabled: false
                		}
                	}
                },
                tooltip: {
                	headerFormat: '',
					pointFormat: 'Time (h): {point.x:,.0f}<br/>log CFU/g: {point.y:,.3f}'
                },
                series: [{
                	name: 'growth',
                    data: []
                }]
            };
            return chart;
        };
        var op = getChartOption(id);
        this._chart = new Highcharts.Chart(op);
        this._renderTo = id;
    	this.hide();
    },
    _updateData: function(){
		var ymax = 9;
		var y0 = 2;
		var spec_rate = this._spec_rate;
		var data = Array();
		for(var x = 0 ; x < 200 ; x+=20 ) {
	        var v =  Math.LOG10E * Math.log(Math.pow(10.0, ymax) / (1 + (Math.pow(10.0, ymax-y0) - 1) * Math.exp(-spec_rate * (x))));
        	data.push([x, v]);
		}
		this._chart.series[0].setData(data);
    },
    update: function(spec_rate){
    	this._spec_rate = spec_rate;
    	this._updateData();
    	this.show();
    },
    show: function(){
    	$('#' + this._renderTo).show();
    },
    hide: function(){
    	$('#' + this._renderTo).hide();
    }
};
