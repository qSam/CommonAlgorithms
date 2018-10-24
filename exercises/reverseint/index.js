// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  var checkSign = Math.sign(n);
  var reverse = n
    .toString()
    .split('')
    .reverse()
    .join('');

  if (checkSign == 1 || checkSign == 0) {
    return parseInt(reverse);
  } else {
    var revNeg = reverse.substring(0, reverse.length - 1);
    return parseInt(revNeg) - parseInt(revNeg) * 2;
  }
}

module.exports = reverseInt;
