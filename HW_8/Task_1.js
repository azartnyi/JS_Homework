// Task 1
// Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
//   1. forEach - выведите в консоль все числа, делящиеся без остатка на 3 // 30

const arrayTask1 = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];
const canDivideByThree = [];

arrayTask1.forEach((element) => {
if (element % 3 === 0) {
  canDivideByThree.push(element);
 }
});
console.log(canDivideByThree)

//   2. map - создайте новый массив, в котором из каждого элемента изначального массива вычли длину изначального массива 
//      // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]

const arrayTask2 = [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21];
const arrMinus2 = arrayTask2.map((element) => {
  return element - 2;
});

console.log(arrMinus2);


//   3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
//      // [8, 30, 85, 95, 94]

const arrayTask3 = [0, 1, 8, 30, 85, 95, 94]
const newArrayTask3 = arrayTask3.filter((element, index, array) => index > 0 && element > array[index - 1]);

console.log(newArrayTask3);

//   4. find - найдите элемент, равный своему индексу //2

const arrayTask4 = [1, 0, 2, 8, 30, 85, 95, 94]
const foundedElement = arrayTask4.find((element, index, array) => (element === index));

console.log(foundedElement);

//   5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
//      // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]

const arrayTask5 = [2, 7, 8, 30, 31, 37, 77, 85, 94, 95];
const sortedArray = [...arrayTask5].sort((a,b) => a - b);

console.log(sortedArray);

//   6. reduce - получите сумму всех чисел массива //

const arrayTask6 = [2, 7, 8, 30, 31, 37, 77, 85, 94, 95, 100, 101];
const sumOfArray = arrayTask6.reduce((accumulator, currentValue, currentIndex, array) => {
return accumulator + currentValue;
}, 0);

console.log(sumOfArray);

//   7. some - проверьте, есть ли в массиве элементы больше 90 //true

const arrayTask7 = [2, 7, 8, 30, 31, 37, 77, 85, 94, 95, 100, 101];
const hasLargeNumber = arrayTask7.some((element) => element > 90);

console.log(hasLargeNumber)

//   8. every - проверьте, что все элементы массива двухзначные //false

const arrayTask8 = [30, 31, 37, 77, 85, 94, 95, 100, 101];
const allLarge = arrayTask8.every((element) => element >= 10 && element < 100);

console.log(allLarge);

