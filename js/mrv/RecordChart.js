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
	                title: { text: "Hours elapsed (h)" }
                },
                yAxis: {
                    min: 1,
                title: { text: "log 10 CFU/g" }
                },
                title: {
                    text: ''
                },
                plotOptions: {
                	scatter: {
                		animation: false
                	},
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
                	type: 'scatter',
                	name: 'growth',
                    data: []
				},{
                	type: 'spline',
                	visible: false,
                	name: 'growth',
                    data: []
                }]
            };
            return chart;
        };
        var data = this.masterData;
        var op = getChartOption(id);
        var maxHour = 200;
        var y0 = 0;
        var ymax = 0;
        var ymin = 0;
        
        //logc
        if( data != undefined && data.logc != undefined ){
            var hist = data.logc.split(";");
            var l = hist.length / 2;
            var plotdata = Array();
            for(var i = 0 ; i < l ; i++ ){
            	var x = parseFloat(hist[i*2]);
            	var y = parseFloat(hist[i*2+1]);
            	if( x > maxHour ) maxHour = x;
            	if( y > ymax ) ymax = y;
            	if( y > ymin ) ymin = y;
            	if( x == 0.0 ) y0 = y;
            	plotdata.push([x,y]);
            }
            op.series[0].data = plotdata;
        }
        
        //spec_rate
        if( data != undefined && data.spec_rate != undefined ){
           var _ymax = data.spec_rate < 0 ? 9 : Math.min(9,ymax);
     	   op.series[1].data = this._getDataBySpecRate(data.spec_rate, maxHour, y0, _ymax);
     	   op.series[1].visible = true;
     	   console.log(op.series[1]);
    	}
        
        this._chart = new Highcharts.Chart(op);
        this._renderTo = id;
    },
    _getDataBySpecRate: function(spec_rate, maxHour, y0, ymax){
    	if( maxHour == undefined ) maxHour = 200;
		if( y0 == undefined) y0 = 2;
		if( ymax == undefined) ymax = 9;
		var data = Array();
		for(var x = 0 ; x < maxHour ; x+=20 ) {
	        var v =  Math.LOG10E * Math.log(Math.pow(10.0, ymax) / (1 + (Math.pow(10.0, ymax-y0) - 1) * Math.exp(-spec_rate * (x))));
        	data.push([x, v]);
		}
		return data;
    },
    _updateData: function(){
    	var data = this._getDataBySpecRate(this._spec_rate);
		this._chart.series[1].setData(data);
     	if( !this._chart.series[1].visible ) {
     		this._chart.series[1].show();
     	}
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
