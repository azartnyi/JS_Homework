// Task 2
// 1. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

function isPalindrome(word) {
    let lowerCaseWord = word.toLowerCase();
    let reversedWord = "";
    for (let i = lowerCaseWord.length - 1; i >= 0; i--) {
        reversedWord += lowerCaseWord[i];
    }
    return lowerCaseWord === reversedWord;
}
console.log(isPalindrome("пуп"))

// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
//     и возвращает слово с наибольшим количеством букв. 
//     Если таких слов несколько - возвращает их все.

    function returnMostLettersWord(sentence) {
        let maxLength = 0;
        let wordsBuffer = [];
        const words = sentence.split(' ');
    
        for (let word of words) {
            if (word.length > maxLength) {
                maxLength = word.length;
                wordsBuffer = [word];
            } else if (word.length === maxLength) {
                wordsBuffer.push(word);
            }
        }
        return wordsBuffer;
    }
    console.log(returnMostLettersWord("мяу мяумя круто тестслово"))