'use strict';
// Promise - это объект в JavaScript, который используется для управления асинхронными операциями. 
// Он представляет собой обещание выполнить определенную операцию и вернуть результат. 
// Promise может находиться в трех состояниях: ожидание (pending), выполнено (fulfilled) и отклонено (rejected).

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject('нечетное число');
      }
    }, 1000);
});
  
promise.then((result) => {
    console.log(`The result:  ${result}`);
}).catch((error) => {
    console.log(`The error: ${error}`);
});

// В этом примере мы создаем новый Promise, который через 1 секунду генерирует случайное число и,
// если число четное, возвращает его через метод resolve, а если число нечетное, возвращает ошибку через метод reject.
// Затем мы вызываем метод then на объекте Promise, чтобы обработать успешный результат, и метод catch, чтобы обработать ошибку.

// Promise - это способ обрабатывать асинхронный код в JavaScript.
// Он позволяет выполнить операцию, которая может занять время, и получить результат в будущем, когда операция завершится.
// Promise имеет три состояния: ожидание, выполнено и отклонено.
// Когда Promise выполнен, мы можем обработать результат с помощью метода then, а когда Promise отклонен, мы можем обработать ошибку с помощью метода catch.
// Promise используется вместе с асинхронным кодом, например, для загрузки данных из сети или базы данных.

/* Task */
// Предположим, вы хотите загрузить данные из сети,
//  например, список товаров из интернет-магазина.
// Вы можете использовать Promise, чтобы отправить запрос на сервер и получить ответ, когда данные будут готовы.

const promiseDate = fetch('https://api.example.com/products');

promiseDate.then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
}).catch((error) => {
  console.error(error);
});

/*
TypeError: fetch failed
    at Object.fetch (node:internal/deps/undici/undici:11457:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
    cause: Error: getaddrinfo ENOTFOUND api.example.com
     at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:107:26) {
    errno: -3008,
    code: 'ENOTFOUND',
    syscall: 'getaddrinfo',
    hostname: 'api.example.com'
  }
}
*/