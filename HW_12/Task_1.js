// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию,
// которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function delayTwoSeconds(callback) {
    setTimeout(callback, 2000); 
}

delayTwoSeconds(() => {
    console.log("Two seconds later...");
});


// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль


const promise = new Promise((resolve, reject) => {
    resolve(1);
});
promise.then((result) => {
    console.log(result);
});


// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль

const newPromise = new Promise((resolve, reject) => { 
    reject("Promise failed");
 })
 newPromise.catch((error) => {
    console.log(error);
});


// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber (number) {
    return new Promise((resolve, reject) => {
        resolve(number)
     });
}

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
    // console.log(results[0]);
    // console.log(results[1]);
    // console.log(results[2]);
    results.forEach((result) => {
        console.log(result);
    });
});
// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
        results.forEach((result) => {
            console.log(result.status)
            if (result.status === 'fulfilled') {
                console.log(result.value);
            } else if (result.status === 'rejected') {
                console.log(result.reason);
            }
        });
    });

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function asyncPromises() {
    const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((result) => {
        console.log(result);
    });
}

try {
    const settledResults = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    settledResults.forEach((result) => {
        console.log(result.status)
        if (result.status === 'fulfilled') {
            console.log(result.value);
        } else if (result.status === 'rejected') {
            console.log(result.reason);
        }
    });
} catch (error) {
    console.log(error);
}