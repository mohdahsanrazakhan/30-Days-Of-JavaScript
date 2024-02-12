# Conditionals - 

## Conditional Statement:
> Conditional statements are used for making decisions based on different conditions.
- By default, JavaScript executes statements sequentially, from top to bottom.
- The sequential flow of execution can be altered in two ways:
  - **Conditional Execution**: A block of one or more statements is executed if a certain expression evaluates to true.
  - **Repetitive execution**: A block of one or more statements is repetitively executed as long as a certain expression remains true.
- Conditional statement structures:
  - `if` statements
  - `if-else` statements
  - `if-else ladder` statements
  - `switch` statements
  - `Ternary operator` 

### `if` Statements
> `if` keyword is used to check if a condition is `true` and to execute the block of code.
```js
// Syntax
if(condition) {
  // This block of code runs for trutly condition
}
```
```js
let number = 2
if(number % 2 == 0) {
  console.log(`${number} is a even number.`) // 2 is a even number.
}
```

### `if-else` Statement
> If condition is `true` then `if` block of code will run, otherwise `else` block of code will automatically executed.
```js
// Syntax
if(condition) {
  // Truthy condition will execute this block of code
}
else {
  // Falsy condition will execute this code
}
```
```js
let number = 3
if(number % 2 == 0) {
  console.log(`${number} is even`)
}
else {
  console.log(`${number} is odd`) // 3 is odd
}
```

### `if-else ladder` statements
> This statement allows you to execute a different block of code depending on multiple conditions.
```js
// Syntax
if(condition) {
  // Truthy block of code
}
else if(condition) {
  // Truthy block of code
}
else {
  // Falsy block of code
}
```
```js
let number = 0
if(number % 2 == 0) {
  console.log(`${number} is even`)
}
else if(number % 2 != 0) {
  console.log(`${number} is odd`)
}
else {
  console.log(`${number} is zero`)
}
```

### `switch` Statements
> The switch statement start with `switch` keyword followed by a parenthesis and code block. Code block contains multiple `cases`. If the value of switch statement matches with case value, then `break` statement terminate the code execution and do not go down after condition is satisfied. Otherwise the `default` block runs if all the cases doesn't satisfy the condition.
- It is an alternative way for `if-else` ladder. 
- According to rule of thumb, if we have more than 5 conditions then use `switch` statement.
```js
switch(caseValue){
  case 1:
    // block of code
    break
  case 2:
    // block of code
   break
  case 3:
    // block of code
   break
  default:
    // block of code
}
```
```js
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}
```

### Ternary Operators
> Ternary Operator takes three operands: a conditon followed by a question mark (?), then an expression to execute if the conditon is truthy followed by a colon (:), and finally the expression to execute if the conditon is falsy.
- Alternative to an `if-else` statement.
```js
condition ? expressionIfTrue : expressionIfFalse
```
```js
0 == null ? true : false // false
undefined == null ? true : false // true
undefined === null ? true : false // false
```
---
> Thank you for reading the summary of ***Introduction***. Please proceed to the exercises section and complete them on your own. If you need **hints** or **solutions**, refer to the ***[Exercises.js](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/blob/main/Day%2004/Exercises.js)*** file.

[< Previous](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2003) | [Next >](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2005)