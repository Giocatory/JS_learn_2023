'use strict';

const user = {
    name: 'Mikhail',
    isAdmin: true,
    display,
}

function display(){
    if (this.isAdmin){
        console.log(`${this.name} is admin`);
    }
}

user.display(); // Mikhail is admin

const ladder = {
    step: 0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep(){
        console.log(this.step);
        return this;
    }
}

ladder.showStep().up().up().down().showStep(); // 0 1