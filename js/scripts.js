'strict mode';

//Business Logic

function PizzaOrder(size, toppings, price) {
  this.size = size = [];
  this.toppings = toppings= [];
  this.totalPrice = 0;
}

PizzaOrder.prototype.addToppings = function(toppings) {
  this.toppings += 1;
}

PizzaOrder.prototype.addPizza = function(pizza) {
  pizza.id = this.assignID();
  this.pizzas[pizza.Id] = pizza;
  this.orderTotal += pizza.pizzaCost(pizza.toppings, pizza.size);
}


Pizza.prototype.pizzaCost = function(toppings, size) {
  size = this.size;
  toppings = this.toppings;
  this.totalCost = 0;
  for(let i = o; i < toppings.length; i ++) {
    this.totalCost += 1.00;
  }if(size === 'small') {
    this.totalCost += 10.00;
  }else if(size === 'medium') {
    this.totalCost += 15.00;
  }else {
    this.totalCost += 20.00;
  }
}


//UI Logic

let pizzaOrder = new PizzaOrder();

function displayPizzaOrder(pizzaOrderToDisplay) {
  let 
}

