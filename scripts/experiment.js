let car = {
    make: 'Jeep',
    model: 'Wrangler',
    accelerate: function(){
        return this.model + ' drive away';
    },
    brake: function(){
        return this.make + ' pulls up';
    },
}

console.log(car.accelerate());
console.log(car.brake());