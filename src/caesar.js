// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // Check if shift is not provided, is zero, or is outside the range -25 or 25
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
  
    //An array of lowercase alphabet letters
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    // Initialize an empty array
    const result = [];
  
    // Change the input message to lowercase and split it into an array of characters
    input = input.toLowerCase().split('');
  
    // Shift the letters in the message by the specified amount
    if (encode === true) {
      input.forEach((char, index) => {
        // If the character is in the alphabet, find its index and shift it by the specified amount
        if (alphabet.includes(char)) {
          alphabet.find((letter, index) => {
            if (char === letter) {
              let newIndex = index + shift;
              // If the shifted index is less than zero, wrap around to the end of the alphabet
              if (newIndex < 0) { newIndex = newIndex + 26 };
              // If the shifted index is greater than 25, wrap around to the beginning of the alphabet
              if (newIndex > 25) { newIndex = newIndex - 26 };
              // Find the new character corresponding to the shifted index and add it to the result array
              newChar = alphabet[newIndex];
              result.push(newChar);
            }
          })
        } else {
          // If the character is not in the alphabet add it to the result array
          result.push(char);
        }
      });
    } else {
      // If encode is false, shift the letters in the message in the opposite direction
      input.forEach((char, index) => {
        if (alphabet.includes(char)) {
          alphabet.find((letter, index) => {
            if (char === letter) {
              let newIndex = index - shift;
              if (newIndex < 0) { newIndex = newIndex + 26 };
              if (newIndex > 25) { newIndex = newIndex - 26 };
              newChar = alphabet[newIndex];
              result.push(newChar);
            }
          })
        } else {
          result.push(char);
        }
      });
    }

    
    // Join the characters in the result array into a string and return it
    return result.join('');
  }
  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
