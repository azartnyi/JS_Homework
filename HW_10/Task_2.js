// У вас есть массив чисел. 
// Напиши функцию countOccurrences, которая принимает массив чисел и возвращает объект с подсчётом каждого числа.

const numbers = [1, 2, 2, 3, 4, 4, 4, 5];

// Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }

function countOccurrences(arr) {
return arr.reduce((acc, element) => {
    acc[element] = acc[element] ? acc[element] + 1 : 1;
    return acc;
  }, {});
}
console.log(countOccurrences(numbers));

// let obj = {};
// arr.forEach((element) => { 
// if (obj[element]) {
//     obj[element]++;
// } 
// else {
// obj[element] = 1;
// }
// });
// return obj;