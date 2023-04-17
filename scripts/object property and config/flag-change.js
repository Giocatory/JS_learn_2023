'use strict';

const user = {
}

// Если не писать флаги, то не увидишь нигде и ничего :)
/*
Object.defineProperty(user, 'name', {
    value: "Mikhail",
    writable: true, // false - readonly
    enumerable: true,
    configurable: true
});
*/

Object.defineProperties(user, {
    name : {
        value: "Mikhail",
        writable: true, // false - readonly
        enumerable: true,
        configurable: true
    },
    age : {
        value: 35,
        writable: true, // false - readonly
        enumerable: true,
        configurable: true
    },
});

for (const key in user) {
    console.log(key);
}
// name
// age

// убрать age из перечисления
Object.defineProperty(user, 'age', {
    enumerable: false,
});

for (const key in user) {
    console.log(key);
}
// name