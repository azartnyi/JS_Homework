// Task 1
// 1. Бесконечные аргументы
//   - Напишите функцию, принимающую на вход любое количество массивов
//   - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
//   - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
//   - Решить с использованием Spread operator

let result = [];
function mergeArrays(...arrays) {
    for (let array of arrays) {
      result = [...result, ...array]
    }
    return result;
  }
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));  

// 2. Devide by _
//   - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
//   - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
//   - Пример: I am super engineer => i_Am_Super_Engineer

//const sentence = 'I am super engineer'

function devideBy_(sentence = '') {
  const wordsInSentence = sentence.split(" ");
  let result = [];

  for (let i = 0; i < wordsInSentence.length; i++) {
    let word = wordsInSentence[i];

    if (i === 0) {
      result.push(word[0].toLowerCase() + word.slice(1));
    } else {
      result.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
  }
  return console.log(result.join('_'));
}

devideBy_('Hello I`Am meow');

// 3. Фибаначчи
//   - Напишите функцию fibanacci(n), возвращающую энное число Фибоначчи
//   - числа Фибоначчи (строка Фибоначчи) — числовая последовательность, первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
//   - Например fibanacci(8) //21

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  
  let a = 0;
  let b = 1;
  let result;

  for (let i = 2; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }

  return result;
}

console.log(fibonacci(8));
