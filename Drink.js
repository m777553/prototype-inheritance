"use strict";

var AbstractItem = require("./AbstractItem").AbstractItem;

function Drink(type) {
    this._type = type;
}

Drink.prototype = new AbstractItem();

Drink.TYPE = {
    COLA: {
        name: "cola",
        price: 50,
        calories: 40,
    },
    COFFEE: {
        name: "coffee",
        price: 80,
        calories: 20,
    },
};

module.exports = {
    Drink: Drink,
};
