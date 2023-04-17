'use strict';

const animal = {
    eats(){
        return `Животное кушает`;
    },
    walk() {
        return 'Животное гуляет';
    }
};

const rabbit = {
    __proto__: animal,
    jumps: true,
}

const rabbitChild = {
    __proto__: rabbit,
}

console.log(rabbit.walk()); // Животное гуляет
console.log(rabbitChild.eats()); // Животное кушает