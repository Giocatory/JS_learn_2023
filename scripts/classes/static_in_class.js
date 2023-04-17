'use strict';

class Counter{
    static #count = 0; // private static variable

    static get plus(){
        this.#count++;
        return this;
    }

    static get minus(){
        this.#count--;
        return this;
    }

    static show(){
        return this.#count;
    }
}

console.log(
    Counter?.plus.plus.plus?.minus?.show()
); // 2
