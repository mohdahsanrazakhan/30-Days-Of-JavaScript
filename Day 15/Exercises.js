/* Exercise Level 1 */

// Question 1: Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    details() {
        console.log(`Animal name is ${this.name}, age is ${this.age}, color is ${this.color}, and it has ${this.legs} legs.`)
    }
}
const animal1 = new Animal('Goggly', 2, 'brown', 4)
console.log(animal1)
console.log(animal1.details())

// Question 2: Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs)
        this.breed = breed;
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, sound) {
        super(name, age, color, legs)
        this.sound = sound
    }
}


const dog1 = new Dog('Leo', 1, 'black', 4, 'neapolitan mastiff');
const cat1 = new Cat('Tom', 1, 'grey', 4, 'meow-meow');
console.log(dog1)
console.log(cat1)



/* Exercise level 2 */

// Question 1: Override the method you create in Animal class
class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    details() {
        console.log(`Animal name is ${this.name}, age is ${this.age}, color is ${this.color}, and it has ${this.legs} legs.`)
    }
}

class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs)
        this.breed = breed;
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, sound) {
        super(name, age, color, legs)
        this.sound = sound
    }
}

const animal2 = new Animal('Goggly', 2, 'brown', 4)
console.log(animal1)
console.log(animal1.details())
const dog2 = new Dog('Leo', 1, 'black', 4, 'neapolitan mastiff');
const cat2 = new Cat('Tom', 1, 'grey', 4, 'meow-meow');
console.log(dog1)
console.log(cat1)