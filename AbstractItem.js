"use strict";

function AbstractItem() {
    this._type=null;
}

AbstractItem.prototype.getName = function () {
    return this._type.name;
};
AbstractItem.prototype.calculateCalories = function () {
    return this._type.calories;
};
AbstractItem.prototype.calculatePrice = function () {
    return this._type.price;
};

module.exports = {
    AbstractItem: AbstractItem,
};
