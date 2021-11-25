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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));


