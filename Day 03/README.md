# Booleans, Operators, Date

## Booleans
> A boolean data type holds one of two values: true or false. In short, Boolean values are either true or false. It's commonly used with comparison operators, which return true or false based on the comparison's result.
```js
let isDarMode = true
let trueValue = 10 > 5
let falseValue = 10 < 5
```

### Truthy values:
- All numbers (-ve and +ve) are truthy except zero.
- All strings are truthy except empty string ("")
- Boolean `true`

### Falsy values:
- 0
- 0n
- null
- undefined
- NaN
- Boolean `false`
- '', "", ``, empty string

## Undefined
> If a variable is declared without assigning a value, or if a function does not return a value explicitly, both cases result in the value of undefined.
```js
let language
```

## Null
> A null data type represents the intentional absence of any value.
```js
let empty = null;
```

## Operators

### Assignment operators
> An equal sign in JavaScript is an assignment operator. It uses to assign a variable.
```js
let language = 'JavaScript'
```
![assignmentOperatorChart](https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/images/assignment_operators.png)

### Arithmetic Operators
- Addition (`+`): `a + b`
- Subtraction(`-`): `a - b`
- Multiplication(`*`): `a * b`
- Division(`/`): `a / b`
- Modulus(`%`): `a % b`
- Exponential(`**`) `a ** b`
```js
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let difference = numOne - numTwo
let multiple = numOne * numTwo
let division = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, difference, multiple, division, remainder, powerOf) // 7,1,12,1.33,1, 64
```

### Comparison Operators
![comparisonOperatorChart](https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/images/comparison_operators.png)
```js
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false
```
- As rule of thumb, if a value is not true with == it will not be equal with ===. Using === is safer than using ==.

### Logical Operators
> The common logical operators in JavaScript are: && (logical AND), || (logical OR), and ! (logical NOT). The && operator returns true only if both operands are true. The || operator returns true if either of the operands is true. The ! operator negates true to false and false to true.
```js
// && ampersand operator example

const check = 4 > 3 && 10 > 5         // true && true -> true
const check = 4 > 3 && 10 < 5         // true && false -> false
const check = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check = 4 > 3 || 10 > 5         // true  || true -> true
const check = 4 > 3 || 10 < 5         // true  || false -> true
const check = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let check = 4 > 3                     // true
let check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true
```

### Increment Operator
> Increment Operator increases the value of a variable and it could be a pre or post-increment.
- ***Pre-increment***:
  ```js
  let count = 0
  console.log(++count)  // 1
  console.log(count)    // 0
  ```
- ***Post-increment***:
  ```js
  let count = 0
  console.log(count++)  // 0
  console.log(count)    // 1
  ```

### Decrement Operator
> It is used to decrease the value of a variable, and it could be a pre or post-decrement.
- ***Pre-decrement***:
  ```js
  let count = 0
  console.log(--count)  // -1
  console.log(count)    // -1
  ```
- ***Post-decrement***:
  ```js
  let count = 0
  console.log(count--)  // 0
  console.log(count)    // -1
  ```

### Ternary Operator
> It allows to write a condition.
```js
let number = 5
number > 0 ? console.log(`${number} is a positive number`) : console.log(`${number} is a negative number`); // 5 is a positive number

number = -10
number > 0 ? console.log(`${number} is a positive number`) : console.log(`${number} is a negative number`); // -10 is a negative number
```

### Operator Precedence
> Operators with higher precedence are evaluated first.
```js
let a = 5
let b = 10
let c = 3
let result = a + b * c - (b / 2 - a)
console.log(result) // 5
```

## Window Methods

### Window `alert()` method
> The alert() method shows an alert box with a message and an 'OK' button. It accepts one argument - the message to display. Avoid excessive use as it can be disruptive.
```js
alert(message)
```
```js
alert('Welcome to 30DaysOfJavaScript')
```

### Window `confirm()` method
> The prompt() method shows a prompt box in the browser to receive input values from users, which can then be stored in a variable. It takes two arguments, where the second one is optional.
```js
prompt('required text', 'optional text')
```
```js
let number = prompt('Enter number', 'number goes here')
console.log(number)
```

### Window `confirm()` method
> The confirm() method displays a dialog box with a message and OK/Cancel buttons. It's often used for user confirmation. Clicking OK returns true, while Cancel returns false.
```js
const agree = confirm('Are you sure you like to delete?')
console.log(agree) // result will be true or false based on what you click on the dialog box
```

## Date Object

![dateChart](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/date_time_object.png)

### Creating a time object
> The time object will provide information about time.
```js
const now = new Date()
console.log(now) // Sun Feb 11 2024 21:56:42 GMT+0530 (India Standard Time)
```

### Most useful methods of the Date object:
```js
const now = new Date()
// getFullYear(): Retrieves the year (4 digits) of the specified date according to local time.
console.log(now.getFullYear()) // 2024
// getMonth(): Retrieves the month (0-11) for the specified date according to local time.
console.log(now.getMonth()) // 1
console.log(now.getMonth() + 1) // 2
// getDate(): Retrieves the day of the month (1-31) for the specified date according to local time.
console.log(now.getDate()) // 11
// getDay(): Retrieves the day of the week (0-6) for the specified date according to local time.
console.log(now.getDay()) // 0 means Sunday
// getHours(): Retrieves the hour (0-23) in the specified date according to local time.
console.log(now.getHours()) // 22
// getMinutes(): Retrieves the minutes (0-59) in the specified date according to local time.
console.log(now.getMinutes()) // 3
// getSeconds(): Retrieves the seconds (0-59) in the specified date according to local time.
console.log(now.getSeconds()) // 30
// getMilliseconds(): Retrieves the milliseconds (0-999) in the specified date according to local time.
console.log(now.getMilliseconds()) // 583
// getTime(): Retrieves the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC.
console.log(now.getTime()) // 1707669210583
console.log(Date.now()) // 1707669582425
```
---
> Thank you for reading the summary of ***Introduction***. Please proceed to the exercises section and complete them on your own. If you need **hints** or **solutions**, refer to the ***[Exercises.js](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/blob/main/Day%2003/Exercises.js)*** file.

[< Previous](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2002) | [Next >](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2004)