'use strict';
import * as say from "./sayHi.js"; // в корень надо добавить фаил json и у модуля ставить расширение .mjs

let helloMessage = say.sayHi('Mikhail', "Hello");
console.log(helloMessage); // Hello Mikhail
console.log();

import { factorial } from "./module.mjs";
console.log(factorial(5)); // 120


// if in html file
// <!doctype html>

// <script type="module">
//   import {sayHi} from './say.js';

//   document.body.innerHTML = sayHi('John');
// </script>