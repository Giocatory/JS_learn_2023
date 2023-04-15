'use strict';

function User(name, role=""){
    // this = {};  (неявно)

    this.name = name;
    if(role.toLowerCase() === "admin"){
        this.role = role;
    } else {
        this.role = "User";
    }

    this.info = (() => {
        return `${this.name}: ${this.role}`;
    })();

    // return this;  (неявно)
}

let userFirst = new User('Mikhail', "Admin");
let userSecond = new User('Tatyana')

console.log(userFirst?.info); // Mikhail: Admin
console.log(userSecond?.info); // Tatyana: User