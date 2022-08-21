const digits = document.querySelectorAll(".digit");
const operatorsBtns = document.querySelectorAll(".operatorBtn");
const display = document.getElementById("display");
const addBtn = document.getElementById("add")
const subtractBtn = document.getElementById("subtract")
const multiplyBtn = document.getElementById("multiply")
const divideBtn = document.getElementById("divide")
const equalsBtn = document.getElementById("equals")
const clearBtn = document.getElementById("clear");
let operator = '+';
let firstNum = '1';
let secondNum = '6';



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
        return divide(num1, num2)  
    }

};



function updateDisplay(e) {
    display.innerHTML = e.target.textContent 
}

function clearDisplay() {

}



digits.forEach(digit => {digit.addEventListener('click', function() {
    
    display.innerHTML = digit.innerHTML;

    if(firstNum == undefined){
        firstNum = digit.innerHTML
    }    
    else if(firstNum !== undefined && secondNum == undefined) {
        secondNum = digit.innerHTML
    }
    
})})

operatorsBtns.forEach(button => {button.addEventListener('click', function() {
    operator = button.textContent
    display.innerHTML = button.textContent
}

)})


equalsBtn.addEventListener('click', operate)

console.log(operate(operator, firstNum, secondNum))