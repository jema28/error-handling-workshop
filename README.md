# Error Handling Workshop

**Author**: [@njsfield](https://github.com/njsfield)

**Maintainer**: [@eliascodes](https://github.com/eliascodes)

Inspired by [@rjmk](https://github.com/rjmk) and his [error handling talk](https://github.com/rjmk/fac-error-talk)

<img src="./docs/node-error.png" width="720px" alt="Undefined Error Pic" />

## Contents

1. [Learning Outcomes](#learning-outcomes)
2. [Problem](#problem)
3. [Kinds of Errors](#kinds-of-errors)
4. [Approaches](#approaches)
   1. [General principles](#general-principles)
   2. [Approach 1: Error-First Callbacks ](#approach-1-error-first-callbacks)
   3. [Approach 2: Throwing and Catching Errors ](#approach-2-throwing-and-catching-errors)
5. [Notes](#notes)
6. [External Resources](#external-resources)

## Learning Outcomes

* Understand the need to handle errors and why poor error handling can be dangerous
* Understand how to use the error-first callback pattern
* Understand how to `throw` an error
* Understand how to use `try/catch` to handle thrown errors
* Understand in what contexts each of these approaches might be useful

## Problem

JavaScript is a dynamically typed language. You can call a function with any types of arguments passed to it, and the function will try to execute- for example:

```javascript
const changeVal = (func, val) => func(val);

console.log(changeVal({}, 6));

// TypeError: func is not a function
```

Which would fail and break your application, as changeVal is expecting a function as its first argument, and instead an object has been passed.

Sometimes errors happen silently, causing problems down the line that are hard to trace:

```javascript
const addTen = num => num + 10;

const addTenToEach = arr => arr.map(addTen);

const arrayOfNumbersIThink = [0, 2, { number: 6 }, 8];

const result = addTenToEach(arrayOfNumbersIThink);

console.log(result);
// [ 10, 12, '[object Object]10', 18 ]

nextOperation(result);
// ... danger
```

Here our `addTen` function has unknowingly worked with two different data types: a `Number` and an `Object`. When asked to add a number to an object, the JavaScript interpreter coerces them both to strings and concatenates them together to produce `'[object Object]10'`, which is not the intended outcome.

If `arrayOfNumbersIThink` was retrieved from an **API call** or **user input**, we wouldn't always be certain the values will be what we expect. How can we deal with these situations?

## Kinds Of Errors

Broadly speaking, errors come in two kinds [[2]](#external-resources):

* **Programmer errors**: These are _bugs_; they are unintended and/or unanticipated behaviour of the code, and they can only be fixed by changing the code (e.g. calling a function with the wrong number of arguments)
* **Operational errors**: These are runtime errors that are usually caused by some external factor (e.g. any kind of network error, failure to read a file, running out of memory, etc.)

How you should handle any given error depends on what kind of error it is. Operational errors are a normal part of the issues a program must deal with. They typically should not cause the program to terminate or behave unexpectedly. By contrast, programmer errors are by definition unanticipated, and may potentially leave the application with unpredictable state and behaviour. In this case it is usually best to terminate the program.

## Approaches

Good error handling is typically not something that can just be bolted onto an existing program as an afterthought. Well conceived error handling will affect the structure of the code. In JavaScript and Node.js, there are a number of approaches, some of which are explored below.

### General Principles

Regardless of the chosen approach, there are some principles which can be generally applied:

1. **Be consistent, not ad-hoc.**
   * Inconsistent approaches to error handling will complicate your code and make it much harder to reason about.
2. **Try to trip into a failure code path as early as possible.**
   * A _code path_ is the path that data takes through your code. A _success code path_ is the path data takes if everything goes right. A _failure code path_ is the path data takes if something goes wrong. It may be tempting to return default values in the case of an error and allow the application to continue as normal. This may be appropriate in some cases, but can often cover up the root cause of an error and make it difficult to track down, or result in unhelpful error messages.

### Illustrative Example

To illustrate the three approaches we will cover, we will use the same simple example in each. Imagine you intend to write a function `applyToInteger`, with the following signature:

```js
applyToInteger(func, integer);
```

The function accepts two arguments, `func`, which is a `Function`, and `integer` which is a whole `Number`. It applies the `func` to `integer` and returns the result.

### [Approach 1: Error-first callbacks](./docs/approach_1.md)

This section covers the recommended way of dealing with asynchronous errors.

### [Approach 2: Throwing and catching errors](./docs/approach_2.md)

This section covers one way of dealing with synchronous errors.

---

NB. Error-First Callback Pattern: You _must_ ensure that the callback is not called more than once in your function. This can be done either using `if/else` blocks, `switch` statements (with `break`), or early `return` statements (e.g. `return callback(null, result)`).

# Further reading

1. [Rafe's (@rjmk) Error Handling Talk](https://github.com/rjmk/fac-error-talk)
2. [Joyent - Error Handling in Node.js](https://www.joyent.com/node-js/production/design/errors)
3. [Proper Error Handling in JavaScript](https://www.sitepoint.com/proper-error-handling-javascript/)
4. [The Beginner's Guide to Type Coercion: A Practical Example](https://code.tutsplus.com/articles/the-beginners-guide-to-type-coercion-a-practical-example--cms-21998)
5. [MDN - Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
