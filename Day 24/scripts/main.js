// Working with body element
const backgroundGIF = document.querySelector('body');
backgroundGIF.style.backgroundImage = "URL('images/galaxy.gif')";
backgroundGIF.style.fontFamily = 'Montserrat'

// Working with header
const heading = document.querySelector('header');
heading.style.color = '#f0eaea';
heading.style.textAlign = 'center';
heading.style.textShadow = '1px 1px 0px #6767ad';

// Working with <input> tag #mass
const input_ = document.querySelector('#mass');
input_.style.padding = '8px';
input_.style.width = '250px';

// Working with <select> tag
const select_ = document.querySelector('select');
select_.style.padding = '8px';
select_.style.borderRadius = '5px';
select_.style.color = 'gray';
const planet = ['Earth', 'Jupiter', 'Mars', 'Mercury', 'Moon', 'Neptune', 'Pluto', 'Saturn', 'Uranus', 'Venus'];
for (let i = 0; i < planet.length; i++) {
  var option_ = document.createElement('option');
  option_.value = i;
  option_.innerHTML = planet[i];
  select_.appendChild(option_);
}

// Working with <button> tag
const button_ = document.querySelector('button');
button_.style.padding = '8px';
button_.style.borderRadius = '5px';
button_.style.color = 'white';
button_.style.backgroundColor = 'rgb(211, 211, 211, 0.7)';

// Working with images
let planetImg = document.getElementById('images');
planetImg.style.width = '300px';
planetImg.src = `./images/earth.png`;

// Working with planet name inside circle background
let planetNameStyle = document.querySelector('div.circle span');

function getPath() {
  select_.addEventListener('click', () => {
    idx = select_.value;
    planetName = planet[idx];
    planetImg.src = `./images/${planetName}.png`
    planetNameStyle.innerHTML = `${planetName}`;
  })
}
getPath();

// Calculation of weight of an object




// Working with flexContainer background 
const flexContainerBackgroundStyle = document.querySelector('div.flex-container');
flexContainerBackgroundStyle.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
flexContainerBackgroundStyle.style.borderRadius = "10px";
flexContainerBackgroundStyle.style.display = "flex";
flexContainerBackgroundStyle.style.justifyContent = "center"
flexContainerBackgroundStyle.style.alignItem = "center";
flexContainerBackgroundStyle.style.padding = "30px";
flexContainerBackgroundStyle.style.margin = "30px 150px";

// Working with flexItem div
const flexItemBackgroundStyle = document.querySelector('div.flex-item');
flexItemBackgroundStyle.style.margin = "auto";


// Working with image
const imageStyle = document.querySelector('div.image');
imageStyle.style.marginRight = "-10px"


// Working with description background
const descriptionBackgroundStyle = document.querySelector('div.description');
descriptionBackgroundStyle.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
descriptionBackgroundStyle.style.color = "white";
descriptionBackgroundStyle.style.width = "auto";
descriptionBackgroundStyle.style.height = "150px";
descriptionBackgroundStyle.style.borderRadius = "10px";
descriptionBackgroundStyle.style.padding = "25px";
descriptionBackgroundStyle.style.display = "flex";
descriptionBackgroundStyle.style.flexDirection = "column";
descriptionBackgroundStyle.style.justifyContent = "center";
descriptionBackgroundStyle.style.alignItem = "center";
descriptionBackgroundStyle.style.margin = "auto";


// Working with circle background 
let circleBackgroundStyle = document.querySelector('div.circle');
circleBackgroundStyle.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
circleBackgroundStyle.style.width = "80px";
circleBackgroundStyle.style.height = "80px";
circleBackgroundStyle.style.borderRadius = "50%"
circleBackgroundStyle.style.display = "flex";
circleBackgroundStyle.style.justifyContent = "center";
circleBackgroundStyle.style.alignItem = "center";
circleBackgroundStyle.style.margin = "auto";


// // Working with planet name inside circle background
// let planetNameStyle = document.querySelector('div.circle span');
// planetNameStyle.textContent = ;


// Working with p tag inside the circle div
let paragraphStyle = document.querySelector('div.circle p');
paragraphStyle.style.margin = "auto";

// Working with <main> element
// const main_ = document.querySelector('main');

// Working with <img> tag [className: planet-image]
// let planetImage = document.getElementsByClassName('planet-image');
