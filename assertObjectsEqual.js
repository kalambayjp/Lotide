const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

const eqArrays = function(arr1, arr2) {
  return arr1 = arr1.toString() === arr2.toString();
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key1 of keys1) {
    if (Array.isArray(object1[key1])) {
      if (!eqArrays(object1[key1], object2[key1])) {
        return false;
      }
    } else if (object1[key1] !== object2[key1]) {
      return false;
    }
  }
  return true;
};


