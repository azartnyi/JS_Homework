// 1. Context
//   - Создайте объект qa с полями name, age, salary и методом getInfo(greetingsWord), который будет возвращать строку вида: 
//     `${greetingsWord}, my name is ${name}, i'm ${age} and my salary is ${salary}`. 
//     Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.

const qa = {
    name: "Alex",
    age: 29,
    salary: "300$",
    getInfo: function(greetingsWord) {
        return `${greetingsWord}, my name is ${this.name}, i'm ${this.age} and my salary is ${this.salary}`;
      }
}

console.log(qa.getInfo('Zdarova'));

// 2. Changing the context
//   - Создайте объект anotherQa с полями name, age, salary, значения в которых будут отличны от объекта qa

const anotherQa = {
    name: "Antony",
    age: 34,
    salary: "400$",
}

console.log(qa.getInfo('Zdarova'));

//   - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода bind()

const bindAnotherQa = qa.getInfo.bind(anotherQa);
console.log (bindAnotherQa('Zdarova'));

//   - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода call()

const callAnotherQA = qa.getInfo.call(anotherQa, 'Priffki');
console.log(callAnotherQA);

//   - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода apply()

const applyAnotherQA = qa.getInfo.call(anotherQa, ['Hi']);
console.log(applyAnotherQA);

// 3. Closures
//   - Создайте функцию createCounter(),
//   - Создайте в функции createCounter переменную count, которая будет равна 0
//   - Верните из функции createCounter новую функцию
//   - В теле новой функции реализуйте увеличение count на + 1 при каждом вызове функции
//   - После увеличение каунтера выводите в консоль `Function was called ${count} times`
//   - Создайте переменную functionCallCounter, в которой будет лежать результат createCounter()
//   - Вызовите functionCallCounter() 5 раз, убедитесь что в консоли верно выводятся данные

function createCounter(){
    let count = 0;

    return function newFunction()
    {
        ++count;
        console.log(`Function was called ${count} times`);
    };
}

const functionCallCounter = createCounter();

functionCallCounter();
functionCallCounter();
functionCallCounter();
functionCallCounter();
functionCallCounter();
