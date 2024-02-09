# Introduction Keynotes -

## How many ways to add JavaScript to a Web Page:
- **Inline Script**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Inline Script</title>
  </head>
  <body>
    <button onclick="alert('This is a inline script.')">Click Me</button>
  </body>
</html>
```
- **Internal Script**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Internal Script</title>
    <script>
      console.log('This is a internal script written inside head tag.')
    </script>
  </head>
  <body></body>
</html>
```
or
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Internal Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!');">Click Me</button>
    <script>
      console.log('This is a internal script written inside body tag.')
    </script>
  </body>
</html>
```
- **External Script**

```js
// index.js
cosole.log('This is the external script file.')
```
>  JavaScript external link could be in the header or in the body.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>External script inserted in head tag</title>
    <script src="index.js"></script>
  </head>
  <body></body>
</html>
```
> Before the closing tag of the body is the recommended place to put the external JavaScript script
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>External script inserted in head tag</title>
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```
- **Multiple External Script**
```js
// greet.js
console.log(Hello Friends);
```
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Multiple External Scripts</title>
  </head>
  <body>
    <script src="index.js"></script>
    <script src="greet.js"></script>
  </body>
</html>
```

## Different types of Data types:
- **Numbers**
  - Integers: (-ve, zero, +ve) numbers.
  - Float-point numbers: Decimal numbers.
```js
let positiveNumber = 10
let negativeNumber = -50
let zeroNumber = 0
let floatNumber = 3.14159
```
- **Strings**
  - Single quotes: ''
  - Double quotes: ""
  - Backticks: ``
```js
let sqString = '30'
let dqString = "Days"
let btString = `JavaScript
                by
                Asabeneh`
```
- **Booleans**
  - Either `true` or `false`
```js
null == 0 ? 'true' : 'false'; // false
null >= 0 ? 'true' : 'false'; // true
```
- **Undefined**
  - Variable has been declared, but its value has not been assigned.
```js
let yourName;
console.log(yourName); // undefined
```
- **Null**
  - Variable has been declared, and its value has been intentionally assigned to `null`.
```js
let emptyValue = null;
```

## What is typeof operator:
> The typeof operator is used to check the type of a variable.
```js
console.log(typeof 'Hello ')
console.log(typeof 5) // Number
console.log(typeof true) // Boolean
console.log(typeof null) // Object type
console.log(typeof undefined) // undefined
```
## Comments in JavaScript:
- **Single-line Comments**
- **Multiple-line Comments**
```js
// This is a single line comment.
/* This is
   a multiple line
   comment.
*/
```
## Variables:
> Variables are used to store value/data in a memory location.

**Rule of thumb regarding JS Variables:**

- ***Variable name -***
  - follow camelCase convention.
  - should not begin with a number.
  - should not have space between words.
  - does not allow special characters except dollar sign ($) and underscore (_).

Valid Examples:
```js
userName
address
$number_1
```
---
> Thank you for reading the summary of ***Introduction***. Please proceed to the exercises section and complete them on your own. If you need **hints** or **solutions**, refer to the `Exercises.js` file.