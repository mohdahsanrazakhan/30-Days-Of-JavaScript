
let main = document.querySelector('div');
main.style.fontFamily = 'monospace';
main.style.display = 'flex';
main.style.flexDirection = 'column';
main.style.justifyContent = 'center';
main.style.alignItems = 'center';

let message = document.querySelector('h1');
message.style.width = '500px';
message.style.padding = '40px';
message.style.boxShadow = '2px 2px 12px 2px rgba(0,0,0,0.2)';
message.style.textAlign = 'center';
message.style.fontSize = '2.5rem';
message.style.textShadow = '1px 1px 0px rgba(0,0,0,0.2)'
message.textContent = `Press any keyboard key`;

let keyCode = document.querySelector('p')

document.body.addEventListener('keypress', e => {
    let code, complete
    code = document.querySelector('h1');
    code.textContent = e.key;
    message.textContent = `You pressed ${e.key}`;
    message.style.textShadow = '1px 1px 0px rgba(0,0,0,0.2)'
    keyCode.style.width = '50px';
    keyCode.style.padding = '40px';
    keyCode.style.borderRadius = '10px'
    keyCode.style.boxShadow = '2px 2px 12px 2px rgba(0,0,0,0.2)';
    keyCode.style.textAlign = 'center';
    keyCode.style.fontSize = '2rem';
    keyCode.style.fontWeight = 'bold';
    keyCode.style.color = '#5bbc7a';
    keyCode.style.textShadow = '1px 1px 0px #000'
    keyCode.textContent = e.keyCode;
})