// Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
//   и выводить в консоль количество гласных и согласных букв в этом слове. 
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants

const vowels = 'aeiou'
const consonants = 'bcdfghjklmnpqrstvwxyz'
let vowelsCount = 0;
let consonantsCount = 0;
let word = 'test-word-test';


for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
        vowelsCount++;
    }
    else if (consonants.includes(word[i])) {
        consonantsCount++;
    }
    }
  console.log(`Word "${word}" contains ${vowelsCount} vowels and ${consonantsCount} consonants`);

// for (let i = 0; i < word.length; i++) {
//     for (let j = 0 ; j < vowels.length; j++) {
//         if (word[i] === vowels[j] ) {
//             vowelsCount++;
//            // console.log(`Буква ${word[i]} гласная ${vowels[j]}`);;
//         } 
//     }
//   }

//   for (let i = 0; i < word.length; i++) {
//     for (let j = 0 ; j < consonants.length; j++) {
//         if (word[i] === consonants[j] ) {
//             consonantsCount++;
//            // console.log(`Буква ${word[i]} согласная ${consonants[j]}`);; 
//         } 
//     }
//   }