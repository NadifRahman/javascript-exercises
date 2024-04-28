const palindromes = function (aString) {
  let finalStringArray = aString.toLowerCase().split('').filter(letter => 
  (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) || (letter.charCodeAt() >= 48 && letter.charCodeAt() <= 57));

  let finalString = finalStringArray.join('');
    return (finalString === finalStringArray.slice().reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
