'use strict';

let numArr = [1,2,3,4,5];

console.log(numArr.at(-1)); // 5 => numArr[numArr.length - 1]

console.log(numArr); // [ 1, 2, 3, 4, 5 ]
delete numArr[0];
console.log(numArr); // [ <1 empty item>, 2, 3, 4, 5 ]

numArr.shift(); // remove empty items
numArr.unshift(1); // insert 1 to start
console.log(numArr); // [ 1, 2, 3, 4, 5 ]

numArr.push(6); // insert 6 to end
console.log(numArr); // [ 1, 2, 3, 4, 5, 6 ]

let removed = numArr.pop(); // remove last item and return removed items
console.log(numArr); // [ 1, 2, 3, 4, 5 ]
console.log(`Removed: ${removed}`); // Removed: 6

numArr.length = 0; // clear array
console.log(numArr); // []

// method splice() can add, remove and change items

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Давай", "танцевать");
console.log( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

// удалить 1 элемент со 2 индекса
let indexToDelete = arr.indexOf("прямо"); // 2
removed = arr.splice(indexToDelete,1); // удаляет и возвращает, что удалил
console.log( arr ) // [ 'Давай', 'танцевать', 'сейчас' ]
console.log(`Removed: ${removed}`); // Removed: прямо

// вставить в конец элементы перед последним
arr.splice(-1, 0, "и", "только"); // [ 'Давай', 'танцевать', 'и', 'только', 'сейчас' ]
console.log(arr);

// фишка foreach
arr.forEach((item, index, arr) => {
    console.log(`Item: ${item};\t\tIndex: ${index};\t\tArray: [${arr}]`);
})
/*
Item: Давай;		Index: 0;		Array: [Давай,танцевать,и,только,сейчас]
Item: танцевать;	Index: 1;		Array: [Давай,танцевать,и,только,сейчас]
Item: и;		    Index: 2;		Array: [Давай,танцевать,и,только,сейчас]
Item: только;		Index: 3;		Array: [Давай,танцевать,и,только,сейчас]
Item: сейчас;		Index: 4;		Array: [Давай,танцевать,и,только,сейчас]
*/