const assertEqualArray = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  return arr1 = arr1.toString() === arr2.toString();
};

const letterPostions = function(sentence) {
  let allIndices = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (allIndices[sentence[i]]) {
        allIndices[sentence[i]].push(i);
      } else {
        allIndices[sentence[i]] = [i];
      }
    }
  }
  return allIndices;
};

const test = letterPostions('hello');
console.log(assertEqualArray(test.l, [2,3]));