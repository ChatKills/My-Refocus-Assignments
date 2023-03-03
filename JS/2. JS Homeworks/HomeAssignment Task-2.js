/* Task 2. Try another way */

/* 
Create a feature for a bank app that allows users to do 3 things: 
1. Check their balance 
2. Withdraw money 
3. Deposit money. 
It is forbidden to manually modify the balance. Users can only do it using the 3 rules mentioned above. 

You cannot withdraw an amount greater than your current balance
*/

// function createBankAccount (name, callback){
//     let balance = 0;
//         function depositAmount(amount){
//             balance += amount;
//                 console.log(`You deposited P ${amount}.00 in your account.`);
//                 console.log(`You new balance is now P ${balance}.00`);
//     }        
//         function withdrawAmount (amount){
//                 if (balance === 0 || amount > balance){
//                     console.log(`You tried to withdraw P ${amount}.00 from your account but failed because your current balance is P only ${balance}.00`);
                    
//         }
//                 else
//                     console.log(`You withdrawn P ${amount}.00 from your account. Your current balance is P ${balance - amount}.00`);
//     }
//     callback (name, balance);   
//     return {
//         callback,
//         depositAmount,
//         withdrawAmount
//     };
// }
// function getBalance(name, balance){
//     console.log(`Hello ${name}! Your current balance is ${balance}.`);
// }

// const bankAccount = createBankAccount('Marc', getBalance);
// bankAccount.depositAmount(10000)
// bankAccount.withdrawAmount(11000)

// function getBankAccountDetails (username, password, pin, callback) {
//     for (info of bankAccount.credentials) {
//         if (username !== info.username || password !== info.password || pin !== info.pin){
//             return console.log("Invalid Input. Please try again.");    
//         }
//         else {
//         displayAccountInfo ();}
//     }
// }



let balance = 0;

function createBankAccount (name, amount, callback){
    console.log(`Hi ${name}! Your account balance is ${balance}.`);
    callback(name, amount);
}

function depositAmount (name, amount){
    balance = balance + amount;
    console.log(`Hey ${name}! Your account balance now is ${balance}`);
}

function withdrawAmount (name, amount){
    if (amount <= balance){
        balance = balance - amount;
        console.log(`Hey ${name}! Your account balance is now ${balance}`)
    }
    else {
        console.log(`Hey ${name}! You can't withdraw this amount.`)
    }
}

createBankAccount("Marc", 1000, depositAmount);
createBankAccount("Marc", 100, withdrawAmount);
createBankAccount("Marc", 100, withdrawAmount);








