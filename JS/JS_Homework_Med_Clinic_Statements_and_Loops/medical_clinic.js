/**
 * todo: Create variables to gather patient information
 * todo: Create a more accurate computation of patient age using patient birth month and year
 * todo: Print the the accurate age using Loop and Statements
 * @param: birth_month; 
 * @param: current_month;
 * @param: current_year;
 * @param: birth_year;
 * @param: current_year;
 * @param: age;
 */

const birth_year = 1989;
let current_year = new Date().getFullYear();
    current_year -= 1;
let birth_month = 5;
let current_month = new Date().getMonth();
let age = current_year - birth_year;

if (birth_month <= current_month) {
    age++;
    console.log(`Patient's Accurate age: ${age}`);
}

console.log(`Patient's age: ${age}`);


