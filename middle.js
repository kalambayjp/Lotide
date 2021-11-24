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

const middle = function(arr) {
  let middle = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      middle.push(arr[Math.floor((arr.length - 1) / 2)]);
      middle.push(arr[Math.ceil((arr.length - 1) / 2)]);
    } else {
      middle.push(arr[(arr.length - 1) / 2]);
    }
  }
  return middle;
};

console.log(middle([1,2,3,4,5,6]));