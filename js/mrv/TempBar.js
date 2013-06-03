
var TempBar = function (arg) {
    if (arg != undefined) {
        this.organismKey = arg.organismKey;
        this.foodKey = arg.foodKey;
        this.model = arg.model;
        this.id = arg.id;
        this.pH = arg.pH;
        this.aw = arg.aw;
        this.RangeMax = arg.max;
        this.RangeMin = arg.min;
        this.init();
    }
};


TempBar.prototype = {
    model: undefined,
    pH: 0.0,
    aw: 0.0,
    RangeMax: 0.0,
    RangeMin: 0.0,
    ColorSet: [
            0x4C00FFFF, 0x4900FFFF, 0x4500FFFF, 0x4200FFFF, 0x3E00FFFF, 0x3B00FFFF,
            0x3700FFFF, 0x3300FFFF, 0x3000FFFF, 0x2C00FFFF, 0x2800FFFF, 0x2500FFFF,
            0x2100FFFF, 0x1E00FFFF, 0x1A00FFFF, 0x1600FFFF, 0x1300FFFF, 0x0F00FFFF,
            0x0C00FFFF, 0x0800FFFF, 0x0400FFFF, 0x0100FFFF, 0x0003FFFF, 0x0006FFFF,
            0x000AFFFF, 0x000DFFFF, 0x0011FFFF, 0x0015FFFF, 0x0018FFFF, 0x001CFFFF,
            0x001FFFFF, 0x0023FFFF, 0x0027FFFF, 0x002AFFFF, 0x002EFFFF, 0x0031FFFF,
            0x0035FFFF, 0x0039FFFF, 0x003CFFFF, 0x0040FFFF, 0x0043FFFF, 0x0047FFFF,
            0x004BFFFF, 0x004EFFFF, 0x0052FFFF, 0x0055FFFF, 0x0059FFFF, 0x005DFFFF,
            0x0060FFFF, 0x0064FFFF, 0x0067FFFF, 0x006BFFFF, 0x006FFFFF, 0x0072FFFF,
            0x0076FFFF, 0x007AFFFF, 0x007DFFFF, 0x0081FFFF, 0x0084FFFF, 0x0088FFFF,
            0x008BFFFF, 0x008FFFFF, 0x0093FFFF, 0x0096FFFF, 0x009AFFFF, 0x009EFFFF,
            0x00A1FFFF, 0x00A5FFFF, 0x00A8FFFF, 0x00ACFFFF, 0x00AFFFFF, 0x00B3FFFF,
            0x00B7FFFF, 0x00BAFFFF, 0x00BEFFFF, 0x00C1FFFF, 0x00C5FFFF, 0x00C9FFFF,
            0x00CCFFFF, 0x00D0FFFF, 0x00D3FFFF, 0x00D7FFFF, 0x00DBFFFF, 0x00DEFFFF,
            0x00E2FFFF, 0x00E5FFFF, 0x00FF4DFF, 0x00FF49FF, 0x00FF45FF, 0x00FF42FF,
            0x00FF3EFF, 0x00FF3AFF, 0x00FF37FF, 0x00FF33FF, 0x00FF2FFF, 0x00FF2CFF,
            0x00FF28FF, 0x00FF24FF, 0x00FF21FF, 0x00FF1DFF, 0x00FF1AFF, 0x00FF16FF,
            0x00FF12FF, 0x00FF0FFF, 0x00FF0BFF, 0x00FF07FF, 0x00FF04FF, 0x00FF00FF,
            0x04FF00FF, 0x07FF00FF, 0x0BFF00FF, 0x0FFF00FF, 0x12FF00FF, 0x16FF00FF,
            0x1AFF00FF, 0x1DFF00FF, 0x21FF00FF, 0x24FF00FF, 0x28FF00FF, 0x2CFF00FF,
            0x2FFF00FF, 0x33FF00FF, 0x37FF00FF, 0x3AFF00FF, 0x3EFF00FF, 0x42FF00FF,
            0x45FF00FF, 0x49FF00FF, 0x4DFF00FF, 0x50FF00FF, 0x54FF00FF, 0x57FF00FF,
            0x5BFF00FF, 0x5FFF00FF, 0x62FF00FF, 0x66FF00FF, 0x6AFF00FF, 0x6DFF00FF,
            0x71FF00FF, 0x75FF00FF, 0x78FF00FF, 0x7CFF00FF, 0x80FF00FF, 0x83FF00FF,
            0x87FF00FF, 0x8AFF00FF, 0x8EFF00FF, 0x92FF00FF, 0x95FF00FF, 0x99FF00FF,
            0x9DFF00FF, 0xA0FF00FF, 0xA4FF00FF, 0xA8FF00FF, 0xABFF00FF, 0xAFFF00FF,
            0xB3FF00FF, 0xB6FF00FF, 0xBAFF00FF, 0xBDFF00FF, 0xC1FF00FF, 0xC5FF00FF,
            0xC8FF00FF, 0xCCFF00FF, 0xD0FF00FF, 0xD3FF00FF, 0xD7FF00FF, 0xDBFF00FF,
            0xDEFF00FF, 0xE2FF00FF, 0xE6FF00FF, 0xFFFF00FF, 0xFFFE02FF, 0xFFFD04FF,
            0xFFFB06FF, 0xFFFA08FF, 0xFFF90BFF, 0xFFF80DFF, 0xFFF70FFF, 0xFFF611FF,
            0xFFF513FF, 0xFFF415FF, 0xFFF317FF, 0xFFF219FF, 0xFFF11CFF, 0xFFF01EFF,
            0xFFEF20FF, 0xFFEE22FF, 0xFFED24FF, 0xFFEC26FF, 0xFFEC28FF, 0xFFEB2AFF,
            0xFFEA2DFF, 0xFFE92FFF, 0xFFE831FF, 0xFFE833FF, 0xFFE735FF, 0xFFE637FF,
            0xFFE639FF, 0xFFE53CFF, 0xFFE43EFF, 0xFFE440FF, 0xFFE342FF, 0xFFE344FF,
            0xFFE246FF, 0xFFE148FF, 0xFFE14AFF, 0xFFE04DFF, 0xFFE04FFF, 0xFFDF51FF,
            0xFFDF53FF, 0xFFDF55FF, 0xFFDE57FF, 0xFFDE59FF, 0xFFDD5BFF, 0xFFDD5EFF,
            0xFFDD60FF, 0xFFDD62FF, 0xFFDC64FF, 0xFFDC66FF, 0xFFDC68FF, 0xFFDC6AFF,
            0xFFDB6CFF, 0xFFDB6FFF, 0xFFDB71FF, 0xFFDB73FF, 0xFFDB75FF, 0xFFDB77FF,
            0xFFDB79FF, 0xFFDB7BFF, 0xFFDB7DFF, 0xFFDB80FF, 0xFFDB82FF, 0xFFDB84FF,
            0xFFDB86FF, 0xFFDB88FF, 0xFFDB8AFF, 0xFFDB8CFF, 0xFFDB8EFF, 0xFFDB91FF,
            0xFFDB93FF, 0xFFDC95FF, 0xFFDC97FF, 0xFFDC99FF, 0xFFDC9BFF, 0xFFDD9DFF,
            0xFFDD9FFF, 0xFFDDA2FF, 0xFFDDA4FF, 0xFFDEA6FF, 0xFFDEA8FF, 0xFFDFAAFF,
            0xFFDFACFF, 0xFFDFAEFF, 0xFFE0B0FF, 0xFFE0B3FF,
        ],
    getCanvas: function () {
        if (this.canvas == undefined) {
            this.canvas = document.createElement('canvas');
            this.canvas.id = "CursorLayer";
            this.canvas.width = 100;
            this.canvas.height = 100;
            this.canvas.style.zIndex = 8;
            this.canvas.style.position = "absolute";
            this.canvas.style.border = "1px solid";
            this.canvas.style.display = "none";
            document.body.appendChild(this.canvas);
        }
        if (!this.canvas || !this.canvas.getContext) return false;
        return this.canvas;
    },
    getChartWidth: function () {
        var canvas = this.getCanvas();
        return canvas.width;
    },
    getChartHeight: function () {
        var canvas = this.getCanvas();
        return canvas.height;
    },
    bgImage: undefined,
    updateChart: function () {
        if (this.model) {
            var canvas = this.getCanvas();
            if (!canvas) return false;
            var ctx = canvas.getContext('2d');
            var w = this.getChartWidth();
            var h = this.getChartHeight();
            var imgData = ctx.createImageData(w, h);
            this.drawGraph(imgData, w, h, this.model, this.pH, this.aw);
            ctx.putImageData(imgData, 0, 0);
        }
    },
    //begin drawGraph
    drawGraph: function (imgData, w, h, model, pH, aw) {
        var map = new Array();
        var max = Number.MIN_VALUE;
        var min = Number.MAX_VALUE;

		console.log("TempBar.drawGraph: pH="+pH+", aw="+aw);
		var off = this.RangeMin;
		var range = this.RangeMax - this.RangeMin;
        for (var x = 0; x < w; x++) {
            var temp = (x * range / w) + off;
            var v = model.getMyuMax(temp, pH, aw);
            map[x] = v;
            if (v > max) max = v;
            if (v < min) min = v;
        }

        this.rangeMin = Math.floor(min * 10.0) / 10.0;
        this.rangeMax = Math.ceil(max * 10.0) / 10.0;

        for (var x = 0; x < w; x++) {
            var v = (map[x] - this.rangeMin) * this.ColorSet.length / (this.rangeMax - this.rangeMin);

            var l = this.ColorSet.length - 1;
            var i = parseInt(v > l ? l : (v < 0 ? 0 : v));

            for (var y = 0; y < h; y++) {
                imgData.data[x * 4 + y * w * 4] = (this.ColorSet[i] >> 24) & 0xFF;
                imgData.data[x * 4 + y * w * 4 + 1] = (this.ColorSet[i] >> 16) & 0xFF;
                imgData.data[x * 4 + y * w * 4 + 2] = (this.ColorSet[i] >> 8) & 0xFF;
                imgData.data[x * 4 + y * w * 4 + 3] = 0xFF;
            }
        }
    },
    updateCanvas: function () {
        if (this.canvas) {
            this.canvas.remove();
        }
        this.canvas = this.el.createChild({ tag: 'canvas' });
        this.canvas.set({ width: this.width, height: this.height });
        this.updateChart();
    },
    onRender: function (container, position) {
        MRV.TempBar.superclass.onRender.apply(this, arguments);
        //    	console.log('TempBar.onRender');
        if (this.el) {
            this.updateCanvas();
        } else {
            console.log(this);
        }
    },
    getScatterOption: function (container, callback) {
        var op = {
            chart: {
                renderTo: container,
                type: 'bubble',
                plotBorderWidth: 1,
                zoomType: 'none'
            },
            credits: {
                enabled: false
            },

            title: {
                text: ''
            },

            xAxis: {
                min: 0,
                max: 45,
                gridLineWidth: 1,
                gridLineDashStyle: 'longdash'
            },

            yAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                min: 0,
                max: 100,
                gridLineWidth: 0,
                startOnTick: false,
                endOnTick: false
            },

            legend: {
                enabled: false
            },

            series: [{
                data: [
                ],
                marker: {
                    fillColor: {
                        radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                        stops: [
                             [0, 'rgba(255,255,255,0.5)'],
                             [1, 'rgba(69,114,167,0.5)']
                         ]
                    }
                }
            }, {
                data: [
                ],
                color: 'rgba(170,70,67,0.5)',
                marker: {

                    fillColor: {
                        radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                        stops: [
                             [0, 'rgba(255,255,255,0.5)'],
                             [1, 'rgba(170,70,67,0.5)']
                         ]
                    }
                }
            }]
        };
        
        
        var organismKey = this.organismKey;
        var self = this;
        $.ajax({
            url: 'data/index/' + organismKey + '.JSON',
            dataType: "json",
            disableCaching: false,
            success: function (response, opts) {

                //key, temp, pH, aw
                var key = self.foodKey.substring(0,1).toUpperCase() + self.foodKey.substring(1);
                var rawData = response[key]; //$.parseJSON(response)["Culture_medium"];
                rawData.pop();
                console.log(rawData);
                console.log('loaded ' + rawData.length + ' records. (' + organismKey + '-' + self.foodKey +')');

                var left = 20.0;
                var top = 10.0;
                var ch = self.getChartHeight();
                var cw = self.getChartWidth();

                var v = 0;
                op.xAxis.min = self.RangeMin;
                op.xAxis.max = self.RangeMax;

                var count = rawData.length;
                var records = rawData;
                for (var i = 0; i < count; i++) {
                    var item = {
                        key: records[i][0],
                        no: records[i][1],
                        Temp: records[i][2],
                        pH: records[i][3],
                        aw: records[i][4],
                        spec_rate: parseFloat(records[i][5])
                    };
                    var x = cw * (parseFloat(item.Temp) - self.RangeMin) / (self.RangeMax - self.RangeMin);

		             var data = [parseFloat(item.Temp), 50, 50];
		             if( item.spec_rate < 0  ) {
		             	op.series[0].data.push(data);
		             }else{
		             	op.series[1].data.push(data);
		             }
                }

                callback(op);
            }
        });
    },
    init: function () {
        console.log("TempBar: min=" + this.RangeMin + ", max=" + this.RangeMax +", pH=" + this.pH + ", aw=" + this.aw);
    	var f = this.model.hasModel();
    	var url;
    	if( f ) {
	        this.updateChart();
	        url = this.canvas.toDataURL();
	    }
        this.getScatterOption(this.id, function(op){
        	if( f ) op.chart.plotBackgroundImage = url;
    	    var scatter = new Highcharts.Chart(op);
        });
    }
};

