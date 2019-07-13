'use strict';

/*
 * 1. Complete combinedLength function that calls its callback with an error if called with invalid arguments
 *
 * If successful, the function should execute its callback with (null, the combined length of two arrays)
 * If error, it should execute its callback with (err).
 */

const combinedLength = (array1, array2, cb) => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return cb(new TypeError('Both inputs must be arrays'))
  }

  return cb(null, array1.length + array2.length);
};


/*
 * 2. Complete sumArray function that sums the numbers in an array and calls its callback with an error if called with invalid arguments
 */

const sumArray = (array, cb) => {
  if (!Array.isArray(array)) {
    return cb(new TypeError('Argument must be an array'));
  }

  if (!array.every((element) => typeof element === 'number')) {
    return cb(new TypeError('Array elements must be numbers'));
  }

  return cb(null, array.reduce((a, b) => a + b, 0));
}

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
    if (err) {
      return cb(errMsg);
    }

    sumArray(array1.concat(array2), (err, sum) => {
      if (err) {
        return cb(errMsg);
      }

      cb(null, `Combined length: ${length}; Combined sum of elements: ${sum}`);
    })
  });
};


module.exports = {
  combinedLength,
  sumArray,
  combineAndPrint,
};
