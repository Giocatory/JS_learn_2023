let jsString = 'Text'; // неверно — new String( 'Text' ).
let jsNumber = 125000; // неверно — new Number( 125000 ).
let jsBoolean = true; // неверно — new Boolean( true ).

let jsObject = {firstName: 'John', lastName: 'McGrath'}
let jsDate = new Date();
let jsArray = [1,2,3];
let jsRegExp = /ineasysteps/i;
let jsMath = Math;
let jsError = new Error('Error!');

console.log('Date Object: ' + jsDate);
// Date Object: Thu Apr 13 2023 22:16:16 GMT+0800 (Иркутск, стандартное время)
console.log('Local Date: ' + jsDate.toLocaleString());
// Local Date: 13.04.2023, 22:16:16

console.log('\nPrimitive Number: ' + jsNumber);
// Primitive Number: 125000
console.log('Locale Number String: ' + jsNumber.toLocaleString());
// Locale Number String: 125 000