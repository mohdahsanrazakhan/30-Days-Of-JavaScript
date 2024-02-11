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
  // Syntax
  string.replace(oldsubstring, newsubstring)
  ```
  ```js
  let string = '30 Days Of JavaScript'
  console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python
  ```
- ***charAt()***: method returns the character at a specified index in a string. Indexing start from `0` to `string.length - 1`
  ```js
  // Syntax
  string.charAt(index)
  ```
  ```js
  let string = '30 Days of JavaScript'
  console.log(string.charAt(0)) // 3
  console.log(string.charAt(string.length - 1)) // t
  ```
- ***charCodeAt()***: method returns the Unicode of the character at a specified index in a string.
  ```js
  // Syntax
  string.charCodeAt(index)
  ```
  ```js
  let string = '30 Days of JavaScript'
  console.log(string.charCodeAt(5)) // 121 ASCII code of 'y'
  console.log(string.charCodeAt(string.length - 1)) // 116 ASCII code of 't'
  ```
- ***indexOf()***: method returns the position of the first occurrence of a value in a sting. If the value is not found, it returns -1. It is case-sensitive.
  ```js
  // Syntax
  string.indexOf(substring)
  ```
  ```js
  let string = '30 Days Of JavaScript'
  console.log(string.indexOf('3')) // 0
  console.log(string.indexOf('days')) // -1
  console.log(string.indexOf('JavaScript')) // 11
  ```
- ***lastIndexOf()***: method returns the index of the last occurrence of a specified value in a string. It searches the string from the end to the beginning, returning the index from the beginning (position 0). If the value is not found, it returns -1. The method is case-sensitive.
  ```js
  // Syntax
  string.lastIndexOf()
  ```
  ```js
  let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
  console.log(string.lastIndexOf('love'))       // 67
  console.log(string.lastIndexOf('you'))        // 63
  console.log(string.lastIndexOf('JavaScript')) // 38
  ```
- ***concat()***: method joins two or more strings. It does not change the existing string. It returns a new string.
  ```js
  // Syntax
  string.concat(substring, substring, substring)
  ```
  ```js
  let days = '30 Days'
  let language = 'JavaScript'
  let string = days.concat(" of ", language);
  console.log(string) // 30 Days of JavaScript
  ```
- ***startsWith()***: method returns `true` if a string starts with a specified string, otherwise it returns `false`. It is case-sensitive.
  ```js
  // Syntax
  string.startWith(substring)
  ```
  ```js
  let string = 'I love JavaScript. If you do not love JavaScript what else can you love'
  console.log(string.startsWith('love')) // true
  console.log(string.startsWith('Love')) // false

  let language = 'JavaScript'
  console.log(language.startsWith('Java')) // true
  console.log(language.startsWith('script')) // false
  ```
- ***endsWith()***: method returns `true` if a string ends with a specified string., otherwise it returns `false`. It is case-sensitive.
  ```js
  string.endsWith(substring)
  ```
  ```js
  let string = 'I love JavaScript. If you do not love JavaScript what else can you love';
  console.log(string.endsWith('javascript')) // false
  console.log(string.endsWith('JavaScript')) // true
  ```
- ***search()***: method takes a substring as an argument and returns the `index` of the first match, else return -1. The search value can be a string or a regular expression pattern. It is a case-sensitive.
  ```js
  string.search(substring)
  ```
  ```js
  let string = 'I love JavaScript. If you do not love JavaScript what else can you love';
  console.log(string.search('love')) // 2
  console.log(string.search(/javascript/gi))  // 7
  ```
  - `g` for Global search. It searches for all occurrences of the pattern in the string.
  - `i` for Case-insensitive search. It performs a case-insensitive search for the pattern.
- ***match()***: method takes a substring or a regular expression pattern as an argument and returns an array with the matches found. If no match is found, it returns null. The regular expression pattern is enclosed between two / signs.
  ```js
  // Syntax
  string.match(substring)
  ```
  ```js
  let string = 'love'
  let patternOne = /love/     // with out any flag
  let patternTwo = /love/gi   // g - means to search in the whole text, i - case insensitive
  ```
  ```js
  let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
  console.log(string.match('love'))
  ```
  ```shell
  ["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
  ```
  ```js
  let regExPattern = /love/gi
  console.log(string.match(regExPattern)) // ["love", "love", "love"]
  ```
  - Lets extract numbers from text using a regular expression.
  ```js
  let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
  let regEx = /\d+/

  // d with escape character means d not a normal d instead acts a digit
  // + means one or more digit numbers,
  // if there is g after that it means global, search everywhere.

  console.log(txt.match(regEx)) // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
  console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
  ```
- ***repeat()***: method takes a number as an argument and returns a new string consisting of the original string repeated the specified number of times. It does not modify the original string.
  ```js
  // Syntax
  string.repeat(n) // 'n' is natural number
  ```
  ```js
  let language = 'JavaScript'
  console.log(language.repeat(5)) //JavaScriptJavaScriptJavaScriptJavaScriptJavaScript
  ```

## Checking Data Types and Casting

### Checking Data Types
> To check the datatype of a certain variable we use the `typeof` method
```js
  let days = 30
  let language = 'JavaScript'
  let isLearning = true
  let noValue = null
  let notDefine

  console.log(typeof days) // number
  console.log(typeof language) // string
  console.log(typeof isLearning) // boolean
  console.log(typeof noValue) // object
  console.log(typeof notDefine) // undefined
  console.log(typeof NaN) // number
```

### Changing Data Type (Casting)
> Casting converting one data type to another data type. We use `parseInt()`, `parseFloat()`, `Number()`, `+` sign, `str()`. When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.

**String to Int**: Converting a string number to a numerical value can be achieved using several methods:
- `parseInt()`
  ```js
  let number = '10'
  let numberInt = parseInt(number)
  console.log(typeof number) // string
  console.log(typeof numberInt) // number
  ```
- `Number()`
  ```js
  let number = '10'
  let numberInt = Number(number)
  console.log(typeof number) // string
  console.log(typeof numberInt) // number
  ```
- Plus sign (`+`)
  ```js
  let number = '10'
  let numberInt = +number
  console.log(typeof number) // string
  console.log(typeof numberInt) // number
  ```

**String to Float**: Converting a string float number to a floating-point numerical value can be accomplished using various methods:
- `parseFloat()`
  ```js
  let number = '3.1415'
  let numberFloat = parseFloat(number)
  console.log(number) // string
  console.log(numberFloat) // number
  ```
- `Number()`
  ```js
  let number = '3.1415'
  let numberFloat = Number(number)
  console.log(typeof number) // string
  console.log(typeof numberFloat) // number
  ```
- Plus sign (`+`)
  ```js
  let number = '3.1415'
  let numberFloat = +number
  console.log(typeof number) // string
  console.log(typeof numberFloat) // number
  ```

**Float to Int**: To convert floating-point numbers to integers, we use the `parseInt()` method.
```js
let floatingNumber = '9.81'
let floatingToIntNumber = parseInt(floatingNumber)
console.log(floatingNumber) // 9.81
console.log(floatingToIntNumber) // 9
```
---
> Thank you for reading the summary of ***Introduction***. Please proceed to the exercises section and complete them on your own. If you need **hints** or **solutions**, refer to the ***[Exercises.js](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/blob/main/Day%2002/Exercises.js)*** file.

[< Previous](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2001) | [Next >](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2003)