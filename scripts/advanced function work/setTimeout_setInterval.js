'use strict';
// let timerId = setTimeout(func, [delay], [arg1], [arg2], ...);

function sayHi(phrase, name) {
    console.log(phrase + ', ' + name);
}

// выведет "Привет, Михаил" с задержкой в 1 секунду
setTimeout(sayHi, 1000, "Привет", "Михаил");

// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...);

// повторить с интервалом 1.5 секунды
let timerId = setInterval( () => {console.log("Tick");}, 1500);
// остановить вывод через 10 секунд
setTimeout( () => {clearInterval(timerId); console.log("Stop tick...");}, 10000 )


// experiment with Date.now
function dateView(){
    let dt = new Date();
    console.log(dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds());
}
let currentTime = setInterval( dateView, 1000 );
setTimeout( () => {clearInterval(currentTime)}, 50000);