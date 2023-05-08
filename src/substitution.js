// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const cipherKeys = {}; // An empty object to pass into later on
    // A check to see if the alphabet meets all conditions we want or else it will return false
    if(!alphabet || alphabet.length != 26 || new Set(alphabet).size != 26) return false;
    let characters = 97; // The character code for lowercase 'a' is 97 in ASCII
  
    // Loop through the alphabet array to generate cipher keys
    for(let i = 0; i <= 25; i++){
      // A check to see if the current alphabet character already exists and if it does it will return false
      if(Object.values(cipherKeys).includes(alphabet[i])){ 
        return false; 
      }
      else{
        // If it doesn't, add the cipher key to the encryptionKeys object using the corresponding lowercase letter as the key
        cipherKeys[String.fromCharCode(characters)] = alphabet[i];
        characters++; // Increment the character code for the next letter
      }
    }
  
    const encryption = input.toLowerCase().split(''); // Convert input to lowercase and split into an array of characters
  
    // Map through the array of characters to encrypt or decrypt them
    {
      return encryption.map(letter => {
        // Loop through the encryption keys object to find the corresponding encrypted or decrypted letter
        for(let normalLetter in cipherKeys){
          let substitute = cipherKeys[normalLetter];
          // If letter is a space it should return back space
          if(letter == " ") return " ";
          // If encoding and letter is the same as normalLetter it should return substitute
          if(encode && letter == normalLetter) return substitute; 
          // If enconde is false and letter matches the substitute it should return NormalLetter
          if(!encode && letter == substitute) return normalLetter;
        }
      }).join(''); // Join the array back into a string
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
