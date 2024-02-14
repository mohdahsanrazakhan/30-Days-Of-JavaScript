# Arrays -

## Arrays
> An arrays allows you to store multiple values in a single variable. In other hand, an array is a collection of different data types which are ordered and changeable(modifiable)
- Each value in an array has an index.
- Each index has a *reference in a memory address*.
- Value can be accessed by using their indexes. 
- The index of an array starts from zero, and the index of the last element is less by one from the length of the array.

### How to create an empty array
Lets see the different ways to create an array.
- Using array constructor
```js
// Syntax
const arr = Array()
console.log(arr)
```
or
```js
// Syntax
const arr = new Array()
console.log(arr)
```
- Using square brackets ([])
```js
// Syntax = Recommended way
const arr = []
console.log(arr)  
```

### How to create an array with values
Using `length` property to find the length of an array.
```js
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies

console.log("Web technologies -", webTechs)
console.log("Number of web technologies are -", webTechs.length) // Number of web technologies are - 7
```
Array store multiple datatypes value.
```js
const info = [
  '30 Days Of JavaScript', 
  30, 
  {tech: 'JavaScript'}, 
  { mernStack: ['MongoDB', 'Express', 'React', 'Node']}, 
  true
]
console.log(info)
```

### Creating an array using split
An `split()` method can change the string into an array.
```js
const js = 'JavaScript'
console.log(js.split('')) // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

const faang = 'Facebook, Amazon, Apple, Netflix, Google'
console.log(faang.split(',')) // ['Facebook', ' Amazon', ' Apple', ' Netflix', ' Google']

const lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
console.log(lorem.split(' ')) // ['Lorem', 'Ipsum', 'is', 'simply', 'dummy', 'text', 'of', 'the', 'printing', 'and', 'typesetting', 'industry.']
```

### Accessing array items using index
We can access every element in an array using index. Array index starts from 0 and ends length of array minus one.
```js
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React']
console.log(webTechs) // ['HTML', 'CSS', 'JavaScript', 'React']
console.log(webTechs[0]) // HTML
console.log(webTechs[webTechs.length - 1]) // React
```

### Modifying array element
An array is mutable(modified). Once an array is created, we can modify the contents of the array elements.
```js
const webTechs = ['HTML', 'CSS', 'JavScript', 'React']
let lastIndex = webTechs.length - 1
webTechs[2] = 'JavaScript'
webTechs[lastIndex] = 'ReactJS'
console.log(webTechs) // ['HTML', 'CSS', 'JavaScript', 'ReactJS']
```

### Methods to manipulate array
For manipulating an array, we have different methods:
`Array`, `length`, `concat`, `indexOf`, `slice`, `splice`, `join`, `toString`, `includes`, `lastIndexOf`, `isArray`, `fill`, `push`, `pop`, `shift`, `unshift`

**Array Constructor**:
> `Array` method is used to create an array.
```js
const arr = Array() // creates an an empty array
console.log(arr)

const multipleEmptyValues = Array(5) // it creates five empty values
console.log(multipleEmptyValues) // [empty x 5]
```

**Creating static values with fill**:
> `fill`: Fill all the array elements with a static value.
```js
const five0value = Array(5).fill(0)
console.log(five0value) // [0, 0, 0, 0, 0]
```

**Concatenating array using concat**:
> `concat`: To concatenate two arrays.
```js
const basicTechs = ['HTML', 'CSS']
const advanceTechs = ['JavaScript']
const webTechs = basicTechs.concat(advanceTechs)
console.log(webTechs) // ['HTML', 'CSS', 'JavaScript']
```

**Getting array length**
> `length`: To know the size of the array.
```js
const numbers = [-1, 0, 1, 3.14]
console.log(numbers.length) // 4
```

**Getting index an element in array array**
> `indexOf`: To check if an item exist in an array. If it exists it returns the index else it returns -1.
```js
const numbers = [-1, 0, 1, 3.14]
console.log(numbers.indexOf(0)) // 1
console.log(numbers.indexOf(3.15)) // -1
```
Check an element if it exist in an array.
```js
const sevenWonders = ['Great Wall of China', 'Chichén Itzá', 'Petra', 'Machu Picchu', 'Christ the Redeemer', 'Colosseum', 'Taj Mahal'];
let index = sevenWonders.indexOf('Taj Mahal')

index === -1 ? console.log('Not in the seven wonders') : console.log(`${sevenWonders[index]} is in the seven wonders`)
```

**Getting last index of an element in array**:
> `lastIndexOf`: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
```js
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) //  6
```

> `includes`: To check if an item exist in an array. If it exist it returns the true else it returns false.
```js
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
console.log(webTechs.includes('Node'))  // true
console.log(webTechs.includes('C'))     // false
```

**Checking array**:
> `Array.isArray`: To check if the data type is an array.
```js
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

const number = 100
console.log(Array.isArray(number)) // false
```

**Converting array to string**:
> `toString`: Converts array to string.
```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook
```

**Joining aarray elements**:
> `join`: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook
```

**Slice array elements**:
> `slice`: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
```js
const numbers = [1,2,3,4,5]

  console.log(numbers.slice()) // -> it copies all  item
  console.log(numbers.slice(0)) // -> it copies all  item
  console.log(numbers.slice(0, numbers.length)) // it copies all  item
  console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position
```

**Splice method in array**:
> `splice`: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
```js
const numbers = [1, 2, 3, 4, 5]
  numbers.splice()
  console.log(numbers) // -> remove all items
```
```js
  const numbers = [1, 2, 3, 4, 5]
	numbers.splice(0,1)
  console.log(numbers) // remove the first item
```
```js
  const numbers = [1, 2, 3, 4, 5, 6]
	numbers.splice(3, 3, 7, 8, 9)
  console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] // it removes three item and replace three items
```

**Adding item to an array using push**
> `push`: adding item in the end. To add item to the end of an existing array we use the push method.
```js
// syntax
const arr  = ['item1', 'item2','item3']
arr.push('new item')
console.log(arr)
// ['item1', 'item2','item3','new item']
```
```js
const numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers) // -> [1,2,3,4,5,6]
```

**Removing the end element using pop**:
> `pop`: Removing item in the end.
```js
const numbers = [1, 2, 3, 4, 5]
numbers.pop() 
console.log(numbers) // -> [1,2,3,4]
```

**Removing an element from the beginning**
> `shift`: Removing one array element in the beginning of the array.
```js
const numbers = [1, 2, 3, 4, 5]
numbers.shift()
console.log(numbers) // -> [2,3,4,5]
```

**Add an element from the beginning**:
> `unshift`: Adding array element in the beginning of the array.
```js
const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0) 
console.log(numbers) // -> [0,1,2,3,4,5]
```

**Reversing array order**:
> `reverse`: reverse the order of an array.
```js
const numbers = [1, 2, 3, 4, 5]
numbers.reverse() 
console.log(numbers) // [5, 4, 3, 2, 1]
```

**Sorting elements in array**:
> `sort`: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.
```js
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']

webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse() // after sorting we can reverse it
console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
```

### Array of arrays
Array can store different data types including an array itself.
```js
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
```
---
> Thank you for reading the summary of ***Introduction***. Please proceed to the exercises section and complete them on your own. If you need **hints** or **solutions**, refer to the ***[Exercises.js](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/blob/main/Day%2005/Exercises.mjs)*** file.

[< Previous](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2004) | [Next >](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2006)