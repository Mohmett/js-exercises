// Exercise 30


function operate(a,b,calculate){
    return calculate(a,b);
}

function addition(a,b){
    return(a+b);
}

function subtraction(a,b){
    return(a-b);
}

function multiply(a,b){
    return(a*b);
}

function division(a,b){
    return(a/b);
}

console.log("Addition:", operate(40,4,addition));
console.log("Substraction:", operate(40,4,subtraction));
console.log("Multiplication:", operate(40,4,multiply));
console.log("Division:", operate(40,4,division));