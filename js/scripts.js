'strict';

//Business Logic


function PizzaOrder() {
  this.pizzas = {};
  this.orderTotal = 0;
  this.pizzaID = 0;
}

PizzaOrder.prototype.assignID = function() {
  this.pizzaID += 1;
  return this.pizzaID;
}

PizzaOrder.prototype.addPizza = funtion(pizza) {
  pizza.id = this.assignID();
  this.pizzas[pizza.ID] = pizza;
  this.orderTotal += pizza.pizzaCost(pizza.toppings, pizza.size);
}
PizzaOrder.prototype.findPizza = function(id) {
  if(this.pizzas[id]!= undefined) {
    return this.pizzas[id];
  }
  return false;
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.totalCost = 0;
}

Pizza.prototype.pizzaCost = function(toppings, size) {
  size = this.size;
  toppings = this.toppings;
  this.totalCost = 0;
  for(let i = o; i < toppings.length; i ++) {
    this.totalCost += 1.00;
    parseFloat(this.totalCost.toFixed(2));
  }
  if(size === 'small') {
    this.totalCost += 10.00;
    return parseFloat(this.totalCost.toFixed(2));
  }else if(size === 'medium') {
    this.totalCost += 15.00;
    return parseFloat(this.totalCost.toFixed(2));
  }else {
    this.totalCost += 20.00;
    return parseFloat(this.totalCost.toFixed(2));
  }
}



//UI Logic





