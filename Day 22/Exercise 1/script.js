// Question: Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red

document.querySelector('.wrapper').style.fontFamily = 'monospace';
document.querySelector('h1').style.textAlign = 'center';
document.querySelector('h2').style.textAlign = 'center';
document.querySelector('h2').style.fontWeight = 'notmal';
document.querySelector('h2').style.textDecoration = 'underline';
document.querySelector('h3').style.textAlign = 'center';
document.querySelector('h3').style.fontWeight = 'normal';
document.querySelector('h3').style.textDecoration = 'underline';
document.querySelector('#allNumbers').style.display = 'flex';
document.querySelector('#allNumbers').style.justifyContent = 'center';
document.querySelector('#allNumbers').style.alignItems = 'center';

function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}

let number
for (let i = 0; i < 102; i++) {
    number = document.createElement('p');
    number.style.fontSize = '25px';
    number.style.fontWeight = 'bold'
    number.style.color = '#fff'
    number.style.textAlign = 'center'
    number.style.padding = '13px 25px';
    number.style.margin = '0';
    number.textContent = i;
    if (isPrime(i)) {
        number.style.background = '#fd5e53'
    }
    else if (i % 2 == 0) {
        number.style.background = '#21bf73';
    } else {
        number.style.background = '#fddb3a';
    }

    document.querySelector('#allNumbers').appendChild(number);
}

const table = document.querySelector('#allNumbers');
table.style.display = 'grid';
table.style.gridTemplateColumns = '100px 100px 100px 100px 100px 100px';
table.style.gap = '10px 10px'