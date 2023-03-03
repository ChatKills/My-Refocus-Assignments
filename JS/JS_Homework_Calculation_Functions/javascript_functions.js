/* 
    todo : Calculate the Sum
    todo : Calculate the Difference
    todo : Calculate the Product
    todo : Calculate the Quotient
    todo : Create 3 Functions
            * Function to Print all objects data
            * Function to calculate the sum, difference, product and quotient
            * function to update the initial 2 numbers so that calculations can be conducted for any numbers
 */

let obj = {
    num1: 100,
    num2: 50,
    sum: 150,
    difference: 50,
    product: 500,
    quotient: 20
}

/* Function to Show Data */

function showData (obj) {
    console.log("=====================================");
    console.log(`First Number : ${obj.num1}`);
    console.log(`Second Number : ${obj.num2}`);
    console.log(`The sum is : ${obj.sum}`);
    console.log(`The difference is : ${obj.difference}`);
    console.log(`The product is : ${obj.product}`);
    console.log(`The quotient is : ${obj.quotient}`);
}

/* Functions for Calculations */

function add (num1, num2) {
    return num1 + num2;
}
function subtract (num1, num2) {
    return num1 - num2;
}
function multiply (num1, num2) {
    return num1 * num2;
}
function divide (num1, num2) {
    return num1 / num2
}

/* Function to Update Oject Data */
function newSetOfNumbers (num1, num2) {
    obj.num1 = num1;
    obj.num2 = num2;
    obj.sum = add(num1, num2);
    obj.difference = subtract(num1, num2);
    obj.product = multiply(num1, num2);
    obj.quotient = divide(num1, num2);
}

showData(obj);
newSetOfNumbers(200, 10);
showData(obj);
newSetOfNumbers(500, 20);
showData(obj);