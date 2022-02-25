# Pizza Parlor

A web application that transforms user inputted numbers into special worded messages. This is an exercise using arrays and looping.

## By Deya Card

### Technologies used:

* Bootstrap
* CSS
* HTML
* JavaScript
* jQuery


### Setup/Installation Requirements:

* Clone or download this repository onto your desktop
https://github.com/DeyaCard/pizza-parlor
* Navigate to top-level of directory
* Open index.html in the browser of your choice


### Tests:


#### Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size."
Code: const myPizza = new Pizza(["pepperoni", "pineapple"], "large");
Expected Output: Pizza { toppings: ["pepperoni", "pineapple"], size: "large" }

#### Describe: totalCost()

Test: "It should calculate the total cost of a 'small' pizza"
Code: let myPizza = new Pizza([""]), "small"); pizzaSize.totalCost();
Expected Output: 10.00

Test: "It should add 1.00 per additional topping to total cost of a small pizza"
Code: let myPizza = new Pizza(["extra cheese"], "small"); myPizza.totalCost();
Expected Output: 11.00







### Known Bugs:
* No known issues at time of publishing.


### License: 
* MIT

Copyright (c) 2022 Deya Card

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.