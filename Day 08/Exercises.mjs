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
const Users = {
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
const userArray = Object.entries(Users);

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
Users.Mark = {
    email: 'mark@mark.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node', 'Express'],
    age: 21,
    isLoggedIn: true,
    points: 50
}

// Question 5: Get all keys or properties of users object
console.log(Object.keys(Users));

// Question 6: Get all the values of users object
console.log(Object.values(Users));

// Question 7: Use the countries object to print a country name, capital, populations and languages.
import countries_data from '../countries_data.mjs'

const getCountriesInfo = () => {
    for(let i = 0; i < countries_data.length; i++) {
        console.log(`Country Name: ${countries_data[i]['name']}\nCapital: ${countries_data[i]['capital']}\nPopulations: ${countries_data[i]['population']}\nLanguages: ${countries_data[i]['languages']}`)
    }
}

getCountriesInfo();


/* Exercises Level 3 */

// Question 1: Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName: 'Alex',
    lastName: 'Martin',
    incomes: [],
    expenses: [],

    totalIncome() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
    totalExpense() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
    accountInfo() {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Total Income: $${this.totalIncome()}`);
        console.log(`Total Expense: $${this.totalExpense()}`);
        console.log(`Account Balance: $${this.accountBalance()}`);
    },
    addIncome(description, amount) {
        this.incomes.push({description, amount});
    },
    addExpense(description, amount) {
        this.expenses.push({description, amount});
    },
    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
};

personAccount.addIncome('Salary', 25000);
personAccount.addExpense('Rent', 5000);
personAccount.addExpense('Groceries', 2000);
personAccount.accountInfo();

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
let username = 'Bob'
let password = '1010'
let email = 'bob@box.com'
let logged = false;
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(newUser) {
    const existingUser = users.find(user => user.email === newUser.email);
    if(existingUser) {
        console.log('User already exists. Please log in.');
    } else {
        users.push(newUser);
        console.log('User signed up successfully!');
    }
}

// b. Create a function called signIn which allows user to sign in to the application
function signIn(email, password) {
    const user = users.find(user => user.email === email && user.password === password);
    if(user) {
        user.isLoggedIn = true;
        console.log(`Welcome back, ${user.username}!`);
    } else {
        console.log('Incorrect email or password. Please try again.');
    }
}

const newUser = {
    _id: 'xyz123',
    username: 'Bob',
    email: 'bob@box.com',
    password: 'pwd123',
    createdAt: '08/15/2023 10:30 AM',
    isLoggedIn: false
};

signUp(newUser)
signIn('bob@box.com', 'pwd123')


// Question 3: The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product 
function rateProduct(productId, userId, rating) {
    const product = products.find(product => product._id === productId);
    if(product) {
        product.ratings.push({userId, rate: rating});
        console.log(`Product ${productId} rated successfully by user ${userId}`);
    } else {
        console.log(`Product ${productId} not found`);
    }
}

// b. Create a function called averageRating which calculate the average rating of a product
function averageRating(productId) {
    const product = products.find(product => product._id === productId)
    if(product) {
        const totalRating = product.ratings.reduce((sum, rating) => sum + rating.rate, 0);
        const average = totalRating / product.ratings.length;
        console.log(`Average rating of product ${productId}: ${average.toFixed(2)}`);
    } else {
        console.log(`Product ${productId} not found`);
    }
}

// Qeustion 4: Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(productId, userId) {
    const product = products.find(product => product._id === productId);
    if(product) {
        const userIndex = product.likes.indexOf(userId);
        if(userIndex === -1) {
            product.likes.push(userId);
            console.log(`Product ${productId} liked by user ${userId}`);
        } else {
            product.likes.splice(userIndex, 1);
            console.log(`Product ${productId} unliked by user ${userId}`);
        }
    } else {
        console.log(`Product ${productId} not found`);
    }
}

rateProduct('eedfcf', 'xyz123', 4.2);
averageRating('eedfcf');
likeProduct('eedfcf', 'xyz123');