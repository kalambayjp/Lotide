const assert = require('chai').assert;
const assertEqualArray = require('../assertArraysEqual');

describe('assertEqualArray()', () => {

  it('should return true with arrays [1,2] and [1,2]', () => {
    assert.isTrue(assertEqualArray([1,2], [1,2]));
  });

  it('should return false with arrays [1] and [1,2,3]', () => {
    assert.isFalse(assertEqualArray([1], [1,2,3]))
  });
});