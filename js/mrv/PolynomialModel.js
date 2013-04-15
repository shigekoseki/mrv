var PolynomialModel = {
    idProperty: 'Organism',
    fields: ['Organism', 'Intercept', 'temp', 'aw', 'pH', 'temp_pH', 'temp_aw',
			'pH_aw', 'temp_temp', 'pH_pH', 'aw_aw'],
    find: function (organismType) {
        var ret = undefined;
        $.each(this.dataSource, function (i, v) {
            if (v.Organism == organismType) {
                ret = v;
                return false;
            }
        });
        return ret;
    },
    setOrganismType: function (organismType) {
        this.data = this.find(organismType);
        console.log(this.data);
    },
    getMyuMax: function (temp, ph, aw) {
        var sqrt_one_minus_aw = Math.sqrt(1.0 - aw);
        var data = this.data;
        var spec_rate = Math.exp(
                	(data.Intercept) +
                	(data.temp) * temp +
                	(data.aw) * sqrt_one_minus_aw +
                	(data.pH) * ph +
                	(data.temp_pH) * temp * ph +
                	(data.temp_aw) * temp * sqrt_one_minus_aw +
                	(data.pH_aw) * ph * sqrt_one_minus_aw +
                	(data.temp_temp) * temp * temp +
                	(data.pH_pH) * ph * ph +
                	(data.aw_aw) * sqrt_one_minus_aw * sqrt_one_minus_aw);
        return spec_rate;
    }
};

PolynomialModel.dataSource = [{"Intercept":-15.750617,"Organism":"Ah","aw":-34.09886,"aw_aw":152.6002,"pH":4.1195,"pH_aw":-1.831252,"pH_pH":-0.2833344,"temp":0.2461313,"temp_aw":0.1690833,"temp_pH":-0.0077363,"temp_temp":-0.0035379},{"Intercept":-13.99986,"Organism":"Bc","aw":-6.635482,"aw_aw":-153.0794,"pH":3.04393,"pH_aw":4.055626,"pH_pH":-0.2713709,"temp":0.1552484,"temp_aw":0.5412725,"temp_pH":0.0196256,"temp_temp":-0.0053278},{"Intercept":-5.71218872,"Organism":"Bl","aw":-15.968894,"aw_aw":-101.139915,"pH":0.7473342,"pH_aw":3.26064134,"pH_pH":-0.1791461,"temp":0.2853806,"temp_aw":0.8429889,"temp_pH":0.0354773,"temp_temp":-0.0105987},{"Intercept":-36.8038979,"Organism":"Bs","aw":-31.7234478,"aw_aw":-41.56063,"pH":10.3591061,"pH_aw":2.38858,"pH_pH":-0.802701,"temp":0.4589719,"temp_aw":0.7241878,"temp_pH":-0.0260052,"temp_temp":-0.0058575},{"Intercept":-18.2193451,"Organism":"Bt","aw":9.505114,"aw_aw":-44.1052361,"pH":4.48264027,"pH_aw":-0.4799102,"pH_pH":-0.3302598,"temp":0.1907845,"temp_aw":-0.0499482,"temp_pH":0.0049512,"temp_temp":-0.0047545},{"Intercept":-46.8847542,"Organism":"Cbn","aw":-26.6251564,"aw_aw":-312.8102,"pH":10.7365122,"pH_aw":13.38368,"pH_pH":-0.7734222,"temp":1.58878851,"temp_aw":-0.6615627,"temp_pH":-0.1412273,"temp_temp":-0.0164717},{"Intercept":-22.14607,"Organism":"Cbp","aw":35.24135,"aw_aw":-283.3772,"pH":3.621317,"pH_aw":2.598311,"pH_pH":-0.2930865,"temp":0.5039265,"temp_aw":-0.2879806,"temp_pH":0.007851,"temp_temp":-0.0082596},{"Intercept":-12.42224,"Organism":"Cp","aw":58.57928,"aw_aw":-381.2453,"pH":0.679363,"pH_aw":2.243563,"pH_pH":-0.0512918,"temp":0.3708171,"temp_aw":0.0512178,"temp_pH":-0.000574,"temp_temp":-0.0046283},{"Intercept":-14.4141235,"Organism":"Ec","aw":-28.1379471,"aw_aw":36.6931229,"pH":3.15211558,"pH_aw":2.498858,"pH_pH":-0.2831846,"temp":0.3408665,"temp_aw":-0.3491172,"temp_pH":0.0121858,"temp_temp":-0.0056245},{"Intercept":-8.32238,"Organism":"Ent","aw":-5.53114939,"aw_aw":-27.4776077,"pH":1.53646123,"pH_aw":0.4598333,"pH_pH":-0.108264,"temp":0.2324868,"temp_aw":0.1214015,"temp_pH":-0.0050145,"temp_temp":-0.003555},{"Intercept":-24.6857738,"Organism":"Lab","aw":34.822525,"aw_aw":-89.30404,"pH":5.59900761,"pH_aw":-1.82710886,"pH_pH":-0.3978074,"temp":0.4595629,"temp_aw":-0.312469,"temp_pH":-0.0677737,"temp_temp":0.0036415},{"Intercept":-14.5068159,"Organism":"Lm","aw":7.75342,"aw_aw":-17.2597237,"pH":2.65006781,"pH_aw":-1.31244671,"pH_pH":-0.1605414,"temp":0.1999349,"temp_aw":-0.0363209,"temp_pH":-0.0017411,"temp_temp":-0.001969},{"Intercept":0.1928479,"Organism":"Ps","aw":-0.7326445,"aw_aw":-192.1041,"pH":-1.085141,"pH_aw":5.90273,"pH_pH":0.034887,"temp":0.1370742,"temp_aw":0.373128,"temp_pH":0.0040127,"temp_temp":-0.0045484},{"Intercept":-20.0267448,"Organism":"Sa","aw":1.35264361,"aw_aw":0.9228854,"pH":3.65660763,"pH_aw":-1.21485746,"pH_pH":-0.2209253,"temp":0.3148445,"temp_aw":0.0292464,"temp_pH":-0.0043753,"temp_temp":-0.0034794},{"Intercept":-20.67548,"Organism":"Sf","aw":32.83935,"aw_aw":-193.0182,"pH":2.967383,"pH_aw":-0.7242372,"pH_pH":-0.19569,"temp":0.5421654,"temp_aw":0.0299822,"temp_pH":-0.0096175,"temp_temp":-0.0064301},{"Intercept":-11.60779,"Organism":"Ss","aw":12.80756,"aw_aw":-126.5685,"pH":1.144197,"pH_aw":1.290339,"pH_pH":-0.0775332,"temp":0.4815149,"temp_aw":0.0804838,"temp_pH":-0.0062527,"temp_temp":-0.0072747},{"Intercept":-8.004418,"Organism":"Ye","aw":-8.30257,"aw_aw":-111.0576,"pH":1.424376,"pH_aw":3.522914,"pH_pH":-0.1241787,"temp":0.1154363,"temp_aw":0.2260239,"temp_pH":-0.0042668,"temp_temp":-0.0001775}];
PolynomialModel.setOrganismType("Ah");
