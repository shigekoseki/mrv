Ext.ns('MRV');

MRV.ScaleBar = Ext.extend(Ext.Component, {
	minValue: 0.0,
	maxValue: 40.0,
	step: 5.0,
	fontSize: 8.0,
	getCanvas: function() {
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
		var ctx = canvas.getContext('2d');
		var w = this.getChartWidth();
		var h = this.getChartHeight();
        this.drawAxis(ctx);
	},
        _drawLine: function(ctx, line) {
                ctx.beginPath();
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
        drawAxis: function(ctx){
            var left = 0.0;
            var top = 0.0;
            var ch = this.getChartHeight();
            var cw = this.getChartWidth();

                var xaxis =  { X1: left, Y1: top+ch, X2: left + cw, Y2: top + ch };
                var rangex = { min: this.minValue, max: this.maxValue, d: this.step };
                this._drawLine(ctx, xaxis);

                for (var v = rangex.min; v <= rangex.max; v += rangex.d)
                {
                    var x = cw * (v - rangex.min) / (rangex.max - rangex.min);
                    var xaxis_line =   { X1: x, Y1: top + ch, X2: x, Y2: top + ch - 4 };
                    this._drawLine(ctx, xaxis_line);

                    var tb =  { FontSize: 8.0, Height: 8.0, TextAlignment: 'center', Width: 8, Baseline: 'Top' };
                    tb.Text = v.toString();
                    tb.Left = x + 4.0;
                    if( v == rangex.min ) tb.Left = x + 2.0;
                    else if( v == rangex.max ) tb.Left = x - 2.0;
                    tb.Top = top + ch - 5;
	            	this._drawText(ctx, tb);
                }

                var label =  
                {
                    FontSize: this.fontSize,
                    Height: this.fontSize,
                    Baseline: "top",
                    Width: 40,
                    TextAlignment: 'left',
                    Text: "Temp(C)"
                };
                label.Left = xaxis.X1 + 0 ;
                label.Top = top + ch - this.fontSize - 16.0;
            	this._drawText(ctx, label);
        },
		updateCanvas :function()
		{
			if( this.canvas ) {
				this.canvas.remove();
			}
			this.canvas = this.el.createChild({ tag: 'canvas' });
			this.canvas.set({width: this.width, height:this.height});
			this.updateChart();
		},
    onRender: function() {
		MRV.ScaleBar.superclass.onRender.apply(this, arguments);
    	if( this.el ) {
    		this.updateCanvas();
		}else{
			console.log(this);
		}
		this.updateChart();
    }
});
Ext.reg('scalebar', MRV.ScaleBar);

