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



