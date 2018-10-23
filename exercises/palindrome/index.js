// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  var origString = str;
  var revString = '';
  for (var i = 0; i < str.length; i++) {
    revString = str[i] + revString;
  }
  return origString === revString;
}

module.exports = palindrome;
