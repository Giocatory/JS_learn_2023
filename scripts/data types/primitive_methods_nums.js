'use strict';

let str = 21;
console.log(str.toString(2)); // 10101
// or
console.log(15..toString(2)); // 1111 => analogue: (15).toString(2)

// isNaN(): приводит аргумент к числу и проверят, число ли это
let someText = "15";
if (!isNaN(someText)){
    console.log(someText);
}

// Parse
console.log(parseInt("25 years ago, how 1")); // 25

console.log(
    isNaN(parseInt("I'm 35")) ? 0: parseInt("I'm 35")
); // 0

// Min Max
let numbs = [1,2,3,-4,5,-1,7,8,-9];
console.log(Math.min(...numbs)); // -9
console.log(Math.max(...numbs)); // 8

// toFixed() use Math.ceil() *** return String ***
let num = 3.56;
console.log(num.toFixed(0)); // 4
console.log(num.toFixed(1)); // 3.6
console.log(num.toFixed(3)); // 3.560