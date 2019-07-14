# Approach 2: Throwing and Catching Errors

## Throwing

1. During runtime, errors can be thrown in our application unexpectedly by computations acting on faulty computations produced earlier.
2. We can also manually throw errors ourselves by using the [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) keyword. This will immediately terminate the application, unless there is a [`catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block in the call stack.

### Example

```js
const applyToInteger = (func, integer) => {
  if (typeof func !== "function") {
    throw new TypeError("Invalid argument: First argument is not a function");
  }
  if (!Number.isInteger(integer)) {
    throw new TypeError(`Invalid argument: Second argument ${integer} is not an integer`);
  }

  return func(integer);
};
```

## Catching

Errors that have been thrown can be caught using a [`try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block. The `catch` block will catch all errors that arise in the `try` block, even if they are programmer errors. Ideally there would be sufficient logic in the `catch` block to differentiate these cases so that we are not at risk of recovering from a programmer error as though it is an operational error.

Now we are going to augment the throw example above by using a `try/catch` block. The try block tries to execute the code. If no error is thrown during the try block, the catch block will not run. However if the try block throws an error, the catch block will catch the error and do something with it.

### Example continued
```js
const applyAndPrintResult = (func, integer) => {
  try {
    const result = applyToInteger(func, integer);

    console.log("Result successfully calculated:");
    console.log(`Applying ${func.name} to ${integer} gives ${result}`);
  } catch (err) {
    console.log("Sorry, result could not be calculated:");
    console.log(err.message);
  }
};
```

Using this function in the REPL:

```
> applyAndPrintResult({}, 2)
Sorry, result could not be calculated:
Invalid argument: First argument is not a function

> applyAndPrintResult((n) => n, 2.3)
Sorry, result could not be calculated:
Invalid argument: Second argument 2.3 is not an integer
```

## Exercise

If you want to try this out yourself, complete the exercise in [exercises/approach-2](../exercises/approach-2). Test your solutions by running `npm run ex-2`.

## Notes

* Throwing can be useful for making critical assertions about the state of your application, especially during startup (e.g. database connection has been established).
* Remember to use `catch` blocks to avoid inappropriate program termination. (e.g. a server should usually not crash in the course of dealing with a client request. Without `catch` blocks codebases that `throw` errors extensively will be very fragile.
* It's not possible to wrap an asynchronous function in a try/catch block, so throwing should only be used with synchronous code. Errors thrown from asynchronous functions will not be caught. To understand why, learn about the javascript [call stack](https://www.youtube.com/watch?v=8aGhZQkoFbQ).
