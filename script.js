



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

console.log(operate(add, 1, 4))