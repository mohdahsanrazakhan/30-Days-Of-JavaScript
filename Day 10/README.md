# Sets and Maps -

## Set
> Set is a collection of unique elements.

### Creating an empty set
```js
const companies = new Set()
console.log(companies) // Set(0) {size: 0}
```

### Creating set from array
```js
const languages = ['C++', 'Python', 'Java', 'Python', 'C', 'C++', 'Java', 'C']
const setOfLanguages = new Set(languages)
console.log(setOfLanguages) // Set(4) {'C++', 'Python', 'Java', 'C'}
```
*Set is an iterable object and we can iterate through each elements.*
```js
for(const language of setOfLanguages) {
  console.log(language)
}
// C++
// Python
// Java
// C
```

### Adding element to a set
- We can add element to a set using `add()`
```js
const stack = new Set()

stack.add('ReactJS')
stack.add('NodeJS')
stack.add('ExpressJS')
stack.add('MongoDB')
console.log(stack) // Set(4) {'ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB'}
console.log(stack.size) // 4
```
*Using loop to add element*
```js
const languages = ['C++', 'Python', 'Java', 'Python', 'C', 'C++', 'Java', 'C']
let setOfLanguages = new Set()
for(let language of languages) {
  setOfLanguages.add(language)
}
console.log(setOfLanguages) // Set(4) {'C++', 'Python', 'Java', 'C'}
```

### Deleting element
- We can delete element from a set using `delete()`
```js
console.log(setOfLanguages.delete('Python')) // true
console.log(setOfLanguages.size) // 3
```

### Checking element
- `has()` can help to know if an element exist in a set or not.
```js
console.log(setOfLanguages.has('C++')) // true
console.log(setOfLanguages.has('JavaScript')) // false
```

### Clearing the set
- `clear()` can removes all the elements from a set.
```js
setOfLanguages.clear()
console.log(setOfLanguages) // Set(0) {}
```

### Union of sets
> To find a union to two sets can be achieved using spread operator.
```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C) // Set(6) {1, 2, 3, 4, 5, 6}
```

### Intersection of sets
> To find an intersection of two sets can be achieved using filter.
```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C) // Set(3) {3, 4, 5}
```

### Difference of sets
> To find an the difference between two sets can be achieved using filter.
```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

console.log(C) // Set(2) {1, 2}
```

## Map

### Creating an empty Map
```js
const map = new Map()
console.log(map) // Map(0) {}
```

### Creating an Map from array
```js
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map) // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(map.size) // 3
```

### Adding values to the Map
```js
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap) // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(countriesMap.size) // 3
```

### Getting a value from Map
```js
console.log(countriesMap.get('Finland')) // Helsinki
```

### Checking key in Map
Check if a key exists in a map using `has()`. It returns true or false.
```js
console.log(countriesMap.has('Finland')) // true
```
*Getting all values from map using loop*
```js
for (const country of countriesMap) {
  console.log(country)
}
// (2) ["Finland", "Helsinki"]
// (2) ["Sweden", "Stockholm"]
// (2) ["Norway", "Oslo"]
```
```js
for (const [country, city] of countriesMap){
 console.log(country, city)
}
// Finland Helsinki
// Sweden Stockholm
// Norway Oslo
```
---
> Thank you for reading the summary of ***Sets and Maps***. Please proceed to the exercises section and complete them on your own. If you need **hints** or **solutions**, refer to the ***[Exercises.js](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/blob/main/Day%2010/Exercises.js)*** file.

[< Previous](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2009) | [Next >](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2011)