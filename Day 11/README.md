# Destructuring and Spreading -

## Destructuring and Spread
> Destructuring is a way to extract element from an array or object and assign them to individual/distinct variable variables.

### Destructing Arrays
```js
const stack = ['JavaScript', 'ReactJS', 'NodeJS', 'ExpressJS', 'TypeScript']
let [js, react, node, ex, ts] = stack
console.log(js, react, node, ex, ts) // JavaScript ReactJS NodeJS ExpressJS TypeScript
```
```js
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack

console.log(frontEnd) // ["HTML", "CSS", "JS", "React"]
console.log(backEnd) // ["Node", "Express", "MongoDB"]
```
To skip a value in an array without removing its place, simply add a comma to retain the position:
```js
  const numbers = [1, 2, 3]
  let [numOne, , numThree] = numbers //2 is omitted

  console.log(numOne, numThree) // 1 3
```
We can use default value in case the value of array for that index is undefined:
```js
const stack = [undefined, 'TypeScript']
let [
  firstTech = 'JavaScript',
  secondTech,
  thirdTech = 'ReactJS'
] = names

console.log(firstTech, secondTech, thirdTech) // JavaScript TypeScript ReactJS 
```
You can destructure the first few elements of the array and use the spread operator to capture the remaining elements succinctly:
```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3); // 1 2 3
console.log(rest); // [4, 5, 6, 7, 8, 9, 10]
```

### Destructuring during iteration
> Destructuring during iteration allows you to extract values from arrays or objects directly within a loop construct.
```js
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}
// Finland Helsinki
// Sweden Stockholm
// Norway Oslo
```

### Destructuring Object
> To destructure an object, you need to use variable names that correspond to the keys of the object.
```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200
};

const { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter); // 20 10 200 undefined
```

### Renaming during structuring
> In JavaScript, you can rename variables during object destructuring by using the syntax `key: newName`.
```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200
};

const { width: w, height: h, area: a, perimeter: p } = rectangle;

console.log(w, h, a, p); // 20 10 200 undefined
```
You can provide default values during object destructuring to handle cases where the key might not exist in the object.
```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200
};

const { width = 0, height = 0, area = 0, perimeter = 0 } = rectangle;

console.log(width, height, area, perimeter); // 20 10 200 0
```

### Object parameter without destructuring
```js
// Without destructuring
const rect = {
  width: 20,
  height: 10
}
const calculatePerimeter = rectangle => {
  return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect)) // 60
```
### Object parameter with destructuring
```js
// With destructuring
const calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height)
}

console.log(calculatePerimeter(rect)) // 60
```

### Destructuring object during iteration
```js
const todoList = [
{
  task:'Prepare JS Test',
  time:'4/1/2020 8:30',
  completed:true
},
{
  task:'Give JS Test',
  time:'4/1/2020 10:00',
  completed:false
},
{
  task:'Assess Test Result',
  time:'4/1/2020 1:00',
  completed:false
}
]

for(let {task, time, completed} of todoList) {
  console.log(task, time, completed)
}
// Prepare JS Test 4/1/2020 8:30 true
// Give JS Test 4/1/2020 10:00 false
// Assess Test Result 4/1/2020 1:00 false
```

## Spread and Rest Operator
- The spread and rest operators are both features introduced in ECMAScript 2015 (ES6) to handle arrays and objects more conveniently in JavaScript.
- Both are denoted by three dots (`...`)

### Spread Operator
> Spread operator is used to expand or spread the elements of an iterable (such as array, string, or object) into individual elements.
- The spread operator can be used in various contexts:
  - Array Literals:
    ```js
    const arr1 = [1,2,3]
    const arr2 = [...arr1, 4, 5, 6] // arr2 get the rest of arr1 elements
    console.log(arr2) // [1,2,3,4,5,6]
    const arr3 = [...arr2] // copy all elements of arr2 in arr3
    console.log(arr3) // [1,2,3,4,5,6]
    ```
  - Function Calls:
  ```js
  const numbers = [1,2,3]
  console.log(Math.max(...numbers)) // 3
  ```
  - Object Literals:
  ```js
  const obj1 = {x: 1, y: 2}
  const obj2 = {...obj1, z: 3}
  console.log(obj2) // {x: 1, y: 2, z: 3}
  const obj3 = {...obj2} // copy an object using spread operator
  console.log(obj3) // {x: 1, y: 2, z: 3}
  const obj4 = {...obj3, x: 100} // modifying or changing the object while copying
  console.log(obj4) // {x: 100, y: 2, z: 3}
  ```

### Rest Operator
> Rest operator is used in function parameters to collect all remaining arguments into an array.
```js
function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0)
}
console.log(sum(1,2,3,4,5)) // 15
```
---
> Thank you for reading the summary of ***Spread and Rest Operator***. Please proceed to the exercises section and complete them on your own. If you need **hints** or **solutions**, refer to the ***[Exercises.js](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/blob/main/Day%2011/Exercises.js)*** file.

[< Previous](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2010) | [Next >](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2012)