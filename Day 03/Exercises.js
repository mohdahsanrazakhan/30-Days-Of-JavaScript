/* Exercises Level 1 */

// Question 1: Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Mark";
let lastName = "Albatross";
let country = "India";
let city = "Delhi"
let age = 21;
let isMarried = false;
let year = 2022;
console.log(`${typeof (firstName)}\n${typeof (lastName)}\n${typeof (age)}\n${typeof (year)}`);
console.log(`${typeof (country)}\n${typeof (city)}\n${typeof (isMarried)}`);

// Question 2: Check if type of '10' is equal to 10
let strTen = '10';
console.log(parseInt(strTen));
console.log(Number(strTen));
console.log(+strTen);

// Question 3: Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8'));
console.log(parseInt(Math.ceil('9.8')));

// Question 4: Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
let isTrutly = true
let nonZeroIsTrutly = 50
let stringIsTrutly = 'happy'

// Write three JavaScript statement which provide falsy value.
let isFalsy = false
let zeroIsFalsy = 0
let emptyStringIsFalsy = ''

// Question 5: Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3) // true
console.log(4 >= 3) // true
console.log(4 < 3) // false
console.log(4 <= 3) // false
console.log(4 == 4) // true
console.log(4 === 4) // true
console.log(4 != 4) // false
console.log(4 !== 4) // false
console.log(4 != '4') // false
console.log(4 == '4') // true
console.log(4 === '4') // false
// Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length !== 'jargon'.length); // false
console.log('python'.length != 'jargon'.length); // false
console.log('python'.length < 'jargon'.length); // false
console.log('python'.length > 'jargon'.length); // false

// Question 6: Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12) // true && true -> true
console.log(4 > 3 && 10 > 12) // true && false -> false
console.log(4 > 3 || 10 < 12) // true || true -> true
console.log(4 > 3 || 10 > 12) // true || false -> true
console.log(!(4 < 3)) // !(false) -> true
console.log(!(4 > 3)) // !(true) -> false
console.log(!(false)) // true
console.log(!(4 > 3 && 10 < 12)) // !(true && true) -> !(true) -> false
console.log(!(4 > 3 && 10 > 12)) // !(true && false) -> !(false) -> true
console.log(!(4 === '4')) // !(false) -> true
// There is no 'on' in both dragon and python


// Question 7: Use the Date object to do the following activities
const now = new Date();
// What is the year today?
console.log(`Year: ${now.getFullYear()}`);
// What is the month today as a number?
console.log(`Month: ${now.getMonth() + 1}`);
// What is the date today?
console.log(`Date: ${now.getDate()}`);
// What is the day today as a number?
console.log(`Day: ${now.getDay()}`);
// What is the hours now?
console.log(`Hours: ${now.getHours()}`);
// What is the minutes now?
console.log(`Minutes: ${now.getMinutes()}`);
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(`No. of seconds elaped from Jan 1, 1970 to now: ${now.getTime()}`);



/* Exercises Level 2 */

// Question 1: Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/*
Enter base: 20
Enter height: 10
The area of the triangle is 100 
*/
let base = prompt('Enter base:');
let height = prompt('Enter height');
let areaOfTriangle = 0.5 * base * height;
console.log(areaOfTriangle);

// Question 2: Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/*
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/
let sideA = prompt('Enter side a:');
let sideB = prompt('Enter side b:');
let sideC = prompt('Enter side c:');
let parimeterOfTriangle = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
console.log(parimeterOfTriangle);

// Question 3: Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("Enter length: ");
let width = prompt("Enter width: ");
let areaOfRectangle = length * width;
let parimeterOfRectangle = 2 * (parseInt(length) + parseInt(width));
console.log(`Area: ${areaOfRectangle}\nParimeter: ${parimeterOfRectangle}`);

// Question 4: Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const PI = 3.14;
let radius = prompt("Enter radius: ");
let areaOfCicle = PI * (radius ** 2);
let circumferenceOfCircle = 2 * PI * radius;
console.log(`Area: ${areaOfCicle}\nCircumference: ${circumferenceOfCircle}`);

// Question 5: Calculate the slope, x-intercept and y-intercept of y = 2x -2 
// Formula: y = mx+c
let y = 2 * 0 + (-2) // if x = 0;
let x = 2 / 2 // if y = 0;
console.log(`(${x}, 0)`); // (x1, y1) -> (1,0)
console.log(`(0, ${y})`); // (x2, y2) -> (0,-2)
$m = (-2-0) / (0 - 1)
console.log($m) // 2

// Question 6: Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2, y1 = 2, x2 = 6, y2 = 10, m;
m = (y2 - y1) / (x2 - x1);
console.log(m); // 2

// Question 7: Compare the slope of above two questions.
console.log($m === m) // true
console.log($m !== m) // false

// Question 8: Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// Function to calculate y for a given x
function calculateY(x) {
  return Math.pow(x,2) + 6 * x + 9;
}

// Function to find x values where y is 0
function findXValueForZeroY() {
  let xValues = [];

  // Calcuate y for x values from -100
  for(let x = -100; x <= 100; x++) {
    if(calculateY(x) === 0)
      xValues.push(x)
    else
      continue;
    x++;
  }
  console.log(xValues) // [-3]
}

// Invoking Function
findXValueForZeroY()

// Question 9: Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
/*
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/
let hr = prompt("Enter hours:");
let rph = prompt("Enter rate per hour");
let payOfPerson = hr * rph;
console.log(payOfPerson);

// Question 10: If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = prompt("Enter your name:");
let nameLength = name.length;
console.log(nameLength > 7 ? "Your name is long" : "Your name is short");

// Question 11: Compare your first name length and your family name length and you should get this output.
/*
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh
*/
let fName = prompt("Enter your first name:");
let lName = prompt("Enter your last name:");
console.log(fName.length > lName.length ? `Your first name, ${fName} is longer than your family name, ${lName}` : `Your first name, ${fName} is shorter than your family name, ${lName}`);

// Question 12: Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
/*
let myAge = 250
let yourAge = 25
I am 225 years older than you.
*/
let myAge = 250; // prompt("Enter my age:");
let yourAge = 25; // prompt("Enter your age:");
console.log(myAge > yourAge ? `I am ${myAge - yourAge} years older than you.` : `You are ${yourAge - myAge} years older than me.`);

// Question 13: Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
/*
Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/
let dob = prompt("Enter birth year: ");
let today = new Date();
let yearOld = Number(today.getFullYear()) - Number(dob);
console.log(yearOld >= 18 ? `You are ${yearOld}. You are older enough to drive` : `You are ${yearOld}. You will be allowed to drive after ${18 - yearOld} years.`)

// Question 14: Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
/*
Enter number of years you live: 100
You lived 3153600000 seconds.
*/
let Now = new Date();
let lives = prompt("Enter number of years you live:");
let totalSec = Number(lives) * 31536000; // 1 Year = 31,536,000 Seconds
console.log(`You lived ${totalSec} seconds.`);

// Question 15: Create a human readable time format using the Date time object
let date = new Date();
let Year = date.getFullYear();
let Month = date.getMonth() + 1;
let Day = date.getDay() + 1;
let Hour = date.getHours();
let Minute = date.getMinutes();
// YYYY-MM-DD HH:mm
console.log(`${Year}-${Month}-${Day} ${Hour}:${Minute}`);
// DD-MM-YYYY HH:mm
console.log(`${Day}-${Month}-${Year} ${Hour}:${Minute}`);
// DD/MM/YYYY HH:mm
console.log(`${Day}/${Month}/${Year} ${Hour}:${Minute}`);



/* Exercises Level 3 */

// Question 1: Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 2020-01-02 07:05
console.log(`${Year}-${("0" + Month).slice(-2)}-${("0" + Day).slice(-2)} ${("0" + Hour).slice(-2)}:${("0" + Minute).slice(-2)}`);