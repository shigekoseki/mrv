Ext.ns('MRV');

MRV.RecordChart = Ext.extend(Ext.Component, {
	temp: undefined,
	pH: undefined,
	aw: undefined,
	model: undefined,
	master: undefined,
	graphMargin: {top:15.0, left:30.0, right:30.0, bottom:15.0 },
	axisFontSize: 8.0,
	axisBarLength: 4.0,
	axisX: { length:200.0, label: 'Hour'},
	axisY: { length:90.0, label: ''},
	getCanvas: function() {
		if( !this.canvas ) return false;
		var canvas = document.getElementById(this.canvas.id);
		if ( ! canvas || ! canvas.getContext ) return false;
		return canvas;
	},
	getChartWidth:  function () {
		var canvas = this.getCanvas();
		return canvas.width - 0;
	},
	getChartHeight:  function () {
		var canvas = this.getCanvas();
		return canvas.height - 0;
	},
	updateChart: function() {
		var canvas = this.getCanvas();
		if( canvas ) 
		{
			var ctx = canvas.getContext('2d');
			var w = this.getChartWidth();
			var h = this.getChartHeight();
	    	ctx.fillStyle = 'white';
	     	ctx.fillRect(0,0,w,h);
			this.drawSimpleChart(ctx, w, h);
//        this._drawAxis(ctx);
		}
	},
        _drawLine: function(ctx, line) {
                ctx.beginPath();
                ctx.strokeStyle = line.Stroke;
                ctx.moveTo(line.X1, line.Y1);
                ctx.lineTo(line.X2, line.Y2);
                ctx.closePath();
                ctx.stroke();
        },
        _drawText: function(ctx, txt) {
        	ctx.font = '' + txt.FontSize + 'px Arial';
        	ctx.textBaseline = txt.Baseline;
        	ctx.textAlign = txt.TextAlignment;
        	var metrics = ctx.measureText(txt.Text);
        	ctx.fillText(txt.Text, txt.Left + txt.Width - metrics.width, txt.Top);
        },
	//begin drawRateChart
	_drawRateChart: function(ctx, spec_rate, ymax, y0, skip, xmax, stroke, strokeThickness, strokeDashArray) {
            //データ分析
            var min = Number.MAX_VALUE;
            var max = Number.MIN_VALUE;

            var data = new Array(this.axisX.length);
            for (var x = 0; x < this.axisX.length; x++)
            {
                var v =  Math.LOG10E * Math.log(Math.pow(10.0, ymax) / (1 + (Math.pow(10.0, ymax-y0) - 1) * Math.exp(-spec_rate * (x*xmax/this.axisX.length))));
                data[x] = isNaN(v) || v < 0.0 ? 0.0 : v;
            }
            //alert(spec_rate);

            min = Math.min(0, y0);
            max = ymax; // Math.Log10(ymax);

            //グラフ描画
            for (var x = 0; x < this.axisX.length - skip; x += skip)
            {
                var line =
                {
                    X1: x + this.graphMargin.left,
                    X2: x + skip + this.graphMargin.left,
                    Y1: this.axisY.length - (this.axisY.length * (data[x] - min) / (max - min)) + this.graphMargin.top,
                    Y2: this.axisY.length - (this.axisY.length * (data[x + skip] - min) / (max - min)) + this.graphMargin.top,
                    Stroke: stroke,
                    StrokeThickness: strokeThickness
                };
                if (strokeDashArray != null)
                {
                    line.StrokeDashArray = [1.0, 1.0];
                }
                this._drawLine(ctx, line);
            }
	},
	_drawAxis: function(ctx, ymax, xmax) {
            if (ymax < 1.00) ymax = 1.00;
            if (xmax < 200.00) xmax = 200.00;

            var x = 0.0
            var top = 0.0
            var h = this.axisY.length;
            var w = this.axisX.length;
            
	    	ctx.fillStyle = 'black';

            //region AxisY
            {
                var yaxis = {
                	X1: x + this.graphMargin.left,
                	Y1: top + this.graphMargin.top, 
                	X2: x + this.graphMargin.left, 
                	Y2: top + h + this.graphMargin.top, 
                	Stroke: 'black', 
                	StrokeThickness: 1.0
                };
                this._drawLine(ctx, yaxis);

                var min = 0.0;
                var max = ymax; // Math.Log10(ymax);
                var d = Math.max(1.0,Math.floor((max - min) / 3.0));
                //AxisY
                for (var v = min; v <= max; v += 1.0)
                {
                    var y = this.axisY.length - (this.axisY.length * (v - min) / (max - min));

                    var yaxis_line = 
                    {
                        X1: x + this.graphMargin.left,
                        Y1: y + this.graphMargin.top,
                        X2: x - this.axisBarLength / 2 + this.graphMargin.left,
                        Y2: y + this.graphMargin.top,
                        Stroke: 'black',
                        StrokeThickness: 1.0
                    };
	                this._drawLine(ctx, yaxis_line);
                }
                for (var v = min; v <= max; v += d)
                {
                    var y = this.axisY.length - (this.axisY.length * (v - min) / (max - min));

                    var yaxis_line =
                    {
                        X1: x + this.graphMargin.left,
                        Y1: y + this.graphMargin.top,
                        X2: x - this.axisBarLength + this.graphMargin.left,
                        Y2: y + this.graphMargin.top,
                        Stroke: 'black',
                        StrokeThickness: 1.0
                    };
	                this._drawLine(ctx, yaxis_line);

                    var tb =
                    {
                        FontSize: this.axisFontSize,
                        Height: this.axisFontSize * 2,
                        TextAlignment: 'left',
                        VerticalAlignment: 'center',
                        Text: "10^"+ v,
                        Width: this.graphMargin.left - 5,
                    };
                    tb.Left = 0.0;
                    tb.Top = y + (tb.FontSize * 0.5) + this.graphMargin.top;
                    this._drawText(ctx, tb);
                }
                if (this.graphMargin.top > 0.0)
                {
                    var label =
                    {
                        FontSize: this.axisFontSize,
                        Height: this.graphMarginTop,
                        TextAlignment: 'center', 
                        VerticalAlignment:'center',
                        Text: this.axisY.label,
                        Width: this.graphMargin.left
                    };
                    label.Left = 0.0;
                    label.Top = 0.0;
                    this._drawText(ctx, label);
                }
            }
            //endregion of AxisY

            //region AxisX
            {
                var xaxis = {
                	X1: x + this.graphMargin.left, 
                	Y1: top + h + this.graphMargin.top, 
                	X2: x + w + this.graphMargin.left, 
                	Y2: top + h + this.graphMargin.top, 
                	Stroke: 'black', 
                	StrokeThickness: 1.0
                };
                this._drawLine(ctx, xaxis);

                var d = Math.max(1.0, Math.floor(xmax / 50)) * 5;
                for (var v = 0; v <= xmax; v += d)
                {
                    var xx = (v * this.axisX.length / xmax);

                    var xaxis_line =
                    {
                        X1: xx + this.graphMargin.left,
                        Y1: top + h + this.graphMargin.top,
                        X2: xx + this.graphMargin.left,
                        Y2: top + h + this.axisBarLength + this.graphMargin.top,
                        Stroke: 'black',
                        StrokeThickness: 1.0
                    };
                    this._drawLine(ctx, xaxis_line);

                    var tb = 
                    {
                        FontSize: this.axisFontSize,
                        Height: this.axisFontSize,
                        TextAlignment: 'center',
                        Width: 20
                    };
                    tb.Text = v;
                    tb.Left = xx - 10 + this.graphMargin.left;
                    tb.Top = top + tb.FontSize + 4 +  this.axisY.length + this.graphMargin.top;
                    this._drawText(ctx, tb);
                }
                if (this.graphMargin.right > 0.0)
                {
                    var label = 
                    {
                        FontSize: this.axisFontSize,
                        Height: this.graphMargin.bottom,
                        TextAlignment: 'left',
                        VerticalAlignment: 'center',
                        Text: this.axisX.label,
                        Width: 40,
                    };
                    label.Left = -40 + this.graphMargin.left + this.axisX.length;
                    label.Top = -4 + this.graphMargin.top + this.axisY.length;
                    this._drawText(ctx, label);
                }
            }
            //endregion of AxisX
	},
	//end _drawAxis
	//begin drawSimpleChart
	drawSimpleChart: function(ctx, w, h) {
            //計算条件
            var ymax = 9; //Math.pow(10, 9);
            var y0 = Math.LOG10E * Math.log(200.0);
            var xmax = this.axisX.length;

            //1)実験データの描画
            if( this.master ) {
	            var rd = this.master.spec_rate;
    	        this._drawRateChart(ctx, rd, ymax, y0, 5, xmax, 'black', 2.0, [1.0, 1.0]);
    	    }

            //2)モデルデータの描画
            if (this.model != null)
            {
                var temp = this.temp;
                var const_ph = this.pH;
                var const_aw = this.aw;
                if( this.master ) {
                	temp = this.master.temp;
                	const_ph = this.master_pH;
                	const_aw = this.master.aw;
                }
//				console.log(temp);
                var rm = this.model.getMyuMax(temp, const_ph, const_aw);
                this._drawRateChart(ctx, rm, ymax, y0, 1, xmax, 'red', 1.0, null);
            }

            //3)X/Y軸描画
            this._drawAxis(ctx, ymax, xmax);
    },
    //end drawSimpleChart
    onRender: function() {
		MRV.RecordChart.superclass.onRender.apply(this, arguments);
		this.canvas = this.el.createChild({ tag: 'canvas', width: this.width, height:this.height });
		this.updateChart();
    }
});

Ext.reg('recordchart', MRV.RecordChart);
