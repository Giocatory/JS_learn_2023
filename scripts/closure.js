const add = (function () {
    let count = 0;
    
    const nested = function (){
        return count += 1;
    };

    return nested;
})();


for (let index = 0; index < 3; index++) {
    console.log(`Count is: ${add()}`);
}

/*
Count is: 1
Count is: 2
Count is: 3
*/

console.log(add.prototype);