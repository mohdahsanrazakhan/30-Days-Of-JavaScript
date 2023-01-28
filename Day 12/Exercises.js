/* Exercises Level 1 */

// Question 1: Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const notNum = /[^A-Za-z,. ]+/g
const number = text.match(notNum);
console.log(number);

// Question 2: The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
let sortedPoints = points.sort();
console.log(sortedPoints);
/*
sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
distance = 12
*/

// Question 3: Write a pattern which identify if a string is a valid JavaScript variable
/*
is_valid_variable('first_name') # True
is_valid_variable('first-name') # False
is_valid_variable('1first_name') # False
is_valid_variable('firstname') # True
*/
function is_valid_variable(variable) {
    const notVar = /^([a-zA-Z_$][a-zA-Z\d_$]*)$/g
    const isVariable = variable.match(notVar);
    // console.log(isVariable);
    if (isVariable)
        console.log(true);
    else
        console.log(false);
}
is_valid_variable('$firstName');



/* Exercises Level 2 */

// Question 1: Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
const wordArray = paragraph.split(/[. | '' | ' ']/);
console.log(wordArray);
// console.log(tenMostFrequentWords(paragraph))

/*
[
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1},
    {word:'to', count:1},
    {word:'the', count:1},
    {word:'something', count:1},
    {word:'if', count:1},
    {word:'give', count:1},
    {word:'develop',count:1},
    {word:'capabilities',count:1},
    {word:'application', count:1},
    {word:'an',count:1},
    {word:'all',count:1},
    {word:'Python',count:1},
    {word:'If',count:1}]

console.log(tenMostFrequentWords(paragraph, 10))

[{word:'love', count:6},
{word:'you', count:5},
{word:'can', count:3},
{word:'what', count:2},
{word:'teaching', count:2},
{word:'not', count:2},
{word:'else', count:2},
{word:'do', count:2},
{word:'I', count:2},
{word:'which', count:1}
]
*/

/* Exercises Level 3 */

// Question 1: Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
function cleanText(sentence) {
    const remove = sentence.replace(/[%$@&#?!;,.]/g, '');
    return remove;
}
console.log(cleanText(sentence))

//  I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher

// Question 2: Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.


// console.log(mostFrequentWords(cleanedText))
// [{ word: 'I', count: 3 }, { word: 'teaching', count: 2 }, { word: 'teacher', count: 2 }]