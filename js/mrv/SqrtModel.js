var SqrtModel = {
    idProperty: 'Organism',
    fields: [
		{ name: 'Organism' },
		{ name: 'Intercept' },
        { name: 'temp' },
        { name: 'beef' },
        { name: 'Cheese' },
        { name: 'Desert' },
        { name: 'Egg' },
        { name: 'Meat_other' },
        { name: 'Milk' },
        { name: 'Othermix' },
        { name: 'Pork' },
        { name: 'Poultry' },
        { name: 'Produce' },
        { name: 'Sausage' },
        { name: 'Seafood' },
        { name: 'water' },
        { name: 'Bread' },
        { name: 'Dairy_other' },
        { name: 'Beverage' },
        { name: 'Infant_food' },
	],
    bfParam: 0.0,
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
    setFoodType: function (foodType) {
        this.bfParam = this.data[foodType];
    },
    getMyuMax: function (temp, ph, aw) {
        var data = this.data;
        var spec_rate = Math.pow(data.Intercept + data.temp * temp + this.bfParam, 2.0) / Math.log(10) / Math.LOG10E;
        return spec_rate;
    }
};

/*
$.ajax({
    url: 'data/sqrtmodel.json',
    success: function (data) {
        SqrtModel.dataSource = data;
        SqrtModel.setOrganismType("As");
        SqrtModel.setFoodType("Beef");
    }
});
*/
SqrtModel.dataSource = [{ "Beverage": null, "Bread": null, "Cheese": null, "Dairy_other": null, "Dessert": null, "Egg": -0.215329, "Infant_food": null, "Intercept": 0.136586, "Meat_other": -0.073057, "Milk": 0.197976, "Organism": "Ah", "Othermix": null, "Pork": -0.082795, "Poultry": -0.010291, "Produce": -0.071833, "Sausage": null, "Seafood": -0.021956, "beef": 0, "temp": 0.022068, "water": -0.235541 }, { "Beverage": null, "Bread": null, "Cheese": 0.127981, "Dairy_other": 0.1075, "Dessert": 0.162645, "Egg": null, "Infant_food": 0.613232, "Intercept": -0.178266, "Meat_other": 0.225894, "Milk": 0.238788, "Organism": "Bc", "Othermix": 0.235301, "Pork": null, "Poultry": 0.147874, "Produce": 0.155148, "Sausage": 0.105246, "Seafood": 0.186421, "beef": 0, "temp": 0.025059, "water": null }, { "Beverage": null, "Bread": null, "Cheese": null, "Dairy_other": null, "Dessert": null, "Egg": null, "Infant_food": null, "Intercept": 0.302611, "Meat_other": 0.074907, "Milk": null, "Organism": "Bl", "Othermix": -0.123377, "Pork": null, "Poultry": null, "Produce": 0.080857, "Sausage": null, "Seafood": null, "beef": 0, "temp": 0.011612, "water": null }, { "Beverage": null, "Bread": null, "Cheese": null, "Dairy_other": null, "Dessert": -0.028436, "Egg": null, "Infant_food": null, "Intercept": 0.193211, "Meat_other": 0.015567, "Milk": null, "Organism": "Bs", "Othermix": -0.03465, "Pork": null, "Poultry": null, "Produce": null, "Sausage": null, "Seafood": null, "beef": 0, "temp": 0.011638, "water": null }, { "Beverage": null, "Bread": null, "Cheese": null, "Dairy_other": null, "Dessert": null, "Egg": null, "Infant_food": null, "Intercept": 0.174191, "Meat_other": 0.030262, "Milk": null, "Organism": "Bt", "Othermix": 0.193494, "Pork": -0.05853, "Poultry": -0.070849, "Produce": null, "Sausage": 0.034113, "Seafood": -0.10286, "beef": 0, "temp": 0.018209, "water": null }, { "Beverage": null, "Bread": null, "Cheese": null, "Dairy_other": null, "Dessert": null, "Egg": null, "Infant_food": null, "Intercept": 0.080084, "Meat_other": null, "Milk": null, "Organism": "Cbn", "Othermix": null, "Pork": null, "Poultry": null, "Produce": 0.028903, "Sausage": null, "Seafood": 0.175368, "beef": 0, "temp": 0.011693, "water": null }, { "Beverage": null, "Bread": null, "Cheese": null, "Dairy_other": null, "Dessert": null, "Egg": null, "Infant_food": null, "Intercept": -0.306261, "Meat_other": null, "Milk": null, "Organism": "Cbp", "Othermix": null, "Pork": null, "Poultry": null, "Produce": null, "Sausage": null, "Seafood": null, "beef": 0, "temp": 0.033472, "water": null }, { "Beverage": null, "Bread": null, "Cheese": null, "Dairy_other": null, "Dessert": null, "Egg": null, "Infant_food": null, "Intercept": -0.110265, "Meat_other": null, "Milk": null, "Organism": "Cp", "Othermix": null, "Pork": 0.107203, "Poultry": 0.156184, "Produce": 0.311007, "Sausage": 0.109347, "Seafood": -0.099554, "beef": 0, "temp": 0.021838, "water": null }, { "Beverage": null, "Bread": null, "Cheese": -0.0836335, "Dairy_other": 0.024936, "Dessert": null, "Egg": 0.1951076, "Infant_food": null, "Intercept": -0.0564827, "Meat_other": 0.1553721, "Milk": -0.0674003, "Organism": "Ec", "Othermix": -0.1453422, "Pork": -0.1515717, "Poultry": -0.0762883, "Produce": -0.1904552, "Sausage": null, "Seafood": -0.2777183, "beef": 0, "temp": 0.0315038, "water": null }, { "Beverage": null, "Bread": null, "Cheese": -0.165226, "Dairy_other": null, "Dessert": null, "Egg": null, "Infant_food": null, "Intercept": 0.216747, "Meat_other": null, "Milk": null, "Organism": "Ent", "Othermix": null, "Pork": -0.112015, "Poultry": -0.103313, "Produce": null, "Sausage": null, "Seafood": -0.12933, "beef": 0, "temp": 0.01741, "water": null }, { "Beverage": null, "Bread": null, "Cheese": null, "Dairy_other": null, "Dessert": null, "Egg": null, "Infant_food": null, "Intercept": 0.218026, "Meat_other": -0.22963, "Milk": -0.007793, "Organism": "Lab", "Othermix": -0.176997, "Pork": -0.130566, "Poultry": -0.114249, "Produce": -0.180402, "Sausage": -0.179879, "Seafood": -0.150807, "beef": 0, "temp": 0.014794, "water": null }, { "Beverage": null, "Bread": null, "Cheese": -0.1088256, "Dairy_other": -0.1960092, "Dessert": 0.0029414, "Egg": -0.0533019, "Infant_food": null, "Intercept": 0.0765458, "Meat_other": 0.0136008, "Milk": 0.0344307, "Organism": "Lm", "Othermix": -0.0007534, "Pork": -0.0428223, "Poultry": -0.02212, "Produce": -0.0524501, "Sausage": -0.0941386, "Seafood": -0.0582507, "beef": 0, "temp": 0.0184186, "water": null }, { "Beverage": null, "Bread": null, "Cheese": null, "Dairy_other": null, "Dessert": null, "Egg": null, "Infant_food": null, "Intercept": 0.189808, "Meat_other": null, "Milk": 0.097219, "Organism": "Ps", "Othermix": null, "Pork": -0.066927, "Poultry": -0.050253, "Produce": null, "Sausage": null, "Seafood": -0.086039, "beef": 0, "temp": 0.011328, "water": null }, { "Beverage": null, "Bread": null, "Cheese": 0.0046928, "Dairy_other": null, "Dessert": 0.0676265, "Egg": 0.2034677, "Infant_food": null, "Intercept": -0.0764573, "Meat_other": -0.1732643, "Milk": 0.1237391, "Organism": "Sa", "Othermix": -0.0522395, "Pork": -0.0108484, "Poultry": -0.0173521, "Produce": -0.1382643, "Sausage": 0.0007307, "Seafood": 0.0270854, "beef": 0, "temp": 0.0260831, "water": null }, { "Beverage": null, "Bread": null, "Cheese": null, "Dairy_other": null, "Dessert": null, "Egg": null, "Infant_food": null, "Intercept": -0.237924, "Meat_other": null, "Milk": 0.019305, "Organism": "Sf", "Othermix": -0.433304, "Pork": null, "Poultry": 0.041253, "Produce": -0.078301, "Sausage": null, "Seafood": -0.020148, "beef": 0, "temp": 0.039276, "water": -0.351778 }, { "Beverage": null, "Bread": null, "Cheese": null, "Dairy_other": null, "Dessert": null, "Egg": null, "Infant_food": null, "Intercept": 0.132947, "Meat_other": null, "Milk": null, "Organism": "Sp", "Othermix": null, "Pork": null, "Poultry": null, "Produce": null, "Sausage": null, "Seafood": null, "beef": 0, "temp": 0.013195, "water": null }, { "Beverage": -0.5535051, "Bread": null, "Cheese": -0.16239, "Dairy_other": -0.1067254, "Dessert": -0.091635, "Egg": -0.2189247, "Infant_food": -0.0053236, "Intercept": 0.0939914, "Meat_other": -0.028403, "Milk": 0.0921366, "Organism": "Ss", "Othermix": -0.1397499, "Pork": -0.125382, "Poultry": -0.0713136, "Produce": -0.2008946, "Sausage": -0.147801, "Seafood": -0.1138217, "beef": 0, "temp": 0.0222624, "water": -0.3912965 }, { "Beverage": null, "Bread": null, "Cheese": null, "Dairy_other": null, "Dessert": null, "Egg": null, "Infant_food": null, "Intercept": 0.31954, "Meat_other": null, "Milk": null, "Organism": "Sy", "Othermix": null, "Pork": -0.26214, "Poultry": null, "Produce": null, "Sausage": null, "Seafood": -0.22968, "beef": 0, "temp": 0.01242, "water": null }, { "Beverage": null, "Bread": null, "Cheese": null, "Dairy_other": null, "Dessert": null, "Egg": null, "Infant_food": null, "Intercept": 0.1706, "Meat_other": -0.15817, "Milk": 0.17082, "Organism": "Ta", "Othermix": null, "Pork": -0.07896, "Poultry": -0.08463, "Produce": null, "Sausage": null, "Seafood": -0.06164, "beef": 0, "temp": 0.01225, "water": null }, { "Beverage": null, "Bread": null, "Cheese": 0.025473, "Dairy_other": 0.160351, "Dessert": null, "Egg": -0.072488, "Infant_food": null, "Intercept": 0.096678, "Meat_other": -0.099147, "Milk": 0.010455, "Organism": "Ye", "Othermix": -0.040279, "Pork": -0.113191, "Poultry": -0.051798, "Produce": 0.148458, "Sausage": -0.077779, "Seafood": 0.028937, "beef": 0, "temp": 0.02393, "water": null}];
SqrtModel.setOrganismType("Ah");
SqrtModel.setFoodType("beef");

	