/* Exercises: Level 1 */

// Question 1: Create an empty object called dog
const dog = {}

// Question 2: Print the the dog object on the console
console.log(dog)

// Question 3: Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Jimmy'
dog.legs = 4
dog.color = 'Black n White'
dog.age = 2
dog.bark = 'woof woof'
console.log(dog.bark);

// Question 4: Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark);

// Question 5: Set new properties the dog object: breed, getDogInfo
dog.breed = 'Dalmatian'
dog.getDogInfo = function () {
    let height = '20 cm'
    let weight = '7 kg'
    let lifeSpan = '10 - 13 years';
}
console.log(dog);



/* Exercises: Level 2 */
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
const userArray = Object.entries(users);

// Question 1: Find the person who has many skills in the users object.
var mxSkill = 0, mxName = '';
for (let i = 0; i < userArray.length; i++) {
    if (userArray[i][1]['skills'].length > mxSkill) {
        mxSkill = userArray[i][1]['skills'].length
        mxName = userArray[i]
    }
}
console.log(mxName[0]);

// Question 2: Count logged in users, count users having greater than equal to 50 points from the following object.

var cnt = 0, pointCnt = 0;
for (let i = 0; i < userArray.length; i++) {
    if (userArray[i][1]['isLoggedIn']) {
        cnt++;
    }
    if (userArray[i][1]['points'] >= 50) {
        pointCnt += 1;
    }
}
console.log(`Total logged in users are ${cnt}\nTotal users having greater than equal to 50 points are ${pointCnt}`);

// Question 3: Find people who are MERN stack developer from the users object
var mern = ['MongoDB', 'Express', 'React', 'Node'], mernDev = [];
for (let i = 0; i < userArray.length; i++) {
    let generalArray = userArray[i][1]['skills'];
    let intersection = mern.filter(x => generalArray.includes(x));
    if (JSON.stringify(mern) === JSON.stringify(intersection)) {
        mernDev.push(userArray[i][0]);
    }
}
console.log(mernDev)

// Question 4: Set your name in the users object without modifying the original users object
users.Mark = {
    email: 'mark@mark.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node', 'Express'],
    age: 21,
    isLoggedIn: true,
    points: 50
}

// Question 5: Get all keys or properties of users object
console.log(Object.keys(users));

// Question 6: Get all the values of users object
console.log(Object.values(users));

// Question 7: Use the countries object to print a country name, capital, populations and languages.



/* Exercises Level 3 */

// Question 1: Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]
// Imagine you are getting the above users collection from a MongoDB database. 
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

// Question 3: The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

// Qeustion 4: Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.