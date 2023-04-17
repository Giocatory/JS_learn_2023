'use strict';

class User{
    constructor(username){
        // call setter
        this.username = username;
    }

    set username(val){
        this.name = val;
    }

    get username(){
        return this.name
    }

    sayHi(){
        console.log(`I'm ${this.__username}`);
    }

    toString(){
        return `Class name: ${User.name}`;
    }
}

const user = new User('Mikhail');
user.sayHi(); // I'm Mikhail
console.log(user.toString()); // Class name: User
console.log(user.username); // Mikhail