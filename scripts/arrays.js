// 3 варианта создания массива
let myarrOne = new Array();
myarrOne[0] = 1;
myarrOne[1] = 2;

let myarrTwo = new Array(2);
myarrTwo[0] = 3;
myarrTwo[1] = 4;
myarrTwo[2] = 5;

let myarrThree = new Array(6, 7, 8);

let myarrFour = [9, 10, 11];

console.log(myarrOne);
console.log(myarrTwo);
console.log(myarrThree);
console.log(myarrFour.map( x => x + 2)); // [ 11, 12, 13 ]
console.log(myarrFour.reduce( (a, b) => a + b) ); // 30
console.log(myarrTwo.join('; ')); // "3; 4; 5"

console.log(myarrOne.push(9)); // [ 1, 2, 9 ]
myarrOne.pop(); // del last item
console.log(myarrOne); // [ 1, 2 ]
console.log(myarrOne.reverse()); // [ 2, 1 ]


let myStrArr = "1,2,3,4,5".split(',');
console.log(myStrArr); // [ '1', '2', '3', '4', '5' ]
let strArrToNum = myStrArr.map( x => parseInt(x));
console.log(strArrToNum); // [ 1, 2, 3, 4, 5 ]


let arr = [3, 4, 8, 8];
arr = arr.sort();

console.log(
    Math.floor(Math.max(...arr) / Math.min(...arr))
); // 2