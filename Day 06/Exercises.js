const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

/* Exercises Level 1 */

// Question 1: Iterate 0 to 10 using for loop, do the same using while and do while loop
// Using for loop:-
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
// Using while loop:-
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
// Using do-while loop:-
let j = 0;
do {
    console.log(j);
    j++;
} while (j <= 10);
// Using 

// Question 2: Iterate 10 to 0 using for loop, do the same using while and do while loop
// Using for loop:-
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
// Using while loop:-
let k = 10;
while (k >= 0) {
    console.log(k);
    k--;
}
// Using do-while loop:-
let l = 10;
do {
    console.log(l);
    l--;
} while (l >= 0);

// Question 3: Iterate 0 to n using for loop
/**
 * Prerequisite:
 * npm init
 * npm install prompt-sync
 * import the prompt require 'prompt-sync'
 * Ready to run your program in your terminal using: node filename
 * const prompt = require('prompt-sync')();
 */
const n = 10;
for (let i = 0; i <= n; i++) {
    console.log(i);
}

// Question 4: Write a loop that makes the following pattern using console.log():
/*
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
let hash_ = '';
for (let i = 1; i <= 7; i++) {
    for (let hash = 1; hash <= i; hash++) {
        hash_ += '#';
    }
    hash_ += '\n';
}
console.log(hash_);

// Question 5: Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

// Question 6: Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
console.log('i\ti^2\ti^3');
for (let i = 0; i <= 10; i++) {
    console.log(`${i}\t${i ** 2}\t${i * i * i}`);
}

// Question 7: Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

// Question 8: Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

// Question 9: Use for loop to iterate from 0 to 100 and print only prime numbers

// Question 10: Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

// Question 11: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
let oddSum = 0, evenSum = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        evenSum += i;
    }
    else {
        oddSum += i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${evenSum} And the sum of all odds from 0 to 100 is ${oddSum}`);

// Question 12: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//   [2550, 2500]
let arrNum = [evenSum, oddSum];
console.log(arrNum);

// Question : Develop a small script which generate array of 5 random numbers
let randArr = 0;
for (let i = 0; i < 5; i++) {
    let randNum = Math.round(Math.random() * 100);
    randArr[i] = randNum;
}
console.log(randArr);

// Question : Develop a small script which generate array of 5 random numbers and the numbers must be unique
let uniqueRandArr = [];
for (let i = 0; i < 5; i++) {
    let rand = Math.round(Math.random() * 100);
    if (uniqueRandArr.indexOf(rand) === -1)
        uniqueRandArr.push(rand);
}
console.log(uniqueRandArr);


// Question : Develop a small script which generate a six characters random id: 5j2khz
const sets =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let id = '';
for (let i = 0; i < 6; i++) {
    id += sets.charAt(Math.round(Math.random() * sets.length));
}
console.log(id);



/* Exercises Level 2 */

// Question 1: Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
let randSets = "abcdefghijklmnopqrstuvwxyz0123456789";
let randId = '';
let anyNum = (Math.round(Math.random() * 50));
for (let i = 0; i < anyNum; i++) {
    randId += randSets.charAt(Math.round(Math.random() * sets.length));
}
console.log(randId);


// Question 2: Write a script which generates a random hexadecimal number.
// '#ee33df'
let hexRep = "0123456789abcdef";
let hexCode = '';
for (let i = 0; i < 6; i++) {
    hexCode += hexRep.charAt(Math.round(Math.random() * 16));
}
console.log(`#${hexCode}`);


// Question 3: Write a script which generates a random rgb color number.
// rgb(240,180,80)
let red = Math.round(Math.random() * 255);
let green = Math.round(Math.random() * 255);
let blue = Math.round(Math.random() * 255);
console.log(`rbh(${red},${green},${blue})`);


// Question 4: Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newContries = [];
for (let i = 0; i < countries.length; i++) {
    newContries[i] = countries[i].toUpperCase();
}
console.log(newContries);

// Question 5: Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
let countriesLength = [];
for (let i = 0; i < countries.length; i++) {
    countriesLength[i] = countries[i].length;
}
console.log(countriesLength);

// Question 6: Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
//  ]
let setsCountries = [];
for (let i = 0; i < countries.length; i++) {
    let code = countries[i].slice(0, 3);
    setsCountries[i] = [(countries[i]), code.toUpperCase(), countries[i].length];
}
console.log(setsCountries);

// Question 7: In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']
let landContries = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].match(/'land'/g)) {
        landContries.push(countries[i]);
    }
    else {
        console.log('All these countries are without land.')
    }
}

// Question 8: In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']

// Question 9: Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia
var wordLength = 0, largestChar = '';
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > wordLength) {
        wordLength = countries[i].length;
        largestChar = countries[i];
    }
}
console.log(largestChar);

// Question 10: Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']

// Question 11: Find the longest word in the webTechs array
var longestSize = 0, longestWord = '';
for (let i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > longestSize) {
        longestSize = webTechs[i].length;
        longestWord = webTechs[i];
    }
}
console.log(`Longest word is ${longestWord} and it's size is ${longestSize}`);


// Question 12: Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
const techSize = [];
for (let i = 0; i < webTechs.length; i++) {
    techSize[i] = [webTechs[i], webTechs[i].length];
}
console.log(techSize);

// Question 13: An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let acronym = '';
for (let i = 0; i < mernStack.length; i++) {
    acronym += mernStack[i].slice(0, 1);
}
console.log(acronym);

// Question 14: Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const techStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (const tech of techStack) {
    console.log(tech);
}

// Question 15: This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruit = ['banana', 'orange', 'mango', 'lemon'];
for (let i = fruit.length - 1, j = 0; i >= j; i--, j++) {
    const temp = fruit[j];
    fruit[j] = fruit[i];
    fruit[i] = temp;
}
console.log(fruit);

// Question 16: Print all the elements of array as shown below.
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
let fStack = fullStack.flat();
for (let i = 0; i < fStack.length; i++) {
    console.log(fStack[i]);
}


/* Exercises: Level 3 */
const countriesArray = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombi", "Comoros", "Congo (Brazzaville)", "Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor (Timor Timur)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia, The", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

// Question 1: Copy countries array(Avoid mutation)
let immuteCountries = [];
for (let i = 0; i < countriesArray.length; i++) {
    immuteCountries[i] = countriesArray[i];
}
console.log(immuteCountries);

// Question 2: Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let sortedCountries = [];
for (let i = 0; i < immuteCountries.length; i++) {
    sortedCountries[i] = immuteCountries[i];
}
console.log(sortedCountries.sort());

// Question 3: Sort the webTechs array and mernStack array
console.log(webTechs.sort());
console.log(mernStack.sort());

// Question 4: Extract all the countries contain the word 'land' from the countries array and print it as array

// Question 5: Find the country containing the hightest number of characters in the countries array
var len = 0, freqCountry = '';
for (let i = 0; i < immuteCountries.length; i++) {
    if (immuteCountries[i].length > len) {
        len = immuteCountries[i].length;
        freqCountry = immuteCountries[i];
    }
}
console.log(freqCountry);

// Extract all the countries containing only four characters from the countries array and print it as array
let smallCountries = [];
for (let i = 0; i < immuteCountries.length; i++) {
    if (immuteCountries[i].length === 4) {
        smallCountries = immuteCountries[i];
    }
}
console.log(smallCountries);

// Extract all the countries containing two or more words from the countries array and print it as array
let moreWord = [];
for (let i = 0; i < immuteCountries.length; i++) {
    if ((immuteCountries[i].match(/(\w+)/g).length) >= 2) {
        moreWord.push(immuteCountries[i]);
    }
}
console.log(moreWord);

// Reverse the countries array and capitalize each country and stored it as an array
let revCountries = [];
for (let i = 0; i < immuteCountries.length; i++) {
    immuteCountries[i] = immuteCountries[i].toUpperCase();
    revCountries = immuteCountries.reverse();
}
console.log(revCountries);