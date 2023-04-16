'use strict';

let users = [
    {id : 1, name : 'Mike'},
    {id : 2, name : 'John'},
    {id : 3, name : 'Peter'},
]

// method find()

let user = users.find(user => user.id === 2);
console.log(user.name); // John

let userName = users.find(user => user.id === 1)?.name;
console.log(userName); // Mike

// method filter()

let someUsers = users.filter(user => user.id < 3); // return array of users
console.log(someUsers); // [ { id: 1, name: 'Mike' }, { id: 2, name: 'John' } ]