/* 
    todo : Create a loyalty program
    todo : Greet customers
    todo : Show current number of points they have
    todo : Show them their receipt
    todo : Show them the NEW numbers they have
    @param : customer
    @param : points
    @param : cart
    @param : total_bill
*/

let customer = {
    customer_name : "Johnny Manggo",
    points : 12300,
    cart : [
        {
            item: "Shampoo",
            quantity: 2,
            price_$: 3
        },
        {
            item: "Soap",
            quantity: 2,
            price_$: 2
        },
        {
            item: "Toothpaste",
            quantity: 1,
            price_$: 3
        }
    ]
}

console.log(`Hi ${customer.customer_name}! We are happy to see you today.`);
console.log(`Your current points are ${customer.points}.`)

let total_bill = 0;

console.log(`Purchased Items:`);

for (let i = 0; i < customer.cart.length; i++) {
    price = customer.cart[i].quantity * customer.cart[i].price_$;
    console.log(`${customer.cart[i].quantity}x ${customer.cart[i].item} ---- $ ${price.toFixed(2)}`);
    total_bill = total_bill + price;
    customer.points += customer.cart[i].quantity++
}
console.log(`Total Bill : $ ${total_bill.toFixed(2)}`);
console.log(`New Current Points : ${customer.points}`);




// customer.cart.forEach(element => {
//     payment = element.quantity * element.price_$;
//     console.log(`${element.quantity}X ${element.item} ---- $ ${payment}.00`);
//     total_bill += payment
    
// },
    
//     console.log(`Total Bill : $ ${total_bill}.00`)
// );




