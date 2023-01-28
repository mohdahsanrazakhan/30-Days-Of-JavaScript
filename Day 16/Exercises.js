/* Exercise level 1 */

// Question 1: Change skills array to JSON using JSON.stringigy()
const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']

const JSONskills = JSON.stringify(skills, undefined, 4)
console.log(JSONskills)

// Question 2: Stringify the age variable
let age = 250;

const JSONage = JSON.stringify(age, undefined, 4)
console.log(JSONage)

// Question 3: Stringify the isMarried variable
let isMarried = true

const JSONisMarried = JSON.stringify(isMarried, undefined, 4)
console.log(JSONisMarried)

// Question 4: Stringify the student object
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}


const JSONstuent = JSON.stringify(student, undefined, 4)
console.log(JSONstuent)



/* Exercise level 2 */

// Question 1: Stringify the students object with only firstName, lastName and skills properties
const JSONfilterStudent = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(JSONfilterStudent)



/* Exercise level 3 */

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// Question 1: Parse the txt JSON to object.
const txtObj = JSON.parse(txt, undefined, 4)
console.log(txtObj)