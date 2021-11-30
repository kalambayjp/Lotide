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

module.exports = countLetters;