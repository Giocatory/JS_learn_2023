'use strict';

const user = {
    name: 'John',
}

const descriptors = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptors, null, 2));

/*
{
    "value": "John", // значение
    "writable": true, // можно ли изменить
    "enumerable": true, // перечисляется ли в циклах
    "configurable": true // можно ли вообще производить какие-либо дейтвия
}
*/
