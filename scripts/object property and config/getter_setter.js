'use strict';

let user = {
    name: 'Mikhail',
    surname: 'Derkunov',
    
    get fullName() {
        return `${this.surname} ${this.name}`;
    },

    set fullName(full) {
        if (typeof full === 'string'){
            [this.surname, this.name] = full.split(' ');
        }
        if(typeof full === 'object'){
            [this.surname, this.name] = full;;
        }
    },
}

console.log(user.fullName); // Derkunov Mikhail

user.fullName = 'John Smith';
console.log(user.fullName); // John Smith

user.fullName = ['Derkunova', 'Tatyana'];
console.log(user.fullName); // Derkunova Tatyana
