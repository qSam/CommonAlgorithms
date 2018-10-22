// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  var splitString = str.split('');
  var reverseArray = splitString.reverse();
  var joinString = reverseArray.join('');

  return joinString;
}

module.exports = reverse;
