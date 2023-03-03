// Task 1. Design a bank application

// Create a feature for a bank app that allows users to do 3 things: 
// 1. Check their balance 
// 2. Withdraw money 
// 3. Deposit money. 
// It is forbidden to manually modify the balance. Users can only do it using the 3 rules mentioned above.

function createBankAccout(name) {
    let balance = 0;
    console.log(`Congratulations ${name}! You took your first steps in creating your bank account!`)
        function depositAmount(amount){
            balance += amount;
                console.log(`You deposited P ${balance}.00 in your account.`)
    }        
        function withdrawAmount (amount){
                if (balance === 0){
                    console.log("You don't have any money to withdraw.")
                    return;
        }
                else if (amount > balance){
                    console.log("You don't have enough money in your account to withdraw that amount of money.")
                    return;
        }
                else
                    console.log(`You withdrawed P ${amount}.00 from your account.`)
    }
        function getBalance (){
            console.log(`Your balance is P ${balance}.00`)
            return balance;
           
            }    
    return {
        getBalance,
        depositAmount,
        withdrawAmount
    }
}

let BankAccount = createBankAccout('Marc');
BankAccount.depositAmount(3000);
BankAccount.withdrawAmount(1500);
BankAccount.getBalance();