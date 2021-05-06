"use strict";
var AbstractItem = require("./AbstractItem").AbstractItem;

function Hamburger(size, stuffing) {
    if (!size || !stuffing) {
        throw new Error("Choose the size of your hamburger and the stuffing");
    }
    this._size = size;
    this._stuffing = stuffing;
  
}

Hamburger.prototype = new AbstractItem();



Hamburger.SIZE = {
    SMALL: {
        name: "small",
        price: 50,
        calories: 20,
    },
    LARGE: {
        name: "large",
        price: 100,
        calories: 40,
    },
};

Hamburger.STUFFING = {
    CHEESE: {
        name: "cheese",
        price: 10,
        calories: 20,
    },
    SALAD: {
        name: "salad",
        price: 20,
        calories: 5,
    },
    POTATO: {
        name: "potato",
        price: 15,
        calories: 10,
    },
};





//описание размера и состава выбранного бургера
Hamburger.prototype.getName = function () {
    return (this._size.name + " hamburger with " + this._stuffing.name);
};
// возвращает выбранный размер
Hamburger.prototype.getSize = function () {
    return this._size.name;
};
// возвращает выбранный тип начинки
Hamburger.prototype.getStuffing = function () {
    return this._stuffing.name;
};
//меняет тип начинки
Hamburger.prototype.changeStuffing = function (newSuffing) {
    this._stuffing = newSuffing;
  
};
//возвращает калорийность 
Hamburger.prototype.calculateCalories = function () {
    var caloriesInItem = this._size.calories + this._stuffing.calories;
    return caloriesInItem;
};

//возвращает стоимость
Hamburger.prototype.calculatePrice = function () {
    var priceOfItem = this._size.price + this._stuffing.price;
    return priceOfItem;
};

module.exports = {
    Hamburger: Hamburger
};
