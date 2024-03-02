# Regular Expressions -

## Regular Expressions
> A regular expression, or RegExp is a pattern-matching language used to find specific patterns within data.

To declare a string, we use single quotes, double quotes, or backticks. To declare a regular expression, we use two forward slashes and optional flags.

### RegExp Parameters
> A regular expression takes two parameters: a required search pattern and an optional flag.

**Pattern**
> It represents the text or pattern we want to search for, such as the word "spam" in an email or a phone number format.

**Flags**
> Flags are optional parameters that determine the type of searching:
- "g": Global flag, searches for a pattern throughtout the entire thext.
- "i": Case-insensitive flag, searches for both lowercase and uppercase occurrences.
- "m": Multiline flag, searches across multiple lines in the text.

### Creating a pattern with RegExp Constructor
Declaring regular expression without global flag and case insensitive flag.
```js
// without flag
let pattern = 'love'
let regEx = new RegExp(patter)
```
Declaring regular expression with global flag and case insensitive flag.
```js
let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)
// or
let anotherRegEx = new RegExp('love', 'gi')
```

### Creating a pattern without RegExp Constructor
Declaring regular expression with global flag and case insensitive flag.
```js
let regEx = /love/gi
```

### RegExp Object Methods

**Testing for a match**
- `test()`: Tests for a match in a string and returns `true` or `false`.
```js
const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str)
console.log(result) // true
```

**Array containing all of the match**
- `match()`: Returns an array containing all matches, including capturing groups, or `null` if no match is found.
```js
const str = 'I love JavaScript'
const pattern1 = /love/
const pattern2 = /love/g
const result1 = str.match(pattern1) // ["love", index: 2, input: "I love JavaScript", groups: undefined]
const result2 = str.match(pattern2) // ["love"]
```
- `search()`: Tests for a match in a string and returns the index of the match, or `-1` if the search fails.
```js
const str = 'I love JavaScript'
const pattern = /love/g
const result = str.search(pattern)
console.log(result) // 2
```

**Replacing a substring**
- `replace()`: Executes a search for a match in a string and replaces the matched substring with a replacement substring.
```js
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced1 = txt.replace(/Python|python/, 'JavaScript')
matchReplaced2 = txt.replace(/Python|python/g, 'JavaScript')
matchReplaced3 = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced1) // JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language
console.log(matchReplaced2) // JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language
console.log(matchReplaced3) // JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language
```
```js

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replace(/%/g, '')
console.log(matches) // I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.
```

**Common RegEx Patterns**

- `[]`: A set of characters
  - `[A-Za-z0-9]` any character which is a to z, A to Z, 0 to 9
- `^`: Starts with
- `$`: Ends with
- `.`: Any character except newline
- `\d`: Matches where the string contains digits (0-9)
- `\D`: Matches where the string does not contain digits
- `*`: Zero or more times
- `+`: One or more times
- `?`: Zero or one times
- `\b`: Word boundary
- `{}`: Quantifiers for exact, minimum, or range of characters
- `|`: Either or
- `()`: Capture and group

![regExChart](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/images/regex.png)

### Square Bracket
> Use square bracket to include lower and upper case
```js
const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '

const pattern = '[Aa]pple' // this square bracket means either A or a
const matches = txt.match(pattern)
console.log(matches) // ["Apple", index: 0, input: "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.", groups: undefined]

const pattern = /[Aa]pple/g // this square bracket means either A or a
const matches = txt.match(pattern)
console.log(matches) // ["Apple", "apple"]
```
> If we want to look for the banana, we write the pattern as follows:
```js
const pattern = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const matches = txt.match(pattern)
console.log(matches) // ["Apple", "banana", "apple", "banana", "Banana"]
```

### Escape Character(\\) in RegExp
```js
const txt = 'This regular expression example was made in January 12,  2020.'

const pattern1 = /\d/g  // d is a special character which means digits
const matches1 = txt. match(pattern1)
console.log(matches1)  // ["1", "2", "2", "0", "2", "0"], this is not what we want

const pattern2 = /\d+/g  // d is a special character which means digits
const matches2 = txt. match(pattern2)
console.log(matches2)  // ["12", "2020"], this is not what we want
```

### One or more time (+)
```js
const pattern = /\d+/g  // d is a special character which means digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)
console.log(matches)  // ["12", "2020"], this is not what we want
```

### Period (.)
```js
const txt = 'Apple and banana are fruits'

const pattern1 = /[a]./g  // this square bracket means a and . means any character except new line
const matches1 = txt.match(pattern1)
console.log(matches1)  // ["an", "an", "an", "a ", "ar"]

const pattern2 = /[a].+/g  // . any character, + any character one or more times
const matches2 = txt.match(pattern2)
console.log(matches2)  // ['and banana are fruits']
```

### Zero or more times (*)
> the pattern may not occur or it can occur many times.
```js
const pattern = /[a].*/g  //. any character, + any character one or more times 
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']
```

### Zero or one times (?)
> The pattern may not occur or it may occur once.
```js
const txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern = /[Ee]-?mail/g  // ? means optional
matches = txt.match(pattern)

console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]
```

### Quantifier in RegExp
> RegExp quantifiers allow us to specify the length of the substring we're searching for in a text. To find substrings of a specific length, we use curly brackets. For instance, if we're interested in substrings with a length of 4 characters, we can define it using RegExp quantifiers.
```js
const txt = 'This regular expression example was made in December 6,  2019.'

const pattern1 = /\\b\w{4}\b/g  //  exactly four character words
const matches1 = txt.match(pattern1)
console.log(matches1)  //['This', 'made', '2019']

const pattern2 = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
const matches2 = txt.match(pattern2)
console.log(matches2)  //['This', 'made']

const pattern3 = /\d{4}/g  // a number and exactly four digits
const matches3 = txt.match(pattern3)
console.log(matches3)  // ['2019']

const pattern4 = /\d{1,4}/g   // 1 to 4
const matches4 = txt.match(pattern4)
console.log(matches4)  // ['6', '2019']
```

### Cart (^)
- Starts with
```js
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /^This/ // ^ means starts with
const matches = txt.match(pattern)
console.log(matches)  // ['This']
```
- Negation
```js
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches = txt.match(pattern)
console.log(matches)  // ["6", "2019"]
```

### Exact match
It should have ^ starting and $ ending.
```js
let pattern = /^[A-Z][a-z]{3,12}$/
let name = 'Asabeneh'
let result = pattern.test(name)
console.log(result) // true
```
---
> Thank you for reading the summary of ***Regular Expressions***. Please proceed to the exercises section and complete them on your own. If you need **hints** or **solutions**, refer to the ***[Exercises.js](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/blob/main/Day%2012/Exercises.js)*** file.

[< Previous](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2011) | [Next >](https://github.com/mohdahsanrazakhan/30-Days-Of-JavaScript/tree/main/Day%2013)