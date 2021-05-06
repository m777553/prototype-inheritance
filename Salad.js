"use strict";

var AbstractItem = require("./AbstractItem").AbstractItem;
var DEFAULT_WEIGHT_OF_ITEM = 100;

function Salad(type, weight) {
    if (!type) {
        throw new Error("Choose your salad");
    }
    this._weight = weight || DEFAULT_WEIGHT_OF_ITEM;
    this._type = type;
}
Salad.prototype = new AbstractItem();

Salad.TYPE = {
    CAESAR: {
        name: "caeser",
        pricePerHundredGrams: 100,
        caloriesPerHundredGrams: 20,
    },
    OLIVIE: {
        name: "olivie",
        pricePerHundredGrams: 50,
        caloriesPerHundredGrams: 80,
    },
};
//возвращает название с указанием веса
Salad.prototype.getName = function () {
    return (
        this._weight + " gramms of " + AbstractItem.prototype.getName.call(this)
    );
};
//возвращает калорийность с учётом веса
Salad.prototype.calculateCalories = function () {
    var caloriesInItem =
    (this._weight / 100) * this._type.caloriesPerHundredGrams;
    return caloriesInItem;
};

//возвращает стоимость с учётом веса
Salad.prototype.calculatePrice = function () {
    var priceOfItem = (this._weight / 100) * this._type.pricePerHundredGrams;
    return priceOfItem;
};

module.exports = {
    Salad: Salad,
};
