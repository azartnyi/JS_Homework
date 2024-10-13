// Имеется объект const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }


const character = { 
    'name': 'Barney', 
    'age': 36, 
    'gender': 'male', 
    'isQa': true
}

const allKeys = Object.keys(character);
const allValues = Object.values(character);
const allEntries = Object.entries(character);

// 1. Создать массив из ключей объекта character и вывести в консоль те, где 4 буквы //name, isQa

console.log('------------Task 1.1-------------');

const arrFourLetter = allKeys.filter((allKeys) => allKeys.length === 4);

console.log(arrFourLetter);

// 2. Создать массив из значений объекта character и вывести в консоль те, где тип данных строка //'Barney', 'male'

console.log('------------Task 1.2-------------');
const arrStringKeys = allValues.filter((allValues) => typeof(allValues) === 'string');

console.log(arrStringKeys);

// 3. Создать массив из ключей и значений объекта character, перебрать массив циклом for. 
//    На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`

console.log('------------Task 1.3-------------');

for (let pair of allEntries) {
    //console.log(pair);
    //console.log(allEntries);
    console.log(`key = ${pair[0]}, value = ${pair[1]}`);
}


// 4. Проверить, есть ли в объекте ключ salary, результат вывести в консоль 
//    (Реализовать 2мя способами: через оператор in и Object.hasOwn())
console.log('------------Task 1.4-------------');

console.log('salary' in character);
console.log(Object.hasOwn(character, 'salary'))