/* Exercise: Level 1 */

// Question 1: Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

// Question 2: Print the string on the browser console using console.log()
console.log(challenge);

// Question 3: Print the length of the string on the browser console using console.log()\
let strLength = challenge.length;
console.log(strLength);

// Question 4: Change all the string characters to capital letters using toUpperCase() method
let upperCase = challenge.toUpperCase();
console.log(upperCase);

// Question 5: Change all the string characters to lowercase letters using toLowerCase() method
let lowerCase = challenge.toLowerCase();
console.log(lowerCase);

// Question 6: Cut (slice) out the first word of the string using substr() or substring() method
let java = challenge.substr(11, 4);
console.log(java);

let script = challenge.substring(15, 21);
console.log(script);

// Question 7: Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let substrWay = challenge.substr(3, 18) // .substr(3,) also work
console.log(substrWay);

let substringWay = challenge.substring(3, 21); // .substring(3) also work
console.log(substringWay);

// Question 8: Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script')); // true

// Question 9: Split the string into an array using split() method
console.log(challenge.split()); // ['30 days of javascript']

// Question 10: Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' ')); // ['30', 'days', 'of', 'javascript']

// Question 11: 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));

// Question 12: Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'));

// Question 13: What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15)); // 'S'

// Question 14: What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J')); // 51

// Question 15: Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a')); // 4

// Question 16: Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a')); // 14

// Question 17: Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because')); // 31

// Question 18: Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because')); // 47

// Question 19: Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because')); // 31

// Question 20: Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let newStr = ' 30 Days Of JavaScript ';
console.log(newStr.trim(' '));

// Question 21: Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let phrase = '30 Days Of JavaScript';
console.log(phrase.startsWith('3')); // true
console.log(phrase.startsWith('30')); // true
console.log(phrase.startsWith('Days')); // false

// Question 22: Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(phrase.endsWith('t')); // true
console.log(phrase.endsWith('Script')); // true
console.log(phrase.endsWith('script')); // false

// Question 23: Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(phrase.match(/a/g))


// Question 24: Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
phrase.concat('30 Days Of ', 'JavaScript');
console.log(phrase);

// Question 25: Use repeat() method to print 30 Days Of JavaScript 2 times
let str = 'Mark';
console.log(str.repeat(10));

/* Exercises Level 2 */

// Question 1: Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// Question 2: Using console.log() print out the following quote by Mother Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

// Question 3: Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let strTen = '10';
console.log(parseInt(strTen));
console.log(Number(strTen));
console.log(+strTen);

// Question 4: Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat(Math.ceil('9.8')));

// Question 5: Check if 'on' is found in both python and jargon
let str1 = 'python', str2 = 'jargon';
console.log(str1.includes('on'));
console.log(str2.includes('on'));

// Question 6: I hope this course is not full of jargon. Check if jargon is in the sentence.
let jargonSentence = 'I hope this course is not full of jargon.';
console.log(jargonSentence.includes('jargon')); // true

// Question 7: Generate a random number between 0 and 100 inclusively.
let rand_1_to_100 = Math.round(Math.random() * 100);
console.log(rand_1_to_100);

// Question 8: Generate a random number between 50 and 100 inclusively.
let rand_50_to_100 = Math.round(Math.random() * (100 - 50) + 50);
console.log(rand_50_to_100);

// Question 9: Generate a random number between 0 and 255 inclusively.
let rand_1_to_255 = Math.round(Math.random() * 255);
console.log(rand_1_to_255);

// Question 10: Access the 'JavaScript' string characters using a random number.
let lang = 'JavaScript';
let index = Math.floor(Math.random() * lang.length);
console.log(lang[index]);

// Question 11: Use console.log() and escape characters to print the following pattern.
/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// Question 12: Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let slice = 'You cannot end a sentence with because because because is a conjunction';
console.log(slice.substr(31, 23));

/* Exercises Level 3 */

// Question 1: 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let cntLove = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let lcLove = cntLove.toLowerCase();
console.log(lcLove.match(/love/g).length);

// Question 2: Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let becosCounter = 'You cannot end a sentence with because because because is a conjunction';
console.log(becosCounter.match(/because/g).length);

// Question 3: Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const Sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let mostFreq = Sentence.match(/[A-Za-z0-9 _]/g).join('');
console.log(mostFreq);

// Question 4: Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let arrayOfIncome = income.match(/[^[A-Za-z _][0-9]+/g);
console.log(arrayOfIncome[1]);