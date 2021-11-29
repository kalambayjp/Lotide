const assert = require('chai').assert;
const eqArray = require('../eqArrays');

describe('eqArray()', () =>{
  it('should return true for arrays [1,2,3] and [1,2,3]', () => {
    assert.isTrue(eqArray([1,2,3], [1,2,3]))
  });

  it('should return false for arrays [1,2,3] and [1,2,3,4]', () => {
    assert.isFalse(eqArray([1,2,3], [1,2,3,4]));
  });
});