// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const polybiusSquare = { // Creating the square as a grid to access
      1: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'},
      2: { 1: 'f', 2: 'g', 3: 'h', 4: 'i/j', 5: 'k'},
      3: { 1: 'l', 2: 'm', 3: 'n', 4: 'o', 5: 'p'},
      4: { 1: 'q', 2: 'r', 3: 's', 4: 't', 5: 'u'},
      5: { 1: 'v', 2: 'w', 3: 'x', 4: 'y', 5: 'z'},
    };

    
  // Convert input string to lowercase and split it into an array of characters
  const message = input.toLowerCase().split('');
  // Remove spaces from the array of characters
  const messageNoSpaces = message.filter(remove => remove != ' '); 
  
  // If the function is in decryption mode and the length of the message array without spaces is odd, return false
  if(!encode){
    let decodeString = '';
    if(messageNoSpaces.length % 2 != 0) return false;
    // Loop through the message array by 2
    for(let i = 0; i < message.length; i += 2){
      // If the current character is a space we should add a space to the decoded string and decrement the i to make up for the skipped character
      if(message[i] === ' '){
        decodeString += ' ';
        i--;
      }else{ 
        // Use the current and next characters as keys to look up the corresponding letter in the square and add it to the string
        decodeString += polybiusSquare[message[i + 1]][message[i]]; 
      }
    }
    // Return the decoded string
    return decodeString;
  }else{
    // Create an array to hold the encrypted message
    const encryption = [];
    // Loop through each character in the message
    for(let letter of message){
      // If the current character is a space, add a space to the encrypted message array
      if(letter === ' '){ encryption.push(' '); }
      // Loop through each row and column in the square to find the row and column that the current character belongs to
      for(let p = 1; p < 6; p++){
        for(let i = 1; i < 6; i++){
          if(polybiusSquare[p][i].includes(letter)){
            // Add the row and column numbers to the encrypted message array
            encryption.push(i);
            encryption.push(p);
          } 
        }
      }
    }
    // Join the encrypted message array into a string and return it
    return encryption.join('');
  }
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
