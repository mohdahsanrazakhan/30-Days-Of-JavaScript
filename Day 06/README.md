# Loops -

## Loops
> A loop is used to run the piece of code repeatedly until a certain condition is met.

- In JavaScript, there are 5 types of loops:
  - `for` loop
  - `while` loop
  - `do-while` loop
  - `for...of` loop
  - `for...in` loop

### `for` Loop
> Allows you iterate a block of code in a specific number of times.
```js
// Syntax
for(initialization, condition, increment/decrement) {
  // code
}
```
```js
for(let i = 0; i < 5; i++) {
  console.log(i)
}
// Output: 0 1 2 3 4
```
```js
for (let i = 10; i > 5; i--) {
  console.log(i)
}
// Output: 10 9 8 7 6
```
Adding all elements in the array
```js
const numbers = [1, 2, 3, 4, 5]
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum) // 15
```
Creating a new array based on the existing array
```js
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const capCountries = []
for(let i = 0; i < countries.length; i++) {
  capCountries.push(countries[i].toUpperCase())
}
console.log(capCountries) // ['FINLAND', 'SWEDEN', 'NORWAY', 'DENMARK', 'ICELAND']
```

### `while` Loop
> Execute a block of code while a certain condition is true.
```js
// Syntax
while (condition) {
  // code
}
```
```js
let i = 0
while(i < 5) {
  console.log(i)
  i++
}
// Output: 0 1 2 3 4
```

### `do-while` Loop
> This loop is similar to the `while` loop, but the
 difference is the block of code is executed at least once even if the condtion is false.
```js
do {
  // code
}
while (condition);
```
```js
let i = 0
do {
  console.log(i)
  i++
} while(i < 5)
// Output: 0 1 2 3 4
```
```js
let j = 0
do {
  console.log(j)
  j++
} while(k > 1)
// Output: 0
```

### `for...of` Loop
> `for...of` loop is used to iterate through the values of an object like arrays, strings.
- We use `for...of` loop, when we don't want index of each element in an array.
- `for...of` loop is simpler and better for iterating an arrays.
```js
// Syntax
for (const element of array) {
  // code
}
```
```js
const numbers = [1,2,3,4,5]

// Square of each element
for(const number of numbers) {
  console.log(number * number)
}
// Output: 1 4 9 16 25
```

### `for...in` Loop
> Used to iterate through the properties of an object.
- Iterate over the keys of an object and access the values by using keys as an index.
```js
// Syntax
for (const key in object) {
  // code
}
```
```js
const person = {
  name: 'Alice',
  age: 30
};

for(const key in person) {
  console.log(person[key]);
}
// Alice 30
```

### `break`
> The `break` statement is used to terminate/interrupt a loop. 
```js
for(let i = 0; i <= 5; i++) {
  if(i === 3) {
    break
  }
  console.log(i)
}
// Output: 0 1 2
```

### `continue`
> The `continue` statement is used to skip the certain iteration and move to the next iteration.
```js
for(let i = 0; i <= 5; i++) {
  if(i === 3) {
    continue
  }
  console.log(i)
}
// Output: 0 1 2 4 5
```
---
> Thank you for reading the summary of ***Introduction***. Please proceed to the exercises section and complete them on your own. If you need **hints** or **solutions**, refer to the ***[Exercises.js](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/blob/main/Day%2006/Exercises.mjs)*** file.

[< Previous](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2005) | [Next >](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2007)