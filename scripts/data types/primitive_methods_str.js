'use strict';

let someText = 'some text';
console.log(someText.length + someText[0] + someText[someText.length-2]); // 9sx

let arr = [];
for(let char of someText){
    arr.push(char);
}
console.log( arr.join('.').replace(" .", " ")+'.'); // s.o.m.e. t.e.x.t.

console.log(`\nSubString 'te' in someText: ${someText.includes('te')}`); // SubString 'te' in someText: true

someText = "1 apple, 2 potato, 3 orange";
arr = [];
for (let char of someText){
    if(isFinite(char)) arr.push(char);
}
let numbers = arr.join('').replace("  ", "").replace(" ", "").replace(" ", "").trim(); // 123
console.log(numbers.split("").join(', ')); // 1, 2, 3

someText = "Давайте вспомним, как мы обычно читаем журналы или сайты в интернете. Мы не читаем их от корки до корки (особенно сайты — у них и корок-то нет). Мы не читаем все подряд, а выбираем для чтения отдельные статьи. На основании чего мы это делаем?";
let smallText = someText.slice(someText.indexOf("На"));
console.log(smallText); // На основании чего мы это делаем?