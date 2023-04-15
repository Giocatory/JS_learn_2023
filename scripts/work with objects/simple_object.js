'use strict';

let user = {
    name: 'Mikhail',
    isAdmin: true,
    employee:{
        position: 'middle',
        salary: 200000,
    },
}

console.log(`User ${user?.name}: position admin ${user?.isAdmin}`); // User Mikhail: position admin true
console.log(`In company position ${user?.employee?.position} with salary ${user?.['employee']?.['salary']}`); // In company position middle with salary 200000

console.log(`\nTypeOf user: ${typeof user}\n`);

for(let value in user) {
    
    if(user[value].toString() === "[object Object]"){
        console.log(`${value}:`);
        for (let subValue in user[value]){
            console.log(`\t${subValue}: ${user[value][subValue]}`);
        }
        continue;
    }

    console.log(`${value}: ${user[value]}`);
}

