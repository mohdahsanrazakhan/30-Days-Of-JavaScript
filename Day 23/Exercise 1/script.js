
document.querySelector('.wrapper').style.fontFamily = 'monospace';
document.querySelector('h1').style.textAlign = 'center';
document.querySelector('h1').style.fontSize = '2.5em';
document.querySelector('h1').style.color = '#21bf73';
document.querySelector('h2').style.textAlign = 'center';
document.querySelector('h2').style.fontWeight = 'notmal';
document.querySelector('h3').style.textAlign = 'center';
document.querySelector('h3').style.fontWeight = 'normal';
document.querySelector('.numbers').style.display = 'flex';
document.querySelector('.numbers').style.justifyContent = 'center';
document.querySelector('.numbers').style.margin = '15px';
document.querySelector('#searchNumber').style.padding = '10px';
document.querySelector('#searchNumber').style.width = '450px';
document.querySelector('#searchNumber').style.borderColor = '#21bf73';
document.querySelector('#searchNumber').style.marginRight = '10px';
document.querySelector('#searchNumber').style.outline = 'none';
document.querySelector('#searchNumber').style.borderStyle = 'ridge';
document.querySelector('#btn').style.background = '#21bf73';
document.querySelector('#btn').style.borderColor = '#21bf73';
document.querySelector('#btn').style.borderStyle = 'ridge';
document.querySelector('#btn').style.color = '#fff';
document.querySelector('#btn').style.fontWeight = 'bold';
document.querySelector('#allNumbers').style.display = 'flex';
document.querySelector('#allNumbers').style.justifyContent = 'center';
document.querySelector('#allNumbers').style.alignItems = 'center';

function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}

function clean() {
    document.getElementById('allNumbers').innerHTML = '';
}

const num = document.querySelector('#searchNumber');
const button = document.querySelector('#btn');
let number;
button.addEventListener('click', () => {
    clean();
    for (let i = 0; i < num.value; i++) {
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
})


const table = document.querySelector('#allNumbers');
table.style.display = 'grid';
table.style.gridTemplateColumns = '100px 100px 100px 100px 100px 100px';
table.style.gap = '10px 10px'