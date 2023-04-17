'use strict';

const animal = {
    eats(){
        return `Животное кушает`;
    },
    walk() {
        return 'Животное гуляет';
    }
};

const rabbit = Object.create(animal, {
    name: {
        value: 'White Rabbit',
    }
});

console.log(`${rabbit.name}: ${rabbit.walk()}`); // White Rabbit: Животное гуляет
