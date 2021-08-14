# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWEAR:_ Tis library was published for learning purposes. It is _not_ intended for use in production-grade software. 

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage 

**Install it:**

`npm instal @valera_neg/lotide`

**Require it:**

`const _ = require('@valera_neg/lotide');`

**call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]` 

The following functions are currently impiemented:

*`_.countLetters(...)` : The function take in a sentence (as a string) and then return a count of each of the letters in that sentence as a object.

*`_.countonly(...)` : The function take in an array of strings and an object specifying what to count. Return object with  report how many instances of each string were found in the array of strings.

*`_.eqArrays(...)` : The function takes in two arrays and returns true or false, based on a perfect match.

*`_.eqObjects(...)` : The function take in two objects and returns true or false, based on a perfect match. Support not nested array as a value.

*`_.findKey(..)` : The function  takes in an object and a callback as a parameters. It scanning the object and returns the first key for which the callback returns a truthy value. If no key is found, it return _undefined_.

*`_.findKeyByValue(...)` : The function takes in an object and a value as a parameters, and return the first key which contains the given value. If no key with that given value is found, it return undefined.

*`_.flatten(...)` : The function take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

*`_.head(...)` : The function take in an array as aparameter and return the first element itself.

*`_.letterPositions(...)` : The function takes in a string and returns an object where the letter is key. Value is indices (zero-based positions) in the string where each character is found. If the letter was founded multiple times the value of the key will be an array of indexes.

*`_.map(...)` : The function take in two arguments: an array and a callback function. The function will return a new array based on the results of the callback function.

*`_.middle(...)` : The function takes in an array and return the array of the middle-most element(s) of the given array. For odd array's length one element, for even two elements.

*`_.tail(...)` : The function takes in an array as a parameter and returns everything except for the first item  of the provided array.

*`_.takeUntil(...)` : The function takes in two parameters: the array and the callback. The function will return a slice of the array with elements taken from the beginning until the callback returns a truthy value. 

*`_.without(...)` : The function take in two parameters: the sourse array and array with items to remove. It return 
new array with only those elements from source that are not present in the itemsToRemove array.
















