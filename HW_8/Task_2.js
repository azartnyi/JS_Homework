// Task 2
// Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв.
//   Массив должен быть отсортирован по возрастанию количества гласных букв в слове.

const words = [
  "umbrella",   
  "apple",      
  "oocean",      
  "independent",
  "education",  
  "elephant",   
  "island",     
  "universe",   
  "environment",
  "queue"       
];

function vowelCount(word) {
const vowels = 'aeiou';
let vowelsCount = 0;
for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
        vowelsCount++;
    }
};
return vowelsCount;
}

words.sort((a, b) => {
    const countA = vowelCount(a);
    const countB = vowelCount(b);
    return countA - countB;
  });
  console.log(words);