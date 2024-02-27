# Higher Order Functions -

## Higher Order Function
> Higher Order Function are functions which take other function as a parameter or return a function as a value.
- The function passed as a parameter is called callback.

### Callback
> A callback is a function which can be passed as parameter to other function.
```js
// Callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}

// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}

console.log(cube(callback, 3))
```

### Retruning function
> Higher order functions return function as a value
```js
// Higher order function returning an other function
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))
```
Let us see were we use call back functions. For instance the forEach method uses call back.
```js
const nums = [1,2,3,4,5]
const sumArr = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum
}
console.log(sumArr(numbers)) // 15
```
Simplefy above example:
```js
const nums = [1,2,3,4]
const sumArr = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum
}
console.log(sumArr(nums)) // 15
```

### Setting time
> JavaScript provides two methods for executing activities in a certain interval or after waiting for a specific amount of time. 
- setInterval 
- setTimeout.

**Setting Interval using a setInterval function**
> In JavaScript, setInterval is a higher-order function used to execute an activity continuously at specified intervals. It takes a callback function and a duration (in milliseconds) as parameters, ensuring that the callback is invoked repeatedly at the specified interval.
```js
// Syntax
function callback() {
  // block of code
}
setInterval(callback, duration)
```
```js
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s
```

**Setting a time using a setTimeout**
> In JavaScript, setTimeout is a higher-order function used to execute an action at a specified time in the future. It takes a callback function and a duration (in milliseconds) as parameters, with the callback being invoked after the specified time duration.
```js
// Syntax
function callback() {
  // block of code
}
setTimeout(callback, duration) // duration in milliseconds
```
```js
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.
```

## Functional Programming
> In JavaScript, modern versions provide built-in methods such as forEach, map, filter, reduce, find, every, some, and sort, which offer efficient solutions to complex problems. These methods operate by taking callback functions as arguments.

### forEach
> forEach is a method used to iterate over the elements of an array in JavaScript.
- It exclusively applies to arrays and takes a callback function as its parameter, which includes elements, index, and optionally, the array itself.

```js
arr.forEach(function(element, index, arr) {
  console.log(index, element, arr)
})
// The above code can be written using arrow function
arr.forEAch((element, index, arr) => {
  console.log(index, element, arr)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))
```
```js
let sum = 0
const number = [1,2,3,4,5]
number.forEach(num => console.log(num))
console.log(sum)
```
```js
let sum = 0
const number = [1,2,3,4,5]
number.forEach(num => sum += num)
console.log(sum) // 15
```
```js
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach(element => console.log(element.toUpperCase()))
```

### map
> map is a method used to iterate over the elements and modify the array elements.
- It takes a callback function with elements, index , array parameter and return a new array.
```js
const modifiedArray = arr.map(function (element, index, arr) {
  return element
})
// Array function and explicit return
const modifiedArray = arr.map((element, index) => element)
```
```js
const numbers = [1,2,3,4,5]
const numbersSquare = numbers.map(num => num*num)
console.log(numbersSquare) // [1,4,9,16,25]
```
```js
const stack = ['JavaScript', 'ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB']
const stackToUpperCase = stack.map(lang => lang.toUpperCase())
console.log(stackToUpperCase) // ['JAVASCRIPT', 'REACTJS', 'NODEJS', 'EXPRESSJS', 'MONGODB']
```

### filter
> filter out items which full fill filtering conditions and return a new array.
```js
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const countriesContainLand = countries.filter(country => country.includes('land'))
console.log(countriesContainLand) // ['Finland', 'Ireland']

const countriesEndByia = countries.filter(country => country.endsWith('ia'))
console.log(countriesEndByia) // ['Albania', 'Bolivia', 'Ethiopia']
```

### reduce
> Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value.
- It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array `first value`. If our array is an *empty array*, then `Javascript` will throw an error.
```js
// Syntax
arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
  return
}, initialValue)
```
```js
const numbers = [1,2,3,4,5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum) // 15
```

### every
> every is a method check if all the elements are similar in one aspect. It return boolean.
```js
const even = [2,4,6,8]
const areEven = even.every((num) => num % 2 === 0)
console.log(areEven) // true
```
```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?
console.log(areAllStr) // true
```

### find
> find is a method return the first element which satisfies the condition.
```js
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find(age => age < 20)
console.log(age) // 18
```

### findIndex
> findIndex method return the position of the first element which satisfies the condition
```js
const ages = [24, 22, 25, 32, 35, 18]

const age = ages.findIndex(age => age < 20)
console.log(age) // 5
```

### some
> some method check if some of the elements are similar in one aspect. It returns boolean.
```js
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) => b === true)
console.log(areSomeTrue) // true
```

### sort
> sort method used to arrange the array elements either ascending or descending order.
- By default, it sorts values as strings, which may lead to incorrect results when sorting numbers.
- The method modifies the original array, so it's advisable to create a copy of the original data before applying the sort method.

**Sorting string values**
```js
const products = ['Milk', 'Coffee', 'Suger', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Suger']
// Now the original products array is also sorted
```

**Sorting numeric values**
> In JavaScript, the `sort` method converts items to strings by default when sorting numbers. To ensure correct numerical sorting, a compare callback function inside the `sort` method is used, returning a negative, zero, or positive value based on element comparison.
```js
const numbers = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b
})

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort((a, b) => b - a)
console.log(numbers) //[100, 37, 9.81, 3.14]
```

**Sorting Objct Arrays**
> Whenever we sort objects in an array, we use the object key to compare.
```js
objArr.sort(function(a,b) {
  if(a.key < b.key) return -1
  if(a.key > b.key) return 1
  return 0
})
// OR
objArr.sort(function(a,b) {
  if(a['key'] < b['key']) return -1
  if(a['key'] > b['key']) return 1
  return 0
})
```
```js
const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a,b) => {
  if(a.age < b.age) return -1
  if(a.age > b.age) return 1
  return 0
})
console.log(users) // sorted ascending
// [{…}, {…}, {…}, {…}]
```
---
> Thank you for reading the summary of ***Introduction***. Please proceed to the exercises section and complete them on your own. If you need **hints** or **solutions**, refer to the ***[Exercises.js](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/blob/main/Day%2009/Exercises.js)*** file.

[< Previous](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2008) | [Next >](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2010)