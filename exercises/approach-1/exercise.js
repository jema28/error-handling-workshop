"use strict";

/*
 * 1. Complete combinedLength function that calls its callback with an error if called with invalid arguments
 *
 * If successful, the function should execute its callback with (null, the combined length of two arrays)
 * If error, it should execute its callback with (err).
 */

const combinedLength = (array1, array2, cb) => {
  // CODE HERE
};

/*
 * 2. Complete sumArray function that sums the numbers in an array and calls its callback with an error if called with invalid arguments
 */

const sumArray = (array, cb) => {
    //CODE HERE
};

/*
 * 3. Complete function `combineAndPrint`, which should calculate the combined length of array1 and array2
 * and the sum of the elements in the combined array.
 *
 * Return the string including the two calculations: "Combined length: <combinedlength>; Combined sum of elements: <sumofelementsincombinedarray>".
 * In the case of invalid inputs, the function should return "Invalid arguments: both arguments must be arrays"
 */

const combineAndPrint = (array1, array2, cb) => {
  const errMsg = 'Invalid arguments: both arguments must be arrays';

  combinedLength(array1, array2, (err, length) => {
   //CODE HERE
  });
};

module.exports = {
  combineAndPrint,
  combinedLength,
  sumArray
};
