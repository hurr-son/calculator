const digits = document.querySelectorAll(".digit");
const operatorsBtns = document.querySelectorAll(".operatorBtn");
const display = document.getElementById("display");
const addBtn = document.getElementById("add")
const subtractBtn = document.getElementById("subtract")
const multiplyBtn = document.getElementById("multiply")
const divideBtn = document.getElementById("divide")
const equalsBtn = document.getElementById("equals")
const clearBtn = document.getElementById("clear");

//I want to be able to store the selected operator so the 
//operate function can call it when clicked.



let calcLog = {value1: 0, value2: 0};
let operators = {
    '+': add,
    '-': subract,
    '*': multiply,
    '/': divide,
}




operatorsBtns.forEach(button => {button.addEventListener('click',
function() {
    display.innerHTML = button.textContent
    key =  button.textContent
}
)})


digits.forEach(digit => {digit.addEventListener('click', function() {
    
    display.innerHTML = digit.innerHTML;
    if (calcLog.value1 === 0) {
        calcLog.value1 =  parseInt(digit.innerHTML)
    }
    else if (calcLog.value1 !== 0 && calcLog.value2 === 0) {
        calcLog.value2 = parseInt(digit.innerHTML)
    }
})})



function operate(operator, a, b) {
    
    display.innerHTML = operator.call(this, a, b);
};
let key = '';
subtractBtn.click()
let chosenOperator = operators[key]
console.log(key)
console.log(operators[key])

equalsBtn.addEventListener('click', operate

)

console.log(operate(chosenOperator, 5, 1))




function add(a, b) {
    return (a + b);
};

function subract(a, b) {
    return (a - b);
};

function multiply(a, b) {
    return (a * b);
};

function divide(a, b) {
    return (a / b);
};


