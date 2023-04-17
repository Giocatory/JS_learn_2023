'use strict';

// call
const person = {
    name: 'John',
    age: 35,
}

function sayHello(){
    console.log(`Hello, my name is ${this.name}, and I'm ${this.age} years old`);
}

sayHello.call(person); // Hello, my name is John, and I'm 35 years old

// apply
const numbers = [1, 2, 3, 4, 5];

function sum() {
  const args = Array.from(arguments);
  return args.reduce((acc, curr) => acc + curr);
}

const result = sum.apply(null, numbers);
console.log(result); // 15
