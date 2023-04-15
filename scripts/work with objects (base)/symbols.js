'use strict';
/*
Символы позволяют создавать «скрытые» свойства объектов, к которым нельзя нечаянно обратиться и перезаписать их из других частей программы.
*/

// Создаём символ id с описанием (именем) "id"
let idSymbol = Symbol("identifier");

console.log(idSymbol.toString()); // Symbol(identifier)
console.log(idSymbol.description); // identifier

let user = {
    name: "user",
};

user[idSymbol] = 1;

console.log(user[idSymbol]); // 1