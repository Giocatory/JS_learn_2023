'use strict';

function sayHi(){
    console.log("Hi");

    sayHi.counter++;
}
sayHi.counter = 0;

sayHi();sayHi();sayHi();

console.log(`Функция ${sayHi.name} вызывалась ${sayHi.counter} раза.`); // Функция sayHi вызывалась 3 раза.



// Function

let func = new Function("a", "b", "console.log(`${a + b}`)");
func(10, 15); // 25