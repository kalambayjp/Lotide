# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jkalambay/lotide`

**Require it:**

`const _ = require('@jkalambay/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(input)`: returns the head of an input string
* `tail(input)`: returns the tail of an input string
* `middle(arr)`: returns the center most value(s) of an array
* `eqArrays(arr1, arr2)`: determines equality between two arrays
* `assertArraysEqual(arr1, arr2)`: leverages eqArrays function and logs an assertion to the console
* `assertEqual(actual, expected)`: compares a testing value with expected outcome to determine equality
* `assertObjectsEqual(obj1, obj2)`: determines equality between two objects
* `countLetters(input)`: tracks the count of each character within an input string 
* `countOnly(allItems, itemsToCount)`: tracks the count of specific characters in an input
* `eqObject(obj1, obj2)`: detemines equality between two objects
* `findKey(object, callback)`: scans an object and returns the first key which the callback returns a truthy value
* `findKeyByValue(object, value)`: scans an object and returns a the first key which contains a given value
* `letterPositions(sentence)`: tracks all characters in a string and records their index
* `map(array, callback)`: performs a given callback function on each item in an array
* `takeUntil(array, callback)`: collects each item of an array until the call back function returns a truthy value
* `without(startArr, toRemoveArr)`: filters out values in the startArr that are found in toRemoveArr 