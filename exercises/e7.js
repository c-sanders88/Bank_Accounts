// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  // Your code goes here...
  let accountsWithPositiveBalance = [];
  
  for (let i = 0; i < array.length; i++) {
    const account = array[i];
    if (account.balance > 0) {
      accountsWithPositiveBalance.push(account);
    }
  }
  
  let lowestBalanceAccount = accountsWithPositiveBalance[0];
  for (let i = 1; i < accountsWithPositiveBalance.length; i++) {
    const account = accountsWithPositiveBalance[i];
    if (account.balance < lowestBalanceAccount.balance) {
      lowestBalanceAccount = account;
    }
  }
  
  return [lowestBalanceAccount];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
