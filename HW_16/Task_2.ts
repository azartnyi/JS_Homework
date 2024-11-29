// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

function getKeyByValue<T extends object, U>(obj: T, value: U): keyof T | undefined {
    for (const key in obj) {
      if (obj[key] === value) {
        return key as keyof T;
      }
    }
    return undefined;
  }

  const person1 = {
    name: "Alex",
    age: 30,
    city: "Kazan"
  };
  
  const key1 = getKeyByValue(person1, "Alex"); 
  const key2 = getKeyByValue(person1, 30);      
  const key3 = getKeyByValue(person1, "Moscow"); 

  console.log(key1, key2, key3);