const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  return arr1 = arr1.toString() === arr2.toString();
};


const without = function(startArr, toRemoveArr) {
  let filteredArray = [];
  for (let item of startArr) {
    if (!toRemoveArr.includes(item)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
};

