/* Exercise Level 1 */

// Question 1: Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI).then(response => response.json()).then(data => {
    for (let i = 0; i < data.length; i++) {
        // It prints name of country - i.name
        console.log(data[i]['name']);
        // It prints capital - i.capital
        console.log(data[i]['capital']);
        // It print languages - 0.languages
        console.log(data[i]['languages']);
        // It print population - 0.population
        console.log(data[i]['population']);
        // and It print area - 0.area
        console.log(data[i]['area']);
    }

}).catch(error => console.log(error))



/* Exercise Level 2 */

// Question 1: Print out all the cat names in to catNames variable.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI).then(response => response.json()).then(name => {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]['name']); // i.name
    }
}).catch(error => console.log(error))



/* Exercise Level 3 */

// Question 1: Read the cats api and find the average weight of cat in metric unit. 0.weight
fetch(catsAPI).then(response => response.json()).then(name => {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]['weight']); // i.name
    }
}).catch(error => console.log(error))


// Question 2: Read the countries api and find out the 10 largest countries. Path: 0.population
fetch(countriesAPI).then(response => response.json()).then(data => {
    let largest_10 = [];
    for (let i = 0; i < data.length; i++) {
        largest_10.push([data[i]['population'], data[i]['name']]);
    }
    console.log(largest_10);
})

// Question 3: Read the countries api and count total number of languages in the world used as officials. Path: 0.languages[0].name
fetch(countriesAPI).then(response => response.json()).then(data => {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]['languages'][0]['name']);
    }
})