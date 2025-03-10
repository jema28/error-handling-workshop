'use strict';


/*
 * 1. Write combinedLength function that returns the combined length of two arrays
 * if it receives correct arguments, or throws an error if called with invalid arguments.
*/

const combinedLength = (array1, array2) => {
  // CODE HERE
};

/*
 * 2. Write sumArray function that sums the numbers in an array and throws an error
 * if called with invalid arguments.
 * Note that all elements of the input array must be numbers.
 */

const sumArray = (array) => {
  // CODE HERE
}

/*
 * 3. Complete function `combineAndPrint`, which should calculate the combined length of array1 and array2
 * and the sum of the elements in the combined array.
 *
 * Return the string including the two calculations: "Combined length: <combinedlength>; Combined sum of elements: <sumofelementsincombinedarray>".
 * In the case of invalid inputs, the function should return "Invalid arguments: both arguments must be arrays"
 * Note: You should use the try/catch approach for this exercise.
 */

const combineAndPrint = (a, b) => {
  // CODE HERE
};

 /*	
 * **Harder Stretch goal: Write a function that wraps another function in try/catch	
 *	
 * Complete `wrapTryCatch` function, which takes a function `fn1` as an argument 
   and returns another function `fn2` which wraps the first in a try/catch statement.	
 *	
 * `fn2` should behave exactly like `fn1` except in the case where `fn1` throws an	
 * error, in which case `fn2` should simply return `undefined`	
 */	

const wrapTryCatch = (fn) => (...args) => {	
  throw new Error('Delete this line and write your code below');	
  // CODE HERE	
};	

module.exports = {
  combinedLength,
  sumArray,
  combineAndPrint,
  wrapTryCatch,
};
