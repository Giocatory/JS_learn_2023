'use strict';

let users = [
    {id : 1, name : 'Mike', age : 35},
    {id : 2, name : 'John', age : 34},
    {id : 3, name : 'Peter', age : 32},
]

// method find()

let user = users.find(user => user.id === 2);
console.log(user.name); // John

let userName = users.find(user => user.id === 1)?.name;
console.log(userName); // Mike

// method filter()

let someUsers = users.filter(user => user.id < 3); // return array of users
console.log(someUsers); // [ { id: 1, name: 'Mike', age: 35 }, { id: 2, name: 'John', age: 34 } ]

// method map

let userNames = users.map(user => user.name);
console.log(userNames); // [ 'Mike', 'John', 'Peter' ]

// method reduce

let middleUserAges = (
                        users
                            .map(user => user.age)
                            .reduce((sum, n) => sum + n) 
                            / users.length
                     ).toFixed(0); // 33.666666666666664 => 34

console.log(middleUserAges); // 34