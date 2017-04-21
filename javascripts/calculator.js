console.log("Party");
var number1;
var number2;
var ouputNumber = document.getElementById("output");
var addButt = document.getElementById("add").addEventListener("click", adding);
var subButt = document.getElementById("sub").addEventListener("click", subtract);
var multiplyButt = document.getElementById("multiply").addEventListener("click", multiply);
var divideButt = document.getElementById("divide").addEventListener("click", divide);
var clearButt = document.getElementById("clear").addEventListener("click", clear);

function getNumbers () {
    number1 = parseInt(document.getElementById("num1").value);
    number2 = parseInt(document.getElementById("num2").value);
    console.log("something is working");
}

function clear() {
    location.reload();
}


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply (num1, num2) {
    getNumbers();
    ouputNumber.innerHTML = number1 * number2;
//    return num1 * num2


}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function adding (num1, num2) {
    getNumbers();
    ouputNumber.innerHTML = number1 + number2;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract (num1, num2) {
    getNumbers();
    ouputNumber.innerHTML = number1 - number2;
//    return num1 - num2
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divide (num1, num2) {
    getNumbers();
    ouputNumber.innerHTML = number1 / number2;
//    return num1 / num2
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function numberAndFunction (num1, num2, something) {
    getNumbers();
    return something(num1, num1)
}

//var buttons = document.getElementsByClassName("buttons");
////console.log("anything", buttons);
//    for (var i = 0; i < buttons.length; i++) {
//
//        buttons.item(i).addEventListener("click", getNumbers);
//        console.log(buttons.item(i),"testing again");
//    }
//console.log("buttons", buttons.item(i));
