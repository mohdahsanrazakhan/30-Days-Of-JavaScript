# Data Types Keynotes -

## Data Types:
- The data types describe the characteristics of data.
- Data types are divided into two categories:
  - Primitive Data Types
  - Non-primitive Data Types

## Primitive Data Types:
> Primitive data types are immutable(non-modifiable) data types. Once a data type is created we cannot modify it.
- Numbers: Integers, Floats.
- String: Data under single, double, or backtick quotes.
- Boolean: Either true or false values.
- Null: Variable assign with empty or no value.
- Undefined: Variable declared but not assign any value.
- Symbol: Unique data types introduced in ES6. They are created using the Symbol constructor.

## Non-primitive Data Types:
> Non-primitive data types are modifiable or mutable. We can modify the value of data types after it gets created.
- Objects
- Arrays
- Functions

> Rule of Thumb: Do not compare non-primitive data types like arrays, functions, or objects directly. Non-primitive values are reference types compared by reference, not value. Two objects are strictly equal only if they refer to the same underlying object.

## Numbers:
> Numbers are integers or decimal (floats) values which can do all arithmetic operations.

### Declaring Number Data Types:
```js
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = 3.14159       // pi a geometrical constant
```

### Math Object:
> It provides a lots of methods to work with numbers.
```js
console.log(Math.PI); // 3.141592653589793
// Rounding to the closest number. if above 0.5 up if less 0.5 down rounding:
console.log(Math.round(9.81)) // 10
// Floor Round a number downward to its nearest integer. 
console.log(Math.floor(9.81)) // 9
// Ceil Round a number upward to its nearest integer.
console.log(Math.ceil(9.81)) // 10
// Min returns minimum value
console.log(Math.min(-10, 0, 10)) // -10
// Max retuerns maximum value
console.log(Math.max(-10, 0, 10)) // 10
//Absolute value 
console.log(Math.abs(-10)) // 10
//Square root
console.log(Math.sqrt(100)) // 10
console.log(Math.sqrt(2)) // 1.4142135623730951
// Power
console.log(Math.pow(3, 2)) // 9
console.log(Math.E) // 2.718
// Logarithm 
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)) // 0.6931471805599453
console.log(Math.log(10)) // 2.302585092994046
// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2) // 0.6931471805599453
console.log(Math.LN10) // 2.302585092994046
// Trigonometry
Math.sin(0) // 0
Math.sin(60) // -0.3048106211022167

Math.cos(0) // 1
Math.cos(90) // -0.4480736161291701

```
### Randome Number Generator
> Math.random(): This function returns a floating-point number between 0 (inclusive) and 1 (exclusive). In other words, it generates a random number between 0 to 0.999...

Lets generate random number between 0 to 0.999...
```js
const randomNumber = Math.random() // returns random number between 0 to 0.999...
// Lets create a random number between 0 to 10
const $random1to10 = Math.floor(Math.random() * 11) 
```
Lets generate random number between 0 to 10.
```js
// Math.floor() ensures that we get a whole number
const $random0to10 = Math.floor(Math.random() * 11) 
```
Lets generate random number between 1 to 10.
```js
const $random1to10 = Math.floor(Math.random() * 10) + 1
```

## Strings

### String Concatenation
> Merging two or more string together is called concatenation.

```js
let days = '30 days of'
let space = ' '
let language = 'javascript'
let strConcat = days + space + language
console.log(strConcat) // 30 days of javascript
```
**How many ways to concat string:**
- *Using addition operator* 
  > ES5 string addition is the older way.
  ```js
  let language = 'javascript'
  let challenge = '30 days of ' + language
  console.log(challenge) // 30 days of javascript
  ```
- *Long Literal String*
  > If the string is too long to fit on one line, we can use the backslash character () at the end of each line to indicate that the string continues on the next line.
  ```js
  const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
  I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
  Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
  In the end of 2019, I was thinking to expand my teaching and to reach \
  to global audience and I started a Python challenge from November 20 - December 19.\
  It was one of the most rewarding and inspiring experience.\
  Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
  I hope you are enjoying too."

  console.log(paragraph)
  ```
- *Escape Sequences in String*
  > An escape sequence starts with a backslash () followed by certain characters.
  > - \n: new line
  > - \t: Tab, means 8 spaces
  > - \\: Back slash
  > - \': Single quote (')
  > - \": Double quote (")

- *Template Literals (Template Strings) or String Interpolation Method*
  > To create a template string, we use two backticks (``). Data can be injected as expressions inside a template string by enclosing the expression with curly brackets ({}) preceded by a dollar sign ($).
  ```js
  // Syntex
  `String literal text ${expression}`
  ```
  > With string templates, we can include expressions like values or operations (comparison, arithmetic, ternary).
  ```js
  let num1 = 3
  let num2 = 5
  console.log(`${num1} is greater than ${num2}: ${num1 > num2}`) // 3 is greater than 5: false
  ```

### String Methods
> Strings are primitive data type and immutable (once it is created, cannot be modify). However they have numerous methods for string manipulation.
- ***length***: Returns the number of characters in a string including empty space.
  ```js
  let language = 'JavaScript';
  console.log(language.length) // 10
  ```
- ***Accessing characters in a string***: We can access each character in a string using its index.
  ```js
  let language = 'JavaScript'
  console.log(language[0]) // J
  // language.length - 1 represnt the last index
  console.log(language[language.length - 1]) // t
  ```
- ***toUpperCase()***: method converts the string to uppercase letters.
  ```js
  let language = 'JavaScript'
  console.log(language.toUpperCase()) // JAVASCRIPT
  ```
- ***toLowerCase()***: method converts the string to lowercase letters.
  ```js
  let language = 'JAVASCRIPT';
  console.log(language.toLowerCase()) // javascript
  ```
- ***substr()***: It take two arguments, the starting index and number of characters to slice.
  ```js
  let language = 'JavaScript'
  console.log(language.substr(4, 6)) // Script
  ```
- ***substring()***: method takes a starting index and a stopping index, excluding the character at the stopping index.
  ```js
  let language = 'JavaScript'
  console.log(language.substring(0,4)) // Java
  console.log(language.substring(4,10)) // String
  console.log(language.substring(4)) // String
  ```
- ***split()***: method splits a string into an array of substrings. Returns the new array and does not change the original string.
  ```js
  let string = '30 days of javascript'
  console.log(string.split()) // ['30 days of javascript']
  console.log(string.split(' ')) // ['30', 'days', 'of', 'javascript']
  
  let firstName = 'Asabeneh'
  console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
  console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

  let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
  console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
  console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
  ```
- ***trim()***: method removes whitespace from both sides of a string, and does not change the original string. (also use trimStart() and trimEnd() in certain cases)
  ```js
  let string = '   30 Days Of JavaScript   '
  let stringS = '   30 Days Of JavaScript   '
  let stringE = '   30 Days Of JavaScript   '
  console.log(string.trim(' ')) // '30 Days Of JavasCript'
  console.log(stringS.trimStart(' ')) // '30 Days Of JavasCript   '
  console.log(stringE.trimEnd(' ')) // '   30 Days Of JavasCript'
  ```
- ***includes()***: method returns `true` if a string contains a specified string, otherwise it returns `false`. It is also a case sensitive.
  ```js
  // Syntax
  string.includes(searchvalue, start)
  ```
  ```js
  let string = '30 Days Of JavaScript'
  console.log(string.includes('Days'))     // true
  console.log(string.includes('days'))     // false - it is case sensitive!
  console.log(string.includes('java'))     // false
  console.log(string.includes('Java'))     // true
  ```
- ***replace()***: method returns a new string with the replaced value(s). It does not modify the original string.
  ```js
  string.replace(oldsubstring, newsubstring)
  ```
  ```js
  let string = '30 Days Of JavaScript'
  console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python
  ```