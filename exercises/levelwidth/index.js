// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let arr = [root, 's'];
  let counter = [0];

  while (arr.length > 1) {
    let node = arr.shift();

    if (node === 's') {
      counter.push(0);
      arr.push('s');
    } else {
      for (let child of node.children) {
        arr.push(child);
      }
      counter[counter.length - 1]++;
    }
  }
  return counter;
}

module.exports = levelWidth;
