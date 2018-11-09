console.log('hello world');

let str = 'abcd';
let results = [];

console.log('I am here');

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < str.length - i; j++) {
    results.push(str.substring(i, j + i + 1));
  }
}

for (let element of results) {
  console.log(element);
}
