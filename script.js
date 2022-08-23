const digits = document.querySelectorAll(".digit");
const operatorsBtns = document.querySelectorAll(".operatorBtn");
const display = document.getElementById("display");
const pointBtn = document.getElementById("point")
const addBtn = document.getElementById("add")
const subtractBtn = document.getElementById("subtract")
const multiplyBtn = document.getElementById("multiply")
const divideBtn = document.getElementById("divide")
const equalsBtn = document.getElementById("equals")
const clearBtn = document.getElementById("clear");

const cumulativeArg = {
operator: '', 
firstArg: '', 
secondArg: ''
}



function add(a, b) {
    return parseFloat(a) + parseFloat(b);
};

function subract(a, b) {
    return parseFloat(a) - parseFloat(b);
};

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
};

function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
};

function operate(operator, num1, num2) {
    switch(operator) {
    case '+':
        return add(num1, num2);
    case '-':
        return subract(num1, num2);
    case '*':
        return multiply(num1, num2);
    case '/':
        return divide(num1, num2);  
    }
   
};

function updateDisplay() {
    display.innerHTML = 
   `${cumulativeArg.firstArg} 
    ${cumulativeArg.operator}
    ${cumulativeArg.secondArg}`
}

function clearDisplay() {
    cumulativeArg.firstArg = ''
    cumulativeArg.operator = ''
    cumulativeArg.secondArg = ''
    updateDisplay()
}

function updateSolution() {
    cumulativeArg.firstArg = operate(cumulativeArg.operator, parseFloat(cumulativeArg.firstArg), parseFloat(cumulativeArg.secondArg))
    display.innerHTML = cumulativeArg.firstArg;
    cumulativeArg.operator = ''
    cumulativeArg.secondArg = ''
}

clearBtn.addEventListener('click', clearDisplay);

digits.forEach(digit => {digit.addEventListener('click', function() {
    
    if(cumulativeArg.firstArg === ''){
        cumulativeArg.firstArg = digit.innerHTML;
        updateDisplay();
    }    
    else if(cumulativeArg.firstArg !== '' && cumulativeArg.secondArg === '') {
        cumulativeArg.secondArg = digit.innerHTML;
        updateDisplay();
    }
    
})})

operatorsBtns.forEach(button => {button.addEventListener('click', function() {
    cumulativeArg.operator = button.textContent;
    updateDisplay()

}

)})


equalsBtn.addEventListener('click', function() {
    updateSolution();
})

console.log(operate(cumulativeArg.operator, parseFloat(cumulativeArg.firstArg), parseFloat(cumulativeArg.secondArg)))