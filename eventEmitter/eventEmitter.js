const PizzaShop = require("./pizzaShop");
const DrinksMachine = require("./drinksMachine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinksMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Baking Pizza! ${size} size with ${topping} toppings`);
  drinkMachine.drinks(size);
});

pizzaShop.order("large", "capsicum");
pizzaShop.displayOrderName();

// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => {
//   console.log(`Baking Pizza! ${size} pizza with ${topping} topping`); //Baking Pizza! Large pizza with capsicum topping
// });

// emitter.on("order-pizza", (size) => {
//   if (size === "Large") console.log(`Serving a complimentary drink `); //Baking Pizza! Large pizza
// });

// console.log("Outer console log");

// emitter.emit("order-pizza", "Large", "capsicum");

// output:
// Outer console log
// Baking Pizza! Large pizza with capsicum topping
// Serving a complimentary drink
