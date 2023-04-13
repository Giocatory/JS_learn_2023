let car = {
    make: 'Jeep',
    model: 'Wrangler',
    accelerate: function(){
        return this.model + ' поехал';
    },
    brake: function(){
        return this.make + ' тормозит';
    },
}

console.log(car.accelerate());
console.log(car.brake());

for (const val in car) {
    console.log(val);
}
/*
make
model
accelerate
brake
*/
car.engine = 'V6'
car.start = function(){
    return this.make + ` двигатель ${this.engine} работает`;
}

console.log(`У ${car.start()} и ${car.accelerate()}`); // У Jeep двигатель V6 работает и Wrangler поехал
