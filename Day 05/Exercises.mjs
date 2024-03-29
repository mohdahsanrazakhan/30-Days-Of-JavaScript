/* Exercises Level 1 */

// Question 1: Declare an empty array;
const arr = Array();
console.log(arr);
// or
let Arr = new Array();
console.log(Arr);

// Question 2: Declare an array with more than 5 number of elements
const array = [1, 2, 3, 4, 5, 6];
console.log(array);

// Question 3: Find the length of your array
let length = array.length;
console.log(length);

// Question 4: Get the first item, the middle item and the last item of the array
let fItem = array[0];
let lastIdx = length - 1;
let lItem = array[lastIdx];
let mid = (length / 2);
let midItem = array[mid];
console.log(`First Item: ${fItem}\nMiddle Item: ${midItem}\nLast Item: ${lItem}`);

// Question 5: Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
    'Albatoss',
    786,
    9.2,
    true,
    { country: "India", city: "Pryj" },
    { skills: ['HTML', 'CSS', 'JS'] }
]
console.log(mixedDataTypes);
console.log(`Length: ${mixedDataTypes.length}`);


// Question 6: Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Question 7: Print the array using console.log()
console.log(itCompanies);

// Question 8: Print the number of companies in the array
console.log(`Total number of companies are: ${itCompanies.length}`);

// Question 9: Print the first company, middle and last company
let fComp = itCompanies[0];
let LastIdx = length - 1;
let lComp = itCompanies[LastIdx];
let Mid = (length / 2);
let midComp = itCompanies[Mid];
console.log(`First Item: ${fComp}\nMiddle Item: ${midComp}\nLast Item: ${lComp}`);

// Question 10: Print out each company
console.log(itCompanies.join(', '));

// Question 11: Change each company name to uppercase one by one and print them out
itCompanies.map(companies => {
    console.log(companies.toUpperCase())
})

// Question 12: Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

// Dynamic Code 
let lastIndex = itCompanies.length - 1
let firstHalf = itCompanies.slice(0, lastIndex)
let secondHalf = itCompanies[lastIndex]
let sentence = `${firstHalf.join(', ')} and ${secondHalf.toString()} are big IT companies.`
console.log(sentence)

// or Hard Coded
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]}, and ${itCompanies[6]} are big IT companies.`);

// Question 13: Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf('IBM');
index === -1 ? console.log('This company is not found.') : console.log(`${itCompanies[index]} is present at index number ${index}.`);

// Question 14: Filter out companies which have more than one 'o' without the filter method
let moreOCountry = [];
// Using for loop
for (let i = 0; i < itCompanies.length; i++) {
    let first = itCompanies[i].indexOf('o');
    let second = itCompanies[i].lastIndexOf('o');
    if (first != second) {
        moreOCountry.push(itCompanies[i]);
    }
}
console.log(moreOCountry);

// Using map() method
itCompanies.map(company => {
    let firstO = company.indexOf('o');
    let lastO = company.lastIndexOf('o')
    if(firstO !== lastO) 
        moreOCountry.push(company)
})
console.log(moreOCountry)

// Question 15: Sort the array using sort() method
console.log(itCompanies.sort());

// Question 16: Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Question 17: Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// Question 18: Slice out the last 3 companies from the array
console.log(itCompanies.slice(4));

// Question 19: Slice out the middle IT company or companies from the array.
console.log(itCompanies.slice(3, 4));

// Question 20: Remove the first IT company from the array
itCompanies.splice(0, 1);
console.log(itCompanies);

// Question 21: Remove the middle IT company or companies from the array
itCompanies.splice(3, 1); // Facebook removed
console.log(itCompanies);

// Question 22: Remove the last IT company from the array
itCompanies.splice(4, 1); // Amazon removed
console.log(itCompanies);

// Question 23: Remove all IT companies
console.log(itCompanies.splice());



/* Exercises Level 2 */

// Question 1: Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
import webTechs from "../web_techs.mjs";
import countries from "../countries.mjs";

// Question 2: First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[.,]/g, '');
let wordsArray = words.split(' ');
console.log(wordsArray); // ['I', 'love', 'teaching', 'and', 'empowering', 'people', 'I', 'teach', 'HTML', 'CSS', 'JS', 'React', 'Python']
console.log(wordsArray.length); // 13

// Question 3: In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
let idx = shoppingCart.indexOf('Suger');
idx === -1 ? shoppingCart.push('Sugar') : "Suger is aleardy added.";
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
shoppingCart.splice(4, 1);
console.log(shoppingCart);

// modify Tea to 'Green Tea'
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

// Question 4: In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// const countries = require('countries')
if (countries.indexOf("Ethiopia")) {
    console.log("ETHIOPIA");
} else countries.push("Ethiopia");

// Question 5: In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webTechs.indexOf('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass');

// Question 6: Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack); // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]



/* Exercises Level 3 */
// Question 1: The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
console.log(ages.sort());
let maxAges = Math.max(...ages)
console.log(maxAges);
let minAges = Math.min(...ages);
console.log(minAges);

// Find the median age(one middle item or two middle items divided by two)
function calculateMedian(ages) {
    ages.sort((a,b) => a - b)
    let size = ages.length;
    if(size % 2 === 0) {
        // Even number
        const middle1 = ages[size / 2 - 1];
        const middle2 = ages[size / 2];
        return (middle1 + middle2) / 2;
    }
    else {
        // Odd number
        return ages[Math.floor(size / 2)];
    }
}
calculateMedian(ages);

// Find the average age(all items divided by number of items)
let totalSumOfAge = 0;
let avarageAge = 0;
for(let age of ages) {
    totalSumOfAge += age
}
avarageAge = totalSumOfAge / ages.length;
console.log(avarageAge);

// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
let range = ages.indexOf(maxAges) - ages.indexOf(minAges);
console.log(range);

// Question 2: Find the middle country(ies) in the countries array
let lengthOfCountries = countries.length
console.log('Middle Country:', countries[(lengthOfCountries - 1) / 2])

// Question 3: Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
function divideCountries(countries) {
    const length = countries.length;
    const middleIndex = Math.floor(length / 2);

    if(length % 2 === 0) {
        // Even number
        const firstHalf = countries.slice(0, middleIndex);
        const secondHalf = countries.slice(middleIndex);
        return [firstHalf, secondHalf];
    }
    else {
        // Odd number
        const firstHalf = countries.slice(0, middleIndex + 1);
        const secondHalf = countries.slice(middleIndex + 1);
        return [firstHalf, secondHalf];
    }
}

const dividedCountries = divideCountries(countries)
console.log(dividedCountries)