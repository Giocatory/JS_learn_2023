// анонимная функция
let printHello = () => {
    console.log('Hello');
};

printHello(); // Hello

// самовызываем функцию
let printWorld = (() => {
    console.log('World');
})(); // World

