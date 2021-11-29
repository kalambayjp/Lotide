const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


describe('middle()', () => {
  it('returns [3] from an array of [1,2,3,4,5]', () => {
    assert.strictEqual(assertArraysEqual(middle([1,2,3,4,5]),[3]));
  });

  it('returns [2,3] from an array of [1,2,3,4]', () => {
    assert.strictEqual(assertArraysEqual(middle([1,2,3,4]), [2,3]));
  });

  it('should return [1] from an array of [1]', () => {
    assert.strictEqual(assertArraysEqual(middle([1]), [1]));
  });
});










// const middle = require('../middle');

// console.log(assertArraysEqual(middle([1,2,3,4,5]), [3]));
