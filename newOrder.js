var Order = require("./order").Order,
    Hamburger = require("./Hamburger").Hamburger,
    Drink = require("./Drink").Drink,
    Salad = require("./Salad").Salad;

var newOrder = new Order();

var bigBurgerWithSalad = new Hamburger(
    Hamburger.SIZE.LARGE,
    Hamburger.STUFFING.POTATO
);

bigBurgerWithSalad.calculatePrice();

bigBurgerWithSalad.getStuffing();

bigBurgerWithSalad.changeStuffing(Hamburger.STUFFING.SALAD);

bigBurgerWithSalad.getStuffing();

bigBurgerWithSalad.calculatePrice();

newOrder.addItems(bigBurgerWithSalad);

newOrder.getItems();

console.log(newOrder.getItems());

var olivie = new Salad(Salad.TYPE.OLIVIE);

newOrder.addItems(olivie);
newOrder.addItems(olivie);

console.log(newOrder.getItems());

var cupOfCoffee = new Drink(Drink.TYPE.COFFEE);
newOrder.addItems(cupOfCoffee);

console.log(newOrder.getItems());
console.log("-------------");
console.log(newOrder.calculateTotalPrice());
console.log("-------------");
console.log(newOrder.calculateTotalCalories());
newOrder.deleteItem(olivie);
console.log(newOrder.getItems());
console.log("~~~~~~~~~~~~~");
newOrder.pay();
newOrder.deleteItem(olivie);

console.log("-------------");
console.log(newOrder.calculateTotalPrice());
console.log("-------------");
console.log(newOrder.calculateTotalCalories());

console.log("-------------");

var emptyOrder = new Order();
emptyOrder.addItems(cupOfCoffee, bigBurgerWithSalad);

emptyOrder.deleteItem(olivie);
console.log("-------------");
console.log(emptyOrder.getItems());
console.log("-------------");
console.log(newOrder.calculateTotalPrice());
console.log("-------------");
console.log(newOrder.calculateTotalCalories());

console.log("-------------");
