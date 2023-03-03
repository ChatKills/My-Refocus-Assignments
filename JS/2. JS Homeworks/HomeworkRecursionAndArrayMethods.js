/* Task 1 : Find the most used item on the array */
/* Create an algorithm that counts the number of times each element is repeated
and shows the result using the console. */

const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome",
];

const words = arr.reduce((count, string) => {
    count[string] = (count[string] || 0) + 1;
    return count;   
}, {})

// The result should look like this object: { Web Developer': 3, Refocus: 2, Awesome: 1 }
console.log(words)

/* Task 2 :  Reverse the array of invoices */

/* Use array methods to create two recursive functions: 
* insertToBottom, which adds invoices at the bottom of the list
* reverseStack, which reverses the order of the invoices
*/

/* The result of calling the first function should look like this string: 
Invoice 008 Invoice 007 Invoice 006 Invoice 005 Invoice 004 Invoice 003 Invoice 002 Invoice 001
*/

/* The result of calling the second function should look like this string:
Invoice 008 Invoice 007 Invoice 006 Invoice 005 Invoice 004 Invoice 003 Invoice 002 Invoice 001
*/

let InvoiceList = 
[
    "Invoice 008", 
    "Invoice 007",
    "Invoice 006",
    "Invoice 005"
];

function insertToBottom() {
    InvoiceList.push("Invoice 004");
    InvoiceList.push("Invoice 003");
    InvoiceList.push("Invoice 002");
    InvoiceList.push("Invoice 001");
}
function reverseList () {
    InvoiceList.reverse()
}


insertToBottom()
console.log(InvoiceList.join(" "));
reverseList();
console.log(InvoiceList.join(" "));


