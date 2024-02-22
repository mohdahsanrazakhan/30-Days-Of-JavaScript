# Objects -

## Scope
> Scope determines where the variables are declared/defined and where they can be accessed.
- There are two types of scope:
  - Global Scope
  - Local Scope

### Window Global Object


### Global Scope
> A globally declared variable can be accessed every where in the same file.
```js
let js = "JavaScript" // global scoped variable
function letsLearnScope() {
  console.log(js) // JavaScript - accessible inside a function
  if(true) {
    js = "Script"
    console.log(js) // Script
  }
  console.log(js) // Script
}
letsLearnScope()
console.log(js) // Script
```

### Local Scope
> A locally declared variable can be accessed only in certain block of code.
- Function Scope
- Block Scope
```js
let js = "JavaScript" // global scope variable
// function scope
function letsLearnScope() {
  console.log(a) // JavaScript - accessibla inside a function
  let isLocal = true
  if(true) {
    let py = "Python"
    isLocal = !isLocal
    console.log(py, isLocal) // Python false
  }
  console.log(js, isLocal) // JavaScript false - Uncaught ReferenceError: py is not defined

}
letsLearnScope()
console.log(js) // JavaScript - Uncaught ReferenceError: py and isLocal is not defined

```

**Note**: A variable declared with *var* creates a function-scoped variable, whereas *let* and *const* creates a block-scoped.

## Object
> An object is a datatype that allows you to store key-value pairs.

### Creating an empty object
```js
const person = {}
```

### Creating an objecting with values
- The value of properties or keys could be a string, number, boolean, an object, null, undefined or a function.
```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 25,
  country: 'Finland',
  city: 'Helsinki',
  isMarried: true,
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB'
  ],
  car: {
    brand: 'BMW',
    model: 'iX1'
  }
}
console.log(person)
```

### Getting values from an object
- We can access values of object using two methods:
  - using dot (.) followed by key name, if the key-name is a one word
  - using square ([]) bracket and a quote ('')
```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 25,
  country: 'Finland',
  city: 'Helsinki',
  isMarried: true,
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB'
  ],
  car: {
    brand: 'BMW',
    model: 'iX1'
  },
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  },
  'phone number': '+3584545454545'
}
console.log(person)

// Accessing values using dot (.) 
console.log(person.firstName)
console.log(person.location) // undefined

// Accessing values using square ([]) brackets and key name
console.log(person['phone number'])
console.log(person['location']) // undefined
```

### Creating object methods
> Object methods are functions defined within objects.
- `this` keyword within an object method refers to the object itself, allowing access to its properties.
- Arrow functions cannot be used as object methods because `this` refers to the window object, not the object itself.
```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.getFullName()) // Asabeneh Yetayeh
```

### Setting new key for an object
> Object is a mutable data type allowing modification of its content after creation.
```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person) // Asabeneh Yetayeh is a teacher.
console.log(person.getPersonInfo()) 
// He lives in Finland.
// He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.
```

### Object Methods
> There are different methods to manipulate an object. Let see some methods:

`Object.assign`: To copy an object without modifying the original object.
```js
const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

const copyPerson = Object.assign({}, person)
console.log(copyPerson)
```

**Getting object keys using `Object.keys()`**

`Object.keys`: To get the keys or properties of an object as an array.
```js
const keys = Object.keys(copyPerson)
console.log(keys) // ['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address) 
console.log(address) // ['street', 'pobox', 'city']
```

**Getting object values using `Object.value()`**

`Object.value`: To get values of an object as an array.
```js
const values = Object.values(copyPerson)
console.log(values)
```

**Getting object keys and values using `Object.entries()`**

`Object.entries`: To get the keys and values in an array.
```js
const entries = Object.entries(copyPerson)
console.log(entries)
```

**Checking properties using `hasOwnProperty()`

`hasOwnProperty`: To check if a specific key or property exist in an object.
```js
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))
```
---
> Thank you for reading the summary of ***Introduction***. Please proceed to the exercises section and complete them on your own. If you need **hints** or **solutions**, refer to the ***[Exercises.js](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/blob/main/Day%2008/Exercises.js)*** file.

[< Previous](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2007) | [Next >](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2009)