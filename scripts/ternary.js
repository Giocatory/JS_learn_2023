'use strict';

( function() {
    const numOne = 8;
    const numTwo = 3;

    let verb = (numOne !== 1) ? 'are' : 'is';
    console.log(`There ${verb} ${numOne}`);

    let parity = (numOne % 2 !== 0)? 'odd' : 'even';
    console.log(`${numOne} is ${parity}`);

    parity = (numTwo % 2!== 0)? 'odd' : 'even';
    console.log(`${numTwo} is ${parity}`);

    let max = numOne > numTwo? numOne : numTwo;
    console.log(`max is ${max}`);
})();