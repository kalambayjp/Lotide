const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(input) {
  const tail = input.slice(1);
  return tail;
};

const words = ['hello', 'there', 'friend'];
const result = tail(words);

assertEqual(result.length, 2);

console.log(words);









