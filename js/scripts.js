'strict mode';

//Business Logic

function PizzaOrder(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

PizzaOrder.prototype.addSize = function() {
  this.size = 0;
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
}


//UI Logic

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    $("#submit").click(function() {
    let toppings = new array();
    $('input[name="ingredient"]:checked').each(function() {
      toppings.push(this.value);
    });
    alert("Your order: "+toppings.length+"\n"+"And, it is: "+toppings);

    console.log(toppings);
    let pizzaOrder = new PizzaOrder();
    let totalPrice = 
    pizzaOrder.addToppings();
    pizzaOrder.addSize();
    pizzaOrder.pizzaCost();

  });
});
});




