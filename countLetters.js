const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(InputStr) {
  let endCount = {};
  for (let char of InputStr) {
    if (char !== ' ') {
      if (endCount[char]) {
        endCount[char] += 1;
      } else {
        endCount[char] = 1;
      }
    }
  }
  return endCount;
};