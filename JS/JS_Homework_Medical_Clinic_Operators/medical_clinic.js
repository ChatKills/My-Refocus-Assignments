/**
 * todo: Create variables to gather patient information
 * todo: Calculate patient age
 * todo: Print the computed age
 * @param: birth_year;
 * @param: current_year;
 * @param: age;
 */

const birth_year = 1989;
let current_year = new Date().getFullYear();

let age = current_year - birth_year;

console.log(`Patient's age: ${age}`)