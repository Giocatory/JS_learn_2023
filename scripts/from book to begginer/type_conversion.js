let someText = '123.1qwerty';
console.log(parseInt(someText)); // 123
console.log(parseFloat(someText)); // 123.1

someText = "Mikhail";
console.log(parseInt(someText)); // NaN;

someText = true;
console.log(parseInt(someText)); // NaN


let str1 = "1";
let str2 = "2";

console.log(+str1 + +str2); // 3
console.log(+str1 + str2); // 12
console.log(str1 - str2); // -1

let n = 10;
console.log(n + ' ' + typeof n.toString()); // 10 string