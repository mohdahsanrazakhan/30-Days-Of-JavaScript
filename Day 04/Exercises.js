/* Exercises Level 1 */

// Question 1: Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
/*
Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
*/
let userAge = prompt("Enter your age:");
if (userAge >= 18) {
    console.log('You are old enough to drive.');
}
else {
    console.log(`You are left with ${18 - userAge} years to drive.`);
}

// Question 2: Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/*
Enter your age: 30
You are 5 years older than me.
*/
let myAge = 21;
let yourAge = prompt("Enter your age: ");
if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`)
}
else {
    console.log(`You are ${yourAge - myAge} years older than me.`)
}

// Question 3: If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
/**
 * using if else
 * ternary operator.
    let a = 4
    let b = 3

    4 is greater than 3
*/
let a = 4, b = 3;
// Using if...else
if (a > b) {
    console.log(`${a} is greater than ${b}`);
}
else {
    console.log(`${a} is less than ${b}`);
}
// Using Ternary Operator
a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);

// Question 4: Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
/*
Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
*/
let num = prompt("Enter a number", "0");
if (num % 2 == 0) {
    console.log(`${num} is an even number`);
}
else {
    console.log(`${num} is an odd number`);
}



/* Exercises Level 2 */

// Question 1: Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let score = prompt("Enter you score");
if (score <= 100 || score >= 80) {
    console.log("Your grade is 'A'");
}
else if (score <= 79 || score >= 70) {
    console.log("Your grade is 'B'");
}
else if (score <= 69 || score >= 60) {
    console.log("Your grade is 'C'");
}
else if (score <= 59 || score >= 50) {
    console.log("Your grade is 'D'");
}
else if (score <= 49 || score >= 0) {
    console.log("Your grade is 'F'");
}
else {
    console.log("Negative score");
}

// Question 2: Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let month = prompt("Enter month name", "Like: January,...");
switch (true) {
    case month == 'September' || month == 'October' || month == 'November':
        console.log("The season is Autumn.");
        break;
    case month == 'December' || month == 'January' || month == 'February':
        console.log("The season is Winter.");
        break;
    case month == 'March' || month == 'April' || month == 'May':
        console.log("The season is Spring.");
        break;
    case month == 'June' || month == 'July' || month == 'August':
        console.log("The season is Summer.");
        break;
    default:
        console.log("No month exist.");
        break;
}

// Question 3: Check if a day is weekend day or a working day. Your script will take day as an input.
/*
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/
let tempDay = prompt("What is the day today? ");
let day = tempDay.charAt(0).toUpperCase() + tempDay.slice(1).toLowerCase();
if (day == 'Saturday' || day == 'Sunday') {
    console.log(`${day} is a weekend.`)
}
else {
    console.log(`${day} is a working day.`)
}



/* Exercises Level 3 */

// Question 1: Write a program which tells the number of days in a month.
/*
Enter a month: January
January has 31 days.

Enter a month: JANUARY
January has 31 day

Enter a month: February
February has 28 days.

Enter a month: FEbruary
February has 28 days.
*/
let mos = prompt("Enter months name:");
let months = mos.charAt(0).toUpperCase() + mos.slice(1).toLowerCase();
switch (true) {
    case months == 'January':
        console.log(`${months} has 31 days.`);
        break;
    case months == 'February':
        console.log(`${months} has 28 days.`);
        break;
    case months == 'March':
        console.log(`${months} has 31 days.`);
        break;
    case months == 'April':
        console.log(`${months} has 30 days.`);
        break;
    case months == 'May':
        console.log(`${months} has 31 days.`);
        break;
    case months == 'June':
        console.log(`${months} has 30 days.`);
        break;
    case months == 'July':
        console.log(`${months} has 31 days.`);
        break;
    case months == 'August':
        console.log(`${months} has 31 days.`);
        break;
    case months = 'September':
        console.log(`${months} has 30 days.`);
        break;
    case months = 'October':
        console.log(`${months} has 31 days.`);
        break;
    case months = 'November':
        console.log(`${months} has 30 days.`);
        break;
    case months = 'December':
        console.log(`${months} has 31 days.`);
        break;
    default:
        console.log("No more months...");
}

// Question 2: Write a program which tells the number of days in a month, now consider leap year.
let year = prompt("Enter year:");
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log(`${year} is a leap year.`);
        }
        else {
            console.log(`${year} is not a leap year.`);
        }
    }
    else {
        console.log(`${year} is a leap year.`);
    }
}
else {
    console.log(`${year} is not a leap year.`);
}