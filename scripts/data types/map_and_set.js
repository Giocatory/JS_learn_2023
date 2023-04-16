'use strict';

let recipeMap = new Map();

recipeMap.set("Помидор", 350);
recipeMap.set("Лук", 50);
recipeMap.set("Огурец", 500);

recipeMap.forEach((key, value) => {
    console.log(value+" - "+key);
})

console.log(Array.from(recipeMap)); // [ [ 'Помидор', 350 ], [ 'Лук', 50 ], [ 'Огурец', 500 ] ]

recipeMap.set("Морковь", 200);
console.log(recipeMap.get("Морковь")); // 200

// map to object

let recipeObject = Object.fromEntries(recipeMap);
console.log(recipeObject); // { 'Помидор': 350, 'Лук': 50, 'Огурец': 500, 'Морковь': 200 }

// SET is unique values

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
console.log(set.size); // 3

for (let user of set) {
    console.log(user.name); // John (потом Pete и Mary)
}

// experiment

let nums = Array.from(new Set([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 3, 3, 5, 6, 2, 9]));
console.log(nums); // [1, 2, 3, 4, 5, 6, 7, 8, 9]