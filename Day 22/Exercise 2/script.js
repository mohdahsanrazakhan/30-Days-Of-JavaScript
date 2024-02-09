import countries from "./countries.js";

const body = document.getElementsByTagName('body');
const wrapper = document.getElementsByClassName('wrapper');
const heading1 = document.getElementsByTagName('h1');
const totalCountries = document.getElementById('totalCountries');
const countriesList = document.getElementsByClassName('countriesList');

body[0].style.fontFamily = 'monospace';

wrapper[0].style.textAlign = 'center';

heading1[0].style.textTransform = 'uppercase';
heading1[0].style.letterSpacing = '12px';

totalCountries.innerHTML = countries.length;

let listsOfCountries;
for (let i = 0; i < countries.length; i++) {
  listsOfCountries = document.createElement('div')
  listsOfCountries.className = 'countriesList'
  listsOfCountries.fontSize = '24px'
  listsOfCountries.style.padding = '15px'
  listsOfCountries.style.margin = '5px';
  listsOfCountries[i].style.flex = '1';
  // countries[i].style.gridAutoRows = '1fr 1fr 1fr';
  // countries[i].style.gap = '5px';
  listsOfCountries.textContent = countries[i]
  document.body.appendChild(listsOfCountries)
}



// let countriesLength = countries.length;
console.log(countries.length)
console.log(countries[0])
