const digits = document.querySelectorAll(".digit");
const operatorsBtns = document.querySelectorAll(".operatorBtn");
const display = document.getElementById("display");
const addBtn = document.getElementById("add")
const subtractBtn = document.getElementById("subtract")
const multiplyBtn = document.getElementById("multiply")
const divideBtn = document.getElementById("divide")
const equalsBtn = document.getElementById("equals")
const clearBtn = document.getElementById("clear");


document.addEventListener('mousedown', (event) => {
    if(event.target.innerHTML == "0") 
    {display.innerHTML += event.target.innerHTML;
    getArgs();}
    if(event.target.innerHTML == "1") 
    {display.innerHTML += event.target.innerHTML;
    getArgs();}
    if(event.target.innerHTML == "2") 
    {display.innerHTML += event.target.innerHTML;
    getArgs();}
    if(event.target.innerHTML == "3") 
    {display.innerHTML += event.target.innerHTML;
    getArgs();}
    if(event.target.innerHTML == "4") 
    {display.innerHTML += event.target.innerHTML;
    getArgs();}
    if(event.target.innerHTML == "5") 
    {display.innerHTML += event.target.innerHTML;
    getArgs();}
    if(event.target.innerHTML == "6") 
    {display.innerHTML += event.target.innerHTML;
    getArgs();}
    if(event.target.innerHTML == "7") 
    {display.innerHTML += event.target.innerHTML;
    getArgs();}
    if(event.target.innerHTML == "8") 
    {display.innerHTML += event.target.innerHTML;
    getArgs();}
    if(event.target.innerHTML == "9") 
    {display.innerHTML += event.target.innerHTML;
    getArgs();}

})



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

function getArgs() {
    if((cumulativeArg.firstArg == '') || (cumulativeArg.operator == '')){
        cumulativeArg.firstArg = display.innerHTML;

    }    
    else  {
        cumulativeArg.secondArg = display.innerHTML;
}}

function updateDisplay() {
    display.innerHTML = 
   `${cumulativeArg.firstArg} 
    ${cumulativeArg.secondArg}`
}

function clearDisplay() {
    cumulativeArg.firstArg = ''
    cumulativeArg.operator = ''
    cumulativeArg.secondArg = ''
    updateDisplay()
}

function updateSolution() {
    cumulativeArg.firstArg = operate(cumulativeArg.operator, parseFloat(cumulativeArg.firstArg), parseFloat(cumulativeArg.secondArg)).toFixed(2);
    
    display.innerHTML = cumulativeArg.firstArg;
    cumulativeArg.operator = ''
    cumulativeArg.secondArg = ''
    updateDisplay()
}


// digits.forEach(digit => {digit.addEventListener('click', function() {
    
//     getArgs()
    
// })})



operatorsBtns.forEach(button => {button.addEventListener('click', function() {
    cumulativeArg.operator = button.textContent;
    display.innerHTML = ''
    
}

)})


equalsBtn.addEventListener('click', function() {
    updateSolution();
})

clearBtn.addEventListener('click', clearDisplay);
