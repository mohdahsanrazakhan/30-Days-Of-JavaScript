/* Exercises: Level 1 */

// Declare a function fullName and it print out your full name.
// Regular Function
function fullName() {
    console.log("My name is Mark");
}
fullName();

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName('Mark', 'Khan'));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(2, 3));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => length * width;
console.log(areaOfRectangle(5, 10));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function parimeterOfRactangle(length, width) {
    return 2 * (length + width);
}
console.log(parimeterOfRactangle(5, 10));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = function (length, width, height) {
    return length * width * height;
}
console.log(volumeOfRectPrism(10, 5, 10));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = function (r) {
    return Math.PI * r * r;
}
console.log(areaOfCircle(2));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = r => 2 * Math.PI * r;
console.log(circumOfCircle(5));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function densityOfSubstance(mass, volume) {
    const density = mass / volume;
    return density;
}
console.log(densityOfSubstance(50, 10))

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
const calSpeed = (totalDistance, totalTime) => totalDistance / totalTime;
console.log(calSpeed(100, 60));

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weightOfSubstance(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N';
    return weight;
}
console.log(weightOfSubstance(100));
console.log(weightOfSubstance(100, 1.62));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit + ' oF';
}
console.log(convertCelsiusToFahrenheit(90));

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
const calculateBMI = (weight, height) => {
    const bmi = weight / (height ** 2);
    console.log(`Your weight is ${bmi}: `)
    if (bmi < 18.5) {
        console.log('Underweight');
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log('Normal weight');
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        console.log('Overweight');
    }
    else {
        console.log('Obese')
    }
}
calculateBMI(100, 5.5);

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
function checkSeason(month) {
    console.log(`${month}: `);
    if (month == 'September' || month == 'October' || month == 'November') {
        console.log('The season is Autumn');
    }
    else if (month == 'December' || month == 'January' || month == 'February') {
        console.log('The season is Winter');
    }
    else if (month == 'March' || month == 'April' || month == 'May') {
        console.log('The season is Spring');
    }
    else {
        console.log('The season is Summer');
    }
}
checkSeason('September');
checkSeason('January');
checkSeason('May');
checkSeason('June');

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a, b, c) {
    let maxValue = Math.max(a, b, c);
    return maxValue;
}
console.log(findMax(0, 10, 5)); // 10
console.log(findMax(0, -10, -2)) // 0



/* Exercises Level 2 */

// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a = 0, b = 0, c = 0) {
    const resultX = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a;
    const resultY = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a;
    resultX === resultY ? console.log(`{${resultX}}`) : console.log(`{${resultX}, ${resultY}}`);
}
solveQuadEquation() // {0}
solveQuadEquation(1, 4, 4) // {-2}
solveQuadEquation(1, -1, -2) // {2, -1}
solveQuadEquation(1, 7, 12) // {-3, -4}
solveQuadEquation(1, 0, -4) //{2, -2}
solveQuadEquation(1, -1, 0) //{1, 0}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function arrOfPara(arr) {
    console.log(arr);
}
arrOfPara([1, 2, 3, 4, 5]);

// Write a function name showDateTime which shows time in this format: MM/DD/YYYY HH:MM - 08/01/2020 04:08 using the Date object.
const showDateTime = function () {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    console.log(`${("0" + month).slice(-2)}/${("0" + day).slice(-2)}/${year} ${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}`);
}
showDateTime();

// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
    let temp = x;
    x = y;
    y = temp;
    return `x = ${x}, y = ${y}`;
}
console.log(swapValues(10, 20)); // x => 20, y => 10
console.log(swapValues(3, 4)) // x => 4, y=>3
console.log(swapValues(4, 5)) // x => 5, y => 4

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arrA) {
    let arrB = [];
    for (let i = arrA.length - 1, j = 0; i >= 0; i--, j++) {
        arrB[j] = arrA[i];
    }
    return arrB;
}
console.log(reverseArray([1, 2, 3, 4, 5])); //[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C'])); //['C', 'B', 'A']

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
    return arr;
}
console.log(capitalizeArray(['a', 'b', 'c', 'd']));

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItem = function () {
    let sum = 0;
    for (const item of arguments) {
        sum += item;

    }
    return sum;
}
console.log(addItem(1, 2, 3, 4, 5));

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem() {
    let arr = [], popped = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    popped.push(arr.pop());
    popped.push(arr.pop());
    popped.push(arr.pop());
    return popped;
}
console.log(removeItem(1, 2, 3, 4, 5));

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(range) {
    let sum = 0;
    for (let i = 0; i < range; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(10));

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdd(range) {
    let oddSum = 0;
    for (let i = 0; i < range; i++) {
        if (i % 2 != 0) {
            oddSum += i;
        }
    }
    return oddSum;
}
console.log(sumOfOdd(10));

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(range) {
    let evenSum = 0;
    for (let i = 0; i < range; i++) {
        if (i % 2 == 0) {
            evenSum += i;
        }
    }
    return evenSum;
}
console.log(sumOfEven(10));

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
function evensAndOdds(range) {
    let evenCnt = 0, oddCnt = 0;
    for (let i = 0; i <= range; i++) {
        i % 2 == 0 ? evenCnt++ : oddCnt++;
    }
    return `The number of odds are: ${oddCnt}\nThe number of evens are ${evenCnt}`;
}
console.log(evensAndOdds(100));


// Write a function which takes any number of arguments and return the sum of the arguments
function sum() {
    let sumNum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sumNum += arguments[i];
    }
    console.log(sumNum);
}
sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10

// Writ a function which generates a randomUserIp.
function randomUserIp() {
    let x1 = Math.round(Math.random() * 255);
    let x2 = Math.round(Math.random() * 255);
    let x3 = Math.round(Math.random() * 255);
    let x4 = Math.round(Math.random() * 255);
    let ip4 = x1 + '.' + x2 + '.' + x3 + '.' + x4;
    console.log(ip4);
}
randomUserIp();

// Write a function which generates a randomMacAddress: xx-xx-xx-xx-xx-xx or xx:xx:xx:xx:xx:xx

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'
function randomHexaNumberGenerator() {
    let hexRep = "0123456789abcdef";
    let hexCode = '';
    for (let i = 0; i < 6; i++) {
        hexCode += hexRep.charAt(Math.round(Math.random() * 16));
    }
    console.log(`#${hexCode}`);
}
randomHexaNumberGenerator();

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE
function userIdGenerator() {
    const sets =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = '';
    for (let i = 0; i < 7; i++) {
        id += sets.charAt(Math.round(Math.random() * sets.length));
    }
    console.log(id);
}
userIdGenerator();



/* Exercises Level 3 */

// Question 1: Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
function userIdGeneratedByUser(num, ids) {
    const sets =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = '';
    for (let j = 0; j < ids; j++) {
        for (let i = 0; i < num; i++) {
            id += sets.charAt(Math.round(Math.random() * sets.length));
        }
        id += ' ';
    }
    console.log(id);
}
userIdGeneratedByUser(4, 5);

// Question 2: Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator()
// rgb(125,244,255)
function rgbColorGenerator() {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    console.log(`rgb(${red},${green},${blue})`);
}
rgbColorGenerator();