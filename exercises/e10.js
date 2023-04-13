// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  const result = [];

  for (const account of array) {
    const name = account.name;
    let letterFound = false;
    if (name) {
      const lowerCaseName = name.toLowerCase();
      const lowerCaseLetter = letter.toLowerCase();
      for (let i = 0; i < lowerCaseName.length; i++) {
        if (lowerCaseName[i] === lowerCaseLetter) {
          letterFound = true;
          break;
        }
      }
      if (letterFound) {
        result.push(name);
      }
    }
  }

  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
