"use strict";
function Order() {
    this._items = [];
    this._isPaid = false;
}

//Добавить блюда в заказ: одно или несколько

Order.prototype.addItems = function () {
    if (this._isPaid) {
        return "Adding of item was rejected. Order has already paid";
    }
    for (var j = 0; j < arguments.length; j++) {
        this._items.push(arguments[j]);
    }
};

//Удалить блюдо

Order.prototype.deleteItem = function (item) {
    if (this._isPaid) {
        console.log("Deleting of item was rejected. Order has already paid");
        return;
    }
    var deletedItemIndex = this._items.indexOf(item, 0);
    if (deletedItemIndex === -1) {
        console.log("You haven't this position in your order");
    } else {
        this._items.splice(deletedItemIndex, 1);
    }
};

//Вывести сделанный заказ

Order.prototype.getItems = function () {
    if (this._items.length === 0) {
        return "Your order is empty";
    }
    var order = [];
    for (var index = 0; index < this._items.length; index++) {
        order.push(index + 1 + ") " + this._items[index].getName());
    }
    return order.join("\n");
};

//Оплатить

Order.prototype.pay = function () {
    return (this._isPaid = true);
};

//Вычислить стоимость заказа

Order.prototype.calculateTotalPrice = function () {
    if (this._items.length === 0) {
        console.log("Your order is empty. No money to pay");
        return 0;
    }
    var totalPrice = 0;
    for (var i = 0; i < this._items.length; i++) {
        totalPrice += this._items[i].calculatePrice();
    }
    return totalPrice;
};

//Вычислить калорийность заказа

Order.prototype.calculateTotalCalories = function () {
    if (this._items.length === 0) {
        console.log("Your order is empty.  Zero callories");
        return 0;
    }
    var totalCalories = 0;
    for (var i = 0; i < this._items.length; i++) {
        totalCalories += this._items[i].calculateCalories();
    }
    return totalCalories;
};

module.exports = {
    Order: Order,
};
