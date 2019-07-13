'use strict';

/*
 * 1. Write combinedLength function that returns the combined length of two arrays
 * if it receives correct arguments, or throws an error if called with invalid arguments.
*/

const combinedLength = (array1, array2) => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new TypeError('Both inputs must be arrays');
  }

  return array1.length + array2.length;
};

/*
 * 2. Write sumArray function that sums the numbers in an array and throws an error
 * if called with invalid arguments.
 * Note that all elements of the input array must be numbers.
 */

const sumArray = (array) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Argument must be an array');
  }

  if (!array.every((element) => typeof element === 'number')) {
    throw new TypeError('Array elements must be numbers');
  }

  return xs.reduce((a, b) => a + b, 0);
}

/*
 * 3. Complete function `combineAndPrint`, which should calculate the combined length of array1 and array2
 * and the sum of the elements in the combined array.
 *
 * Return the string including the two calculations: "Combined length: <combinedlength>; Combined sum of elements: <sumofelementsincombinedarray>".
 * In the case of invalid inputs, the function should return "Invalid arguments: both arguments must be arrays"
 * Note: You should use the try/catch approach for this exercise.
 */

const combineAndPrint = (array1, array2) => {
  try {
    const length = combinedLength(array1, array2);
    const sum = sumArray(array1.concat(array2));
    return `Combined length: ${length}; Combined sum of elements: ${sum}`;
  } catch (error) {
    return 'Invalid arguments: both arguments must be arrays';
  }
}

module.exports = {
  combinedLength,
  sumArray,
  combineAndPrint,
  wrapTryCatch,
};
