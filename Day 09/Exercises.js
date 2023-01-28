/* Exercises: Level 1 */
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
// Question 1: Explain the difference between forEach, map, filter, and reduce.
/**
 * forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback funtion with elements, index paramter and array itself.
 * map: map is iterating an array and modify an array elements. It takes a callback function with elements, index, array parameter and return a new array.
 * filter: Filter out items which full fill filtering conditions and return a new array.
 * reduce: Reduce method takes a callback function, who takes accumulator, current, and (optional) initial value as a parameter and returns a single value.
 */

// Question 2: Define a callback function before you use it in forEach, map, filter or reduce.
/**
 * Callback function: A callback is a function which can be passed as a paramenter to other function.
 */

// Question 3: Use forEach to console.log each country in the countries array.
countries.forEach(country => console.log(country));

// Question 4: Use forEach to console.log each name in the names array.
names.forEach(name => console.log(name));

// Question 5: Use forEach to console.log each number in the numbers array.
numbers.forEach(number => console.log(number));

// Question 6: Use map to create a new array by changing each country to uppercase in the countries array.
const allCountry = countries.map(allCapCountry => allCapCountry.toUpperCase())
console.log(allCountry)

// Question 7: Use map to create an array of countries length from countries array.
const countryLength = countries.map(lengthOfCountry => lengthOfCountry.length);
console.log(countryLength);

// Question 8: Use map to create a new array by changing each number to square in the numbers array
const squareNumber = numbers.map(sqrNum => sqrNum * sqrNum)
console.log(squareNumber);

// Question 9: Use map to change to each name to uppercase in the names array
const allCapName = names.map(name => name.toUpperCase());
console.log(allCapName);

// Question 10: Use map to map the products array to its corresponding prices.
const pricesOfProduct = products.map(p => p.price);
console.log(pricesOfProduct);

// Question 11: Use filter to filter out countries containing land.
const countryLand = countries.filter(country => country.includes('land'));
console.log(countryLand);

// Question 12: Use filter to filter out countries having six character.
const sixCharCountry = countries.filter(six => six.length == 6)
console.log(sixCharCountry);

// Question 13: Use filter to filter out countries containing six letters and more in the country array.
const sixOrMoreCharCountry = countries.filter(six => six.length >= 6)
console.log(sixOrMoreCharCountry);

// Question 14: Use filter to filter out country start with 'E';
const startStartWithE = countries.filter(e => e.startsWith('E'))
console.log(startStartWithE)

// Question 15: Use filter to filter out only prices with values.
const priceOnly = products.filter(pricesOnly => pricesOnly.price > 0)
console.log(priceOnly);

// Question 16: Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
    arr.forEach(x => console.log(x));
}
getStringLists(names);

// Question 17: Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum);

// Question 18: Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const concatStr = countries.reduce((acc, cur) => acc + ', ' + cur)
console.log(`${concatStr} are north European countries`)

// Question 19: Explain the difference between some and every
/**
 * some: It checks if some of the elements are similar in one aspect.
 * every: It checks if all the elements are similar in one aspect. 
 * Both some and every returns boolean value.
 */

// Question 20: Use some to check if some names' length greater than seven in names array
const lenName = names.some(n => n.length > 7)
console.log(lenName);

// Question 21: Use every to check if all the countries contain the word land
const land = countries.every(country => country.includes('land'))
console.log(land);

// Question 22: Explain the difference between find and findIndex.
/**
 * find: It returns the first element which satisfies the condition.
 * findIndex: It returns the position of the first element which satisfies the condition.
 */

// Question 23: Use find to find the first country containing only six letters in the countries array
const first = countries.find(country => country.length == 6)
console.log(first);

// Question 24: Use findIndex to find the position of the first country containing only six letters in the countries array
const firstIdx = countries.findIndex(country => country.length == 6)
console.log(firstIdx);

// Question 25: Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const nor = countries.findIndex(norway => norway.includes('Norway'))
console.log(nor);

// Question 26: Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const rus = countries.findIndex(x => x.includes('Russia'))
console.log(rus);