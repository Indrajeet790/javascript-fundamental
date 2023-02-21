// constructor function
function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance = this.balance + amount;
  };
  this.withdraw = (amount) => {
    this.balance = this.balance - amount;
  };
}

// objects
// const samAccount = new BankAccount("vijay", 1000);
// const rakeshAccount = new BankAccount("sam");

// samAccount.deposit(5000);
// samAccount.withdraw(2000);
// rakeshAccount.deposit(7000);

// console.log(samAccount);

// console.log(rakeshAccount);
// console.log(samAccount.accountNumber);

// ###########################
// Dom manipulation
const accounts = [];
//accountForm
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const initialBalance = document.querySelector("#balance");

// DepositForm
const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

// accountForm
accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(customerName.value, +balance.value);
  accounts.push(account);
  console.log(accounts);
});

// DepositForm
depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === accountNumber.value
  );
  account.deposit(+amount.value);
  console.log(accounts);
});
