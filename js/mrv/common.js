﻿var Master = {
	Organism: [
		{id:'Ac', name:'Aeromonas caviae', picture:'(Ah)Aeromonas_hydrophila.jpg', title:'<h1>Aeromonas <small> caviae</small></h1>'},
		{id:'Ah', name:'Aeromonas hydrophila', title:'<h1>Aeromonas <small> hydrophila</small></h1>'},
		{id:'As', name:'Aeromonas sobria', title:'<h1>Aeromonas <small> sobria</small></h1>'},
		{id:'Bac', name:'bacillus spoilage bacteria', picture:'(Bac)Bacilli.jpg', title:'<h1>bacillus <small> spoilage bacteria</small></h1>'},
		{id:'Bc', name:'Bacillus cereus', picture:'(Bc)BacillusCereus.jpg', additive:['nitrite'], title:'<h1>Bacillus <small> cereus</small></h1>'},
		{id:'Bl', name:'Bacillus licheniformis', picture:'(Bl)Bacilli.jpg', title:'<h1>Bacillus <small> licheniformis</small></h1>'},
		{id:'Bs', name:'Bacillus subtilis', picture:'(Bs)Bacillus_subtilis.jpg', title:'<h1>Bacillus <small> subtilis</small></h1>'},
		{id:'Bt', name:'Brochothrix thermosphacta', title:'<h1>Brochothrix <small> thermosphacta</small></h1>'},
		{id:'Cbn', name:'Clostridium botulinum (non-prot.)', picture:'(Cbn)C._botulnium.jpg', title:'<h1>Clostridium <small> botulinum (non-prot.)</small></h1>'},
		{id:'Cbp', name:'Clostridium botulinum (prot.)', picture:'(Cbp)C._botulnium.jpg', title:'<h1>Clostridium <small> botulinum (prot.)</small></h1>'},
		{id:'Cj', name:'Campylobacter', picture:'(Cj)Campylobacter.jpg', title:'<h1>Campylobacter</h1>'},
		{id:'Cp', name:'Clostridium perfringens', picture:'(Cp)Clostridium_perfringens.jpg', title:'<h1>Clostridium <small> perfringens</small></h1>'},
		{id:'Ec', name:'Escherichia coli', picture:'(Ec)Ecoli.jpg', additive:['lactic_acid', 'acetic_acid'], title:'<h1>Escherichia <small> coli</small></h1>'},
		{id:'Ent', name:'enterobacteriaceae', picture:'(Ent)Enterobacteriaceae.jpg', title:'<h1>enterobacteriaceae</h1>'},
		{id:'Lab', name:'lactic acid bacteria', picture:'(LAB)Lactic acid bacteria.jpg', title:'<h1>lactic <small> acid bacteria</small></h1>'},
		{id:'Lm', name:'Listeria monocytogenes/innocua', additive:['lactic_acid', 'sorbic_acid', 'acetic_acid', 'nitrite'], picture:'(Lm)Listeria_monocytogenes.jpg', title:'<h1>Listeria <small> monocytogenes/innocua</small></h1>'},
		{id:'Mi', name:'micrococci', picture:'(Mi)Micrococci.png', title:'<h1>micrococci</h1>'},
		{id:'Po', name:'Paenibacillus odorifer', picture:'(Po)Paenibacillus.jpg', title:'<h1>Paenibacillus <small> odorifer</small></h1>'},
		{id:'Pp', name:'Photobacterium phosphoreum', title:'<h1>Photobacterium <small> phosphoreum</small></h1>'},
		{id:'Ps', name:'pseudomonads', picture:'(Ps)Pseudomonas.jpg', title:'<h1>pseudomonads</h1>'},
		{id:'Psy', name:'psychrotrophic bacteria', picture:'(Psy)psychrotrophic bacteria.jpg', title:'<h1>psychrotrophic <small> bacteria</small></h1>'},
		{id:'Sa', name:'Staphylococcus aureus', picture:'(Sa)Staphylococcus_aureus.jpg', title:'<h1>Staphylococcus <small> aureus</small></h1>'},
		{id:'Sx', name:'Staphylococcus xylosus', title:'<h1>Staphylococcus <small> xylosus</small></h1>'},
		{id:'Sf', name:'Shigella flexneri and relatives', picture:'(Sf)Shigella_flexneri.jpg', title:'<h1>Shigella <small> flexneri and relatives</small></h1>'},
		{id:'Ss', name:'salmonella spp', picture:'(Ss)Salmonelle.jpg', title:'<h1>salmonella <small> spp</small></h1>'},
		{id:'Ta', name:'aerobic total spoilage bacteria', title:'<h1>aerobic <small> total spoilage bacteria</small></h1>'},
		{id:'Vs', name:'vibrio spp.', icture:'(Vs)Vibrio.jpg', title:'<h1>vibrio <small> spp.</small></h1>'},
		{id:'Ye', name:'Yersinia enterocolitica', title:'<h1>Yersinia <small> enterocolitica</small></h1>'},
		{id:'Sp', name:'Shewanella putrefaciens', picture:'(Sp)Shewanella.png', title:'<h1>Shewanella <small> putrefaciens</small></h1>'},
		{id:'Sy', name:'spoilage yeast', picture:'(Sy)Spoilage yeast.jpg', title:'<h1>spoilage <small> yeast</small></h1>'},
		{id:'yeast', name:'yeast', title:'<h1>yeast</h1>'},
		{id:'Entc', name:'Enterococci', title:'<h1>Enterococci</h1>'},
		{id:'Bp', name:'Bacillus pumilus', title:'<h1>Bacillus <small> pumilus</small></h1>'},
		{id:'Cn_Psy', name:'non-proteolytic psychrotrophic clostridia', title:'<h1>non-proteolytic <small> psychrotrophic clostridia</small></h1>'},
		{id:'Ta_mould', name:'mould', title:'<h1>mould</h1>'},
		{id:'Hb', name:'halophilic bacteria', picture:'(Hb)Halophilic.jpg', title:'<h1>halophilic <small> bacteria</small></h1>'},
		{id:'Ppx', name:'Paenibacillus polymyxa', title:'<h1>Paenibacillus <small> polymyxa</small></h1>'}
	],
    Food: [
        {id: 'culture_medium', name:'Culture medium'},
        {id: 'beef', name:'Beef'},
        {id: 'pork', name:'Pork'},
        {id: 'chicken', name:'Chicken'},
    ],
    Additive: [
        {id:'lactic_acid', name:'Lactic Acid', namejp:'乳酸', 
            datasets:[{picno:9, cons:500, count:100}, {picno:9, cons:1000, count:100},{picno:9, cons:15000, count:100},{picno:9, cons:30000, count:100}], unit:'ppm',
            picture:'images/icons/301px-Lactic-acid-3D-balls.png', 
            description:'Lactic acid, also known as milk acid, is a chemical compound that plays a role in various biochemical processes and was first isolated in 1780 by the Swedish chemist Carl Wilhelm Scheele. Lactic acid is a carboxylic acid with the chemical formula C3H6O3. It has a hydroxyl group adjacent to the carboxyl group, making it an alpha hydroxy acid (AHA).'},
        {id:'sorbic_acid', name:'Sorbic Acid', namejp:'ソルビン酸', 
            datasets:[{picno:9, cons:500, count:100}, {picno:9, cons:1000, count:100},{picno:9, cons:15000, count:100},{picno:9, cons:30000, count:100}], unit:'ppm',
            picture:'images/icons/800px-Sorbic-acid-3D-balls-B.png', description:'Sorbic acid, or 2,4-hexadienoic acid, is a natural organic compound used as a food preservative. It has the chemical formula C6H8O2. It is a colourless solid that is slightly soluble in water and sublimes readily. It was first isolated from the unripe berries of the rowan tree (Sorbus aucuparia), hence its name.'},
        {id:'citric_acid', name:'Citric Acid', namejp:'クエン酸', 
            datasets:[{picno:9, cons:500, count:100}, {picno:9, cons:1000, count:100},{picno:9, cons:15000, count:100},{picno:9, cons:30000, count:100}], unit:'ppm',
            picture:'images/icons/320px-Citric-acid-3D-balls.png', description:'Citric acid is a weak organic acid with the formula C6H8O7. It is a natural preservative/conservative and is also used to add an acidic, or sour, taste to foods and soft drinks. In biochemistry, the conjugate base of citric acid, citrate, is important as an intermediate in the citric acid cycle, which occurs in the metabolism of all aerobic organisms'},
        {id:'acetic_acid', name:'Acetic Acid', namejp:'酢酸', 
            datasets:[{picno:9, cons:500, count:100}, {picno:9, cons:1000, count:100},{picno:9, cons:15000, count:100},{picno:9, cons:30000, count:100}], unit:'ppm',
            picture:'images/icons/311px-Acetic-acid-CRC-GED-3D-balls-B.png', description:'Acetic acid pron.: /əˈsiːtɨk/ (systematically named ethanoic acid pron.: /ˌɛθəˈnoʊɨk/) is an organic compound with the chemical formula CH3CO2H (also written as CH3COOH or C2H4O2). It is a colourless liquid that when undiluted is also called glacial acetic acid. Acetic acid is the main component of vinegar (apart from water; vinegar is roughly 8% acetic acid by volume), and has a distinctive sour taste and pungent smell. Besides its production as household vinegar, it is mainly produced as a precursor to polyvinylacetate and cellulose acetate. Although it is classified as a weak acid, concentrated acetic acid is corrosive and attacks the skin.'},
        {id:'nitrite', name:'Nitrite Acid', namejp:'亜硝酸', 
            datasets:[{picno:9, cons:500, count:100}, {picno:9, cons:1000, count:100},{picno:9, cons:15000, count:100},{picno:9, cons:30000, count:100}], unit:'ppm',
            picture:'images/icons/305px-Nitrite-3D-vdW.png', description:'The nitrite ion, which has the chemical formula NO2−, is a symmetric anion with equal N-O bond lengths and an O-N-O bond angle of approximately 120°.[citation needed] Upon protonation, the unstable weak acid nitrous acid is produced. Nitrite can be oxidized or reduced, with the product somewhat dependent on the oxidizing/reducing agent and its strength. The nitrite ion is an ambidentate ligand, and is known to bond to metal centers in at least five different ways.'},
        {id:'propionic_acid', name:'Propionic Acid', namejp:'プロピオン酸', 
            datasets:[{picno:9, cons:500, count:100}, {picno:9, cons:1000, count:100},{picno:9, cons:15000, count:100},{picno:9, cons:30000, count:100}], unit:'ppm',
            picture:'images/icons/320px-Propionic-acid-3D-balls.png', description:'Propanoic acid (also known as propionic acid from the Greek words protos = "first" and pion = "fat) is a naturally occurring carboxylic acid with chemical formula CH3CH2COOH. It is a clear liquid with a pungent odor. The anion CH3CH2COO− as well as the salts and esters of propanoic acid are known as propanoates (or propionates).'},
        {id:'ascorbic_acid', name:'Ascorbic Acid', namejp:'アスコルビン酸', 
            datasets:[{picno:9, cons:500, count:100}, {picno:9, cons:1000, count:100},{picno:9, cons:15000, count:100},{picno:9, cons:30000, count:100}], unit:'ppm',
            picture:'images/icons/Sample_of_ascorbic_acid.jpg', description:'Ascorbic acid is a naturally occurring organic compound with antioxidant properties. It is a white solid, but impure samples can appear yellowish. It dissolves well in water to give mildly acidic solutions. Ascorbic acid is one form ("vitamer") of vitamin C. It was originally called L-hexuronic acid, but when it was found to have vitamin C activity in animals ("vitamin C" being defined as a vitamin activity, not then a specific substance), the suggestion was made to rename L-hexuronic acid.'},
        {id:'glucose', name:'Glucose Acid', namejp:'グルコース', 
            datasets:[{picno:9, cons:500, count:100}, {picno:9, cons:1000, count:100},{picno:9, cons:15000, count:100},{picno:9, cons:30000, count:100}], unit:'ppm',
            picture:'images/icons/320px-D-glucose-chain-3D-balls.png', description:'Glucose (/ˈɡluːkoʊs/ or /-koʊz/; C6H12O6, also known as D-glucose, dextrose, or grape sugar) is a simple monosaccharide found in plants. It is one of the three dietary monosaccharides, along with fructose and galactose, that are absorbed directly into the bloodstream during digestion. An important carbohydrate in biology, cells use it as the primary source of energy[3] and a metabolic intermediate. '},
        {id:'nacl', name:'NaCl Acid', namejp:'塩化ナトリウム', 
            datasets:[{picno:9, cons:500, count:100}, {picno:9, cons:1000, count:100},{picno:9, cons:15000, count:100},{picno:9, cons:30000, count:100}], unit:'ppm',
            picture:'images/icons/Halit-Kristalle.jpg', description:'Sodium chloride, also known as salt, common salt, table salt or halite, is an ionic compound with the formula NaCl, representing equal proportions of sodium and chloride. Sodium chloride is the salt most responsible for the salinity of the ocean and of the extracellular fluid of many multicellular organisms. As the major ingredient in edible salt, it is commonly used as a condiment and food preservative.'},
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

function hasHistoryApi() {
  return !!(window.history && history.pushState);
}

var Status = {
    Organism: undefined,
    Food: undefined,
    Additive: undefined,
    Cons: undefined
};

var Screen = {
    list: [
        {
            name: 'baclst',
            fragment: 'baclst.html',
            title: '<h1>MRV<small>Microbial Responses Viewer</small></h1>',
            init: function () {
                var getpic = function(v) {
                    if( v.picture == undefined ) return '('+v.id+')'+v.name+'.jpg';
                    return v.picture;
                };
                $.each(Master.Organism, function (i, v) {
                    if(  v.picture != undefined )
                    $('#bacteria-group').append('<a href="#" class="tile image" data-organism="' + v.id + '">'
                    +'    <div class="tile-content">'
                    +'        <img src="images/icons/' + getpic(v) + '" />'
                    +'    </div>'
                    +'    <div class="brand bg-color-blue">'
                    +'        <span class="name">' + v.name + '</span>'
                    +'    </div>'
                    +'</a>');
                });
                $('#bacteria-group > a').click(function () {
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

                if( Status.Organism.additive == undefined ){
                    $('#additive-group').hide();
                }else{
                    $('#additive-group > a').each(function(){
                        var additive = $(this).attr('data-additive');
                        if( $.inArray(additive, Status.Organism.additive) == -1) {
                            $(this).hide();
                        }
                    });
                }
            }
        },
        {
            name: 'cmmodel',
            fragment: 'culturemedium.html',
            title: '<h1>{Food-name}<small>{Organism-name}</small></h1><a href="#" onclick="moveTo(\'foodlst\')" class="back-button big page-back"></a>',
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
                $('#additive-label').text(Status.Additive.namejp);
                $('#additive-image').attr('src', Status.Additive.picture);
                $('#additive-description').html(Status.Additive.description + '(<a href="http://www.wikipedia.com/">Wikipedia</a>)');
                $.ajax({
                    url: 'data/additive/' + Status.Organism.id + '_' + Status.Additive.id + '.JSON',
                    success: function(msg){
                        var response = $.parseJSON(msg);
                        if ( response == null) response = msg;
                        $.each(response.datasets, function (i, v) {
                            $('#dataset-list').append('<a href="#" class="tile image" data-cons="' + v.cons + '"><div class="tile-content">'
                            +'                <img src="images/icons/bac9.jpg" />'
                            +'            </div>'
                            +'            <div class="brand bg-color-pink">'
                            +'                <p class="text"><big>' + v.cons +'</big> ' + Status.Additive.unit + '</p>'
                            +'            </div>'
                            +'            <div class="tile-status">'
                            +'                <div class="badge bg-color-pink">' + v.data.length + '</div>'
                            +'            </div>'
                            +'        </a>');
                        });
                        $('#dataset-list > a').click(function(){
                            var cons = $(this).attr('data-cons');
                            Status.Cons = cons;
                            moveTo('additivemodel');
                        });
                    }
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
                    organismKey: "Ah",
                    axisx: CMAxis_pH,
                    axisy: CMAxis_Temp,
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
            title: '<h1 id="caption">{Additive-name}{Food-name}<small>{Organism-name}</small></h1><a href="#" onclick="moveTo(\'datalist\')" class="back-button big page-back"></a>',
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

