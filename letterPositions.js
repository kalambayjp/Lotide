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

module.exports = letterPostions;