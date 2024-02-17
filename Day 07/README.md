# Functions - 

## Functions
> A function is a reusable block of code to perform a certain task.
- Function makes code:
  - clean and easy to read
  - reusable
  - easy to test
- Different ways to create a function:
  - *Declaration function*
  - *Expression function*
  - *Anonymous function*
  - *Arror function*

### Function Declaration
Lets declare and call a function.
```js
// Declaring a function without a parameter
function funcName() {
  // block of code
}
funcName() // Calling a function
```

### Function without parameter and return
```js
function cube() {
  let number = 5
  let cube = number**3
  console.log(cube) // 125
}
cube()
```

### Function returning value
- Function can also return value.
- If a function does not return values the value of the function is undefined.
```js
function square() {
  let number = 10
  let sq = number**2
  return sq
}
console.log(square()) // 100
```

### Function with parameter
- We can pass different datatypes (number, string, boolean, object, function) as a parameter.
```js
// Declaring a function with single parameter
function funcName(param1) {
  // block of code
}
funcName(param1) // Calling a function
```
```js
function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}
console.log(areaOfCircle(5)) // 78.53981633974483
```

### Function with two parameters
```js
// Declaring a function with two parameter
function funcName(param1, param2) {
  // block of code
}
funcName(param1, param2) // Calling a function
```
```js
function sum(x, y) {
  let result = x + y
  console.log(result)
}
sum(10, 50) // 60
```

### Function with many parameters
```js
// Declaring a function with multiple parameters
function funcName(param1, param2, param3,...) {
  // block of code
}
funcName(param1, param2, param3,...) // Calling a function
```
```js
function sumOfArrayValue(arr) {
  let sum = 0
  for(const val of arr) {
    sum += val
  }
  console.log(sum) 
}
let array = [1,2,3,4,5]
sumOfArrayValue(array) // 15
```

### Function with unlimited number of parameters
- When we don't know how many arguments are passed by the users. Therefore, we should know how to write a function which can take unlimited number of arguments.

**Unlimited number of parameters in regular function**
- A function declaration provides a function scoped arguments array like object.
- Anything we passed as an argument in the function can be accessed from arguments object inside the functions.
```js
// Lets access the arguments object
function allNumber() {
  console.log(arguments)
}
allNumber(1,2,3,4) // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
```
```js
function sumOfAllNumber() {
  let sum = 0
  for(let number of arguments) {
    sum += number
  }
  console.log(sum)
}
sumOfAllNumber(1,2,3,4,5) // 15
```

**Unlimited number of parameters in arrow function**
- Arrow function does not have the function scoped arguments object
- We use `spread` operator to take unlimited number of arguments in an arrow function.
```js
const allNumber = (...args) => {
  console.log(args)
}
allNumber(1,2,3,4,5) // [1, 2, 3, 4, 5]
```
```js
const sumOfAllNumber = (...args) => {
  let sum = 0
  for(let number of args) {
    sum += number
  }
  console.log(sum)
}
sumOfAllNumber(1,2,3,4,5) // 15
```

## Anonymous Function
> Function do not have any name identifier and cannot be referred directly by name.
```js
console.log(function(x, y) {
  return x + y
}(2,5)) // 7
```

## Expression Function
> It is a way to define a function by assigning it to a variable.
- Expression functions are anonymous functions.
```js
// Declaring an function expression
const anonymous = function() {
  console.log('Anonymous Function!')
}
anonymous() // Calling an function expression
```

## Self-invoking Function
> Self-invoking function do not need to be called to return a value.
- Self-invoking functions are anonymous function
```js
(function(n) {
  console.log(n*n)
})(10) // 100

// Instead of just printing if we want to store and return the data, are shown below:
let square = (function(num) {
  return num**2
})(12)

console.log(square) // 144
```

## Arrow Function
> A simplar and shorter way for defining a function in JavaScript. It uses arrow instead of the `function` keyword to declare a function.
- Arrow function also knows as fat arrow function.
```js
// if we have only one line in the code block, it can be written as follows, explicit return
const square = n => n * n
square(2) // 4
const sum = (x, y) => x + y
sum(2,5) // 7
```
```js
const changeToUpperCase = allCountry => {
  let upperCasedCountry = []
  for(let country of allCountry) {
    upperCasedCountry.push(country.toUpperCase())
  }
  return upperCasedCountry
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries)) // ['FINLAND', 'SWEDEN', 'NORWAY', 'DENMARK', 'ICELAND']
```

## Function with default parameters
> Default values to the parameters will be used when we invoke the function without passing an arguments.
```js
// Declaring a function with default parameter
function functionName(param = value) {
  // block of code
}
// Calling a function
functionName()
functionName(args)
```
```js
function calculateAge(birthYear, currentYear = new Date().getFullYear()) {
  let age = currentYear - birthYear
  return age
}
console.log(calculateAge(1995)) // 29
```
```js
// Declaring a function with default parameter
const functionName = (param = value) => {
  // block of code
}
// Calling a function
functionName()
functionName(args)
```
```js
const weightOfObject = (mass, gravity = 9.81) => {
  let weight = mass * gravity + 'N' 
  return weight
}
console.log(weightOfObject(100))        // 981N
console.log(weightOfObject(100, 1.62))  // 162N
```

## Function declaration versus Arrow function
> Function declaration and arrow function are two ways of defining functions in JavaScript. Here's a comparison between them:

**Function Declaration**:
```js
function functionName(params) {
  // block of code
}

function greet(name) {
  return `Hello ${name}!`
}
```
- Uses `function` keyword to define a function.
- Can be named or anonymous.
- Has its own execution context, so `this` refers to the function's context.
- Can be hoisted, means they can be called before they are defined in the code.
- Suitable for object methods, constructor functions, and global functions.

**Arrow Function**:
```js
const functionName = (params) => {
  // block of code
}

const greet = (name) => `Hello, ${name}!`;
```
- Uses `=>` arrow syntax.
- Always anonymous, cannot be named.
- Does not have its own execution context, `this` refers to the enclosing context.
- Cannot be hoisted, must be defined before being called in the code.
- Suitable for short, concise functions, especially when used as callbacks or for array methods like `map`, `filter`, and `reduce`.

---
> Thank you for reading the summary of ***Introduction***. Please proceed to the exercises section and complete them on your own. If you need **hints** or **solutions**, refer to the ***[Exercises.js](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/blob/main/Day%2007/Exercises.mjs)*** file.

[< Previous](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2006) | [Next >](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2008)