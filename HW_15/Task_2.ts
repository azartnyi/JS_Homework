// Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы. 
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    CustomMap([1,2,3,4,5], callback) => [0,2,6,12,20]

interface Array<T> {
    customMap<U>(callback: (element: T, index: number, array: T[]) => U): U[];
  }
  
  Array.prototype.customMap = function <T, U>(callback: (element: T, index: number, array: T[]) => U): U[] {
    const result: U[] = [];
    
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };

const arr = [1,2,3,4,5];
const mappedArr = arr.customMap(num => num * 2);
console.log(mappedArr);

const arrMap = [1, 2, 3, 4, 5];
const doubled = arrMap.map(num => num * 2);
console.log(doubled);