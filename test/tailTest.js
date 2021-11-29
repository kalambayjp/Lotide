const assert = require('chai').assert;
const tail = require('../tail');

describe('tail()', () => {
  it(`should return 'ello' from a string of 'hello'`, () => {
    assert.strictEqual(tail('hello'), 'ello');
  })
});