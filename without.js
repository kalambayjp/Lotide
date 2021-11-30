const without = function(startArr, toRemoveArr) {
  let filteredArray = [];
  for (let item of startArr) {
    if (!toRemoveArr.includes(item)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
};

module.exports = without;