const assertEqual = require('../assertEqual');
const tail = require('../tail');

console.log(assertEqual(tail('hello'), 'ello'));