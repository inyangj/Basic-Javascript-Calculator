const output = document.querySelector('.output');
const buttons = document.querySelectorAll('.button');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');

buttons.forEach(button => {
button.addEventListener('click', () => {
    const buttonValue = button.innerText;
    if (buttonValue === 'AC') {
    output.textContent = '0'; 
    } else if (buttonValue === '%') {
        output.textContent += ' * .01'
    }else if (buttonValue === 'DEL') {
        output.textContent = output.textContent.slice (0, -1)
    }
    else if (buttonValue === '=') {
    try {
        output.textContent = eval(output.textContent);
    } catch (error) {
        output.textContent = 'Error';
    }
    } else {
    if (output.textContent === '0') {
        output.textContent = buttonValue;
    } 
    else {
        output.textContent += buttonValue;
    }
    }
});
});

// clearButton.addEventListener('click', () => {
// output.textContent = '0';
// });


