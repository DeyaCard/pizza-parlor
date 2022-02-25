'strict';

//Business Logic


function PizzaOrder() {
  this.pizzas = {};
  this.orderTotal = 0;
  this.pizzaId = 0;
}

PizzaOrder.prototype.assignID = function() {
  this.pizzaId += 1;
  return this.pizzaId;
}

PizzaOrder.prototype.addPizza = function(pizza) {
  pizza.id = this.assignID();
  this.pizzas[pizza.Id] = pizza;
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

let pizzaOrder = new PizzaOrder();

function getToppings() {
  const toppings = [];
  const checkedToppings = $("input:checkbox[name=ingredient]:checked").each(function() {
    toppings.push($(this).val());
  })
  return toppings;
}


function displayOrder(orderToDisplay){
  $("#pizzaOrder").show();
  let pizzasList = $("ul#pizzas");
  let htmlForPizzas = "";
  Object.keys(orderToDisplay.pizzas).forEach(function(key){
    const pizza = orderToDisplay.findPizza(key);
    htmlForPizzas += "<li id=" + pizza.id + ">" + pizza.size + " pizza - $" + pizza.totalCost.toFixed(2) + "</li>";
  });
  pizzasList.html(htmlForPizzas);
}

function showPizza(pizzaId){
  const pizza = pizzaOrder.findPizza(pizzaId);
  $("#show-pizza").toggle();
  $(".toppings").html(pizza.toppings.join(", "));
}

function uncheckIngredients(){
  const checkedToppings = $("input:checkbox[name=ingredient]").each(function(){
    if($("input:checkbox[name=ingredient]").prop('checked', true)){
      $("input:checkbox[name=ingredient]").prop('checked', false);
    }
  })
}

$("ul#pizzas").on('click','li', function(){
  showPizza(this.id);
})

function addPizzaListeners(){
  $("ul#pizzas").on('click','li', function(){
    showPizza(this.id);
  })
  }

$(document).ready(function(){
  addPizzaListeners();
  $(".sizeColumn, .toppingsColumn, button.submit").hide();
  $("form#pizzaForm").submit(function(){
    event.preventDefault();
    const inputtedSize = $("select#pizzaSize option:selected").val();
    const inputtedToppings = getToppings();
    let pizza = new Pizza(inputtedToppings, inputtedSize);
    pizzaOrder.addPizza(pizza);
    displayOrder(pizzaOrder);
    uncheckIngredients();
    $(".orderTotal").text(parseFloat(pizzaOrder.orderTotal).toFixed(2));
  })
})





