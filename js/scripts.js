// Business Logic //

// naming function to call upon later //
function Pizza(size, toppings, price){
  this.size = size;
  this.toppings = toppings;
  this.price = price;
};
function Order(){
  this.pizzaToppings = toppingsValue;
  this.pizzaSize = size;
  this.pizzaPrice = price
};
  Pizza.prototype.addPeperoni = function(){
    return this.peperoni = true;
  }
  Pizza.prototype.addMushrooms = function(){
    return this.mushrooms = true;
  }
  Pizza.prototype.addSausage = function(){
  return this.addSausage = true;
  }
  Pizza.prototype.addPineapple = function(){
  return this.addPineapple = true;
  }


// User Interface Logic //
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();


    var size = $("#sizSelect option:selected").text();
    var toppings = $("#toppingsSelect option:selected").radio();

    var newPizza = new Pizza(size, toppings, price);
    var totalPrice = sizeValue + toppingsValue;
