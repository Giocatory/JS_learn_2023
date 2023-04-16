'use strict';

// a*x^2 + b*x + c

function linear(a, b, c) {

    function variable(x) {
        return a * x**2 + b * x + c;
    }

    return variable;
}

let equation = linear(1, 2, 3)(2);


console.log(equation); // 11

// Counter

function counter() {
    let x = 0;

    return function(){
        return x++;
    }
}

let count = new counter();
console.log(count()); // 0
console.log(count()); // 1
console.log(count()); // 2