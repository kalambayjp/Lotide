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

module.exports = middle;
