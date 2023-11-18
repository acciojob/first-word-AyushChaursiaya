const readlineSync = require('readline-sync');

function firstWord(str) {
  if (str.trim() === '' || !str.includes(' ')) {
    return str;
  }
  return str.trim().split(' ')[0];
}

// Get user input using readlineSync
const userInput = readlineSync.question('Enter a string: ');

// Call the firstWord function with user input
const result = firstWord(userInput);

// Display the result
console.log('Result:', result);
