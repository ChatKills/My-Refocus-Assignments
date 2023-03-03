// Task 1. Design a bank application

// Create a feature for a bank app that allows users to do 3 things: 
// 1. Check their balance 
// 2. Withdraw money 
// 3. Deposit money. 
// It is forbidden to manually modify the balance. Users can only do it using the 3 rules mentioned above.

function createBankAccount(name) {
    let balance = 0;
    console.log(`Congratulations ${name}! You took your first steps in creating your bank account!`)
        function depositAmount(amount){
            balance += amount;
                console.log(`You deposited P ${amount}.00 in your account.`);
    }        
        function withdrawAmount (amount){
                if (balance === 0 || amount > balance){
                    console.log(`You tried to withdraw P ${amount}.00 from your account but failed because your current balance is only P ${balance}.00`);
                    return;
        }
                else
                    console.log(`You withdrew P ${amount}.00 from your account. Your current balance is P ${balance - amount}.00`);
    }
        function getBalance (){
            console.log(`Your current balance is P ${balance}.00`);
            return balance;
           
    }    
    return {
        getBalance,
        depositAmount,
        withdrawAmount
    }
}

const bankAccount = createBankAccount('Marc');
bankAccount.depositAmount(1000);
bankAccount.withdrawAmount(1500);
bankAccount.getBalance();

