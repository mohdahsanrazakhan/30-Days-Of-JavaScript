/* Exercise Level 1 */

// Question 1: Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName', 'Md')
localStorage.setItem('lastName', 'Khan')
localStorage.setItem('age', 200)
localStorage.setItem('country', 'India')
localStorage.setItem('city', 'Pyrj')

/* Exercise Level 2 */

// Question 1: Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const studentObj = {
    firstName: 'Md',
    lastName: 'Khan',
    age: 200,
    skills: ['HTML', 'CSS', 'JS', 'Node', 'Express', 'jQuery'],
    country: 'India',
    enrolled: true
}
const studentData = JSON.stringify(studentObj, undefined, 4)
localStorage.setItem('studentObj', studentData)

/* Exercise Level 3 */

// Question 1: Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount = {
    firstName: 'Md',
    lastName: 'Khan',
    incomes: {
        totalIncome: 100000,
        addIncome: [100000, 4000, 50000],
        descIncome: 'This a temp income'
    },
    expenses: {
        totalExpense: 50000,
        addExpenses: [60000, 45000, 32030],
        descExpenses: 'This a temp expenses'

    },
    accountInfo: {
        accountBalance: 150000
    }
}
const accountData = JSON.stringify(personAccount, undefined, 4)
localStorage.setItem('accountData', personAccount)
