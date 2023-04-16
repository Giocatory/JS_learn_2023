'use strict';
/*
JSON.stringify для преобразования объектов в JSON.
JSON.parse для преобразования JSON обратно в объект.
*/

let university = {
    town: "Irkutsk",
    department: "application programming",
    toJSON() {  
        return university;
    }
}

let student = {
    name: 'John',
    age: 34,
    isAdmin: false,
    courses: [
        'html',
        'css',
        'javascript',
    ],
    wife: null,
    university,
}

let json = JSON.stringify(student);
console.log(typeof json); // string
console.log(json); 
/* 
{
    "name":"John",
    "age":34,
    "isAdmin":false,
    "courses":[
        "html",
        "css",
        "javascript"
    ],
    "wife":null,
    "university":{
        "town":"Irkutsk",
        "department":"application programming"
    }
}
*/

let studentBackToObject = JSON.parse(json);
console.log(studentBackToObject);
/*
{
  name: 'John',
  age: 34,
  isAdmin: false,
  courses: [ 'html', 'css', 'javascript' ],
  wife: null,
  university: { town: 'Irkutsk', department: 'application programming' }
}
*/