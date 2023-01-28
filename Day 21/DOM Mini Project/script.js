// Working with div
document.querySelector('.wrapper').style.fontFamily = "monospace";
document.querySelector('.wrapper').style.margin = "auto";

// Working with h1, h2, p
document.querySelector('h1').style.textAlign = 'center'
document.querySelector('h2').style.textAlign = 'center'
document.querySelector('h2').style.fontWeight = 'normal'
document.querySelector('h2').style.textDecoration = 'underline'
document.querySelector('p').style.width = '180px'
document.querySelector('p').style.margin = '15px auto'


// Working with unordered list
document.querySelector('ul').style.listStyle = "none";
document.querySelector('ul').style.width = '50%';
document.querySelector('ul').style.margin = 'auto';


// Working with lists
const allList = document.querySelectorAll('li');

for (let i = 0; i < allList.length; i++) {
    allList[i].style.padding = "25px";
    allList[i].style.margin = "5px";
    allList[i].style.backgroundColor = "#fd5e53";
    allList[0].style.backgroundColor = "#21bf73";
    allList[1].style.backgroundColor = "#fddb3a";
}


// Working on Date 
function refreshTimeColor() {
    document.querySelector('p').style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}
setInterval(refreshTimeColor, 1000);
document.getElementById('time').style.padding = "25px";
document.getElementById('time').style.textAlign = 'center'

function myTimer() {
    const now = new Date();
    // let [day, month, date, year, time] = d.toString().split(' ');
    // let string = `${month} ${date}, ${year} ${time}`;
    document.getElementById('time').innerHTML = now.toLocaleString();
}
setInterval(myTimer, 1000);


// Working with year
const today = new Date()
const year = today.getFullYear()
document.getElementById('year').textContent = year;
document.getElementById('year').style.display = 'inline-block'
document.getElementById('year').style.fontSize = '2em'

function refreshColor() {
    document.querySelector('#year').style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
}
setInterval(refreshColor, 1000);


