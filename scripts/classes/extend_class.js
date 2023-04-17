'use strict';

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log((`${this.name} бежит со скоростью ${this.speed}.`));
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} стоит неподвижно.`);
    }
}

class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name); // нужно писать до this, и без этого не работает
        this.speed = 0;
        this.earLength = earLength;
    }
    hide() {
        console.log(`${this.name} прячется!`);
    }
    // override
    stop() {
        super.stop();
        this.hide();
    }
}
  
let rabbit = new Rabbit("Белый кролик", 10);
  
rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.stop(); 
// Белый кролик стоит неподвижно.
// Белый кролик прячется!
console.log(`Длинна ушей кролика: ${rabbit.earLength}`); // Длинна ушей кролика: 10