const bankAccount = {
    bankAccountId: 55546456,
    accountNumber: 55546423,
    credentials: [ {username :'ChickenChaser',password: 'duckduckbro123', pin: 12345678} ],
    balance: 5000,
    createdAt: 'Jan. 05, 2023'
}

const myBankAccount = {
    bankAccount : bankAccount,
    debitCard : 1234567890123,
    firstName : 'Chicken',
    lastName : 'Soup',
    birthDate : 'Feb. 31, 2023',
    validId : [{typeOfId : 'Passport', idNumber: 01234567}],
    address : 'Wara-Wara Street'
}


//  checks if the username and password are correct and shows the bank account details
function getBankAccountDetails (username, password, pin) 
{
    for (let info of myBankAccount.bankAccount.credentials) 
    {

        if (username === info.username && password === info.password && pin === info.pin) 
        {
            return displayAccountInfo ()
            
        } else {
            console.log('Invalid account input. Try again.')
        }
    }
}

// Display bank account info
    function displayAccountInfo () {
        for (info of myBankAccount.validId) {
            console.log("Account Info.");
            console.log();
            console.log(`Account ID : ${myBankAccount.bankAccount.bankAccountId}`);
            console.log(`Created On : ${myBankAccount.bankAccount.createdAt}`);
            console.log(`Name       : ${myBankAccount.lastName}, ${myBankAccount.firstName}`);
            console.log(`Birthday   : ${myBankAccount.birthDate}`);
            console.log(`Address    : ${myBankAccount.address}`);
            console.log(`Valid ID   : ${info.typeOfId} :  ID Number: ${info.idNumber}`);
            console.log(); 
        }
    }

// Function checks if the username and password are correct and enables getting money from the bank account using the account number

function withdrawMoney (username, password, accNum, amount)
{
    for (let info of myBankAccount.bankAccount.credentials) 
    {
        if (username === info.username && password === info.password && accNum === myBankAccount.bankAccount.accountNumber) 
        {
                if (amount <= myBankAccount.bankAccount.balance){
                    balance = myBankAccount.bankAccount.balance - amount;
                    console.log(`You withdraw P ${amount}.00 from your account and current balance is now P ${balance}.00`);
                } else {
                    console.log(`Hey ${myBankAccount.firstName}! You can't withdraw this amount.`)
                }
            
            
        } else {
            console.log('Invalid account input. Try again.')
        }
    }
}
    function depositMoney (amount, accNum){
    let dMoney = myBankAccount.bankAccount;
        newBal = dMoney.balance + amount;
    if (accNum == myBankAccount.bankAccount.accountNumber){
        console.log(`You deposited P ${amount}.00 to your account. Your new balance is now P${newBal}.00`)
    } else {
        console.log(`Wrong account.`)
    }
}

getBankAccountDetails('ChickenChaser', 'duckduckbro123', 12345678)
withdrawMoney('ChickenChaser', 'duckduckbro123', 55546423, 500)
depositMoney(500,55546423);





