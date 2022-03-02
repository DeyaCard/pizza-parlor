'strict mode';

//Business Logic

//constructor:
function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

PizzaOrder.prototype.addSize = function(pieSize) {
  this.size.push(pieSize);
}

PizzaOrder.prototype.addToppings = function(toppings) {
  this.toppings += 1;
}

PizzaOrder.prototype.pizzaPrice = function() {
  this.price = 0;
  for(let i = 0; i < this.toppings.length; i ++) {
    this.price += 1.00;
  }if(this.size === 'small') {
    this.price += 10.00;
  }else if(this.size === 'medium') {
    this.price += 15.00;
  }else {
    this.price += 20.00;
  }
  return this.price;
}


//UI Logic

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
      event.preventDefault();
    let toppings = [];
    let size = $("#pizzaSize").val();
    $('input[name="ingredient"]:checked').each(function() {
      toppings.push(this.value);
    });
    
    let pizzaOrder = new PizzaOrder(size, toppings);
    let totalPrice = pizzaOrder.pizzaPrice();
    $(".total-order").text(pizzaOrder);
    $(".total-price").text(totalPrice);
  });
});





