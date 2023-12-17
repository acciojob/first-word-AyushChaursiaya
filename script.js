
  function firstWord(str) {
  // Check if the input string is empty or does not contain any space
  if (str === '' || !str.includes(' ')) {
    return str;
  }

  // Extract the first word by finding the index of the first space
  const firstSpaceIndex = str.indexOf(' ');
  const firstWord = str.slice(0, firstSpaceIndex);

  return firstWord;
}

// Examples
console.log(firstWord('see and stop'));    // Output: 'see'
console.log(firstWord(' Hello World!'));    // Output: 'Hello'
console.log(firstWord('12345'));             // Output: '12345'
console.log(firstWord(''));                  // Output: ''