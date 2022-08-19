const digits = document.querySelectorAll(".digit");
const display = document.getElementById("display");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const equalsBtn = document.getElementById("equals");


let calcLog = {value1: 0, value2: 0};
let operators = {
    '+': add,
    '-': subract,
    '*': multiply,
    '/': divide
}



const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');





digits.forEach(digit => {digit.addEventListener('click', function() {
    
    display.innerHTML = digit.innerHTML;
    if (calcLog.value1 === 0) {
        calcLog.value1 =  parseInt(digit.innerHTML)
    }
    else if (calcLog.value1 !== 0 && calcLog.value2 === 0) {
        calcLog.value2 = parseInt(digit.innerHTML)
    }
    else {
        calcLog.value1 = parseInt(digit.innerHTML)
        calcLog.value2 = 0
    }   
})})

two.click()
three.click()
//four.click()
console.table(calcLog)

function operate(operator, a, b) {
    return operator.call(this, a, b);
};


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

