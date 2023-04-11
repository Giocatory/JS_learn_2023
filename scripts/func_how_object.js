function Person (name, age, year) {
        this.name = name;
        this.age = age;
        this.year = year;
}

let employee = new Person('John', 25, 1990);

console.log(employee.name);
console.log(employee.age);
console.log(employee.year);
/*
    John
    25
    1990
 */

let company = {
    name: 'Google',
    age: 25,
    hiredYear: 1990
};

console.log(company.name);
console.log(company.age);
console.log(company.hiredYear);
/*
    Google
    25
    1990
*/
company.info = () => { console.log(`Company ${company.name} create in ${company.hiredYear}`);};
company.info(); // Company Google create in 1990