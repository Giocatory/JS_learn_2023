'use strict';

// first variant
const person = {
    name: 'John',
    age: 30
};
  
function sayHello(greeting) {
  console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old.`);
}
  
const sayHelloToJohn = sayHello.bind(person, 'Hi');
sayHelloToJohn(); // "Hi, my name is John and I am 30 years old."


// second variant
const numbers = [1, 2, 3, 4, 5];

function sum() {
  const args = Array.from(arguments);
  return args.reduce((acc, curr) => acc + curr);
}

const boundSum = sum.bind(null, ...numbers);
const result = boundSum();
console.log(result); // 15
