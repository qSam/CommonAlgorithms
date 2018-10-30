// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let vowelCounter = 0;
  for (let char of str.toLowerCase()) {
    switch (char) {
      case 'a':
        vowelCounter++;
        break;
      case 'e':
        vowelCounter++;
        break;
      case 'i':
        vowelCounter++;
        break;
      case 'o':
        vowelCounter++;
        break;
      case 'u':
        vowelCounter++;
        break;
    }
  }
  return vowelCounter;
}

module.exports = vowels;
