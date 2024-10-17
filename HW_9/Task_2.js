const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];

// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
//     Объект должен иметь поля name (string) и age (number)

console.log('------------------------Task 2.1-----------------------')

function addCharacter(character) {
  if (typeof character.name === 'string' && typeof character.age === 'number') { 
return characters.push(character);
  }
};
addCharacter({ 'name': 'Alex', 'age': 29 })
console.log(characters);

// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени
// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }

console.log('------------------------Task 2.2-----------------------')

function getCharacter(name) {
  return characters.find(character => character.name === name);
};

console.log(getCharacter('Fred'));

// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge 
// getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]

console.log('------------------------Task 2.3-----------------------')

function getCharactersByAge(minAge) {
const minimalAge = characters.filter(character => character.age >= minAge);
return minimalAge;
};

console.log(getCharactersByAge(50))

// 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)

console.log('------------------------Task 2.4-----------------------')

function updateCharacter(name, newCharacter) {
  const character = getCharacter(name);
  if (character) {
     return Object.assign(character, newCharacter); 
  }
}
console.log(characters);
console.log(updateCharacter('Fred', {'name': 'Frederico', 'age': 55 }))
console.log(characters);

// 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)


console.log('------------------------Task 2.5-----------------------')

function removeCharacter(name) {
  const characterIndex = characters.findIndex(character => character.name === name);
  if (characterIndex !== -1) {
    return characters.splice(characterIndex, 1);
}
};

console.log(characters);
console.log(removeCharacter('Frederico'));
console.log(characters);