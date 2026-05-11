// 51. Designing Rugs
// Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.

// 1 => Example
// function makeRug(m, n, ch = "#") {
//     const row = ch.repeat(n);
//     return Array(m).fill(row);
// }

// 2 => Example
// function makeRug(m, n, ch = "#") {
//     let row = ch.repeat(n);
//     let result = [];
//     for(let i = 0; i < m; i++) {
//         result.push(row);
//     }
//     return result;
// }

// 3 => Example
// function makeRug(m, n, ch = "#") {
//     let row = ch.repeat(n);
//     let result = [];
//     for(let _ of Array(m)) {
//         result.push(row)
//     }
//     return result
// }

// 4 => Example
// function makeRug(m, n, ch = "#") {
//     let row = ch.repeat(n);
//     let result = [];
//     Array.from({ length: m }).forEach(val => {
//         result.push(row);
//     });
//     return result;
// }

// // Examples
// console.log(makeRug(3, 5)) // ➞ ["#####", "#####", "#####"]
// console.log(makeRug(3, 5, '$')) // ➞ ["$$$$$", "$$$$$", "$$$$$"]
// console.log(makeRug(2, 2, 'A')) // ➞ ["AA", "AA"]



// 52. The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.

// 1 => Example
// function forbiddenLetter(letter, words) {
//     return !words.some(word => word.includes(letter))
// }

// 2 => Example
// function forbiddenLetter(letter, words) {
//     let isForbidden = true;
//     for(let i = 0; i < words.length; i++) {
//         if(words[i].includes(letter)) {
//             isForbidden = false;
//         }
//     }
//     return isForbidden;
// }

// 3 => Example
// function forbiddenLetter(letter, words) {
//     let isForbidden = true;
//     for(let val of words) {
//         if(val.includes(letter)) {
//             isForbidden = false;
//         }
//     }
//     return isForbidden;
// }

// 4 => Example
// function forbiddenLetter(letter, words) {
//     let isForbidden = true;
//     words.forEach(word => {
//         if(word.includes(letter)) {
//             isForbidden = false;
//         }
//     });
//     return isForbidden;
// }

// // Examples
// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"])) // ➞ false
// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"])) // ➞ true
// console.log(forbiddenLetter("m", [])) // ➞ true



// 53. Tallest Birthday Cake Candles
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// 1 => Example
// function birthdayCakeCandles(arr) {
//     let max = Math.max(...arr);
//     return arr.filter(val => val === max).length;
// }

// 2 => Example
// function birthdayCakeCandles(arr) {
//     let max = Math.max(...arr);
//     let result = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === max) {
//             result++
//         }
//     }
//     return result;
// }

// 3 => Example
// function birthdayCakeCandles(arr) {
//     let max = Math.max(...arr);
//     let result = 0;
//     for(let val of arr) {
//         if(val === max) {
//             result++
//         }
//     }
//     return result
// }

// 4 => Example
// function birthdayCakeCandles(arr) {
//     let max = Math.max(...arr);
//     let result = 0;
//     arr.forEach(val => {
//         if(val === max) {
//             result++
//         }
//     });
//     return result;
// }

// 5 => Example
function birthdayCakeCandles(arr) {
    let max = Math.max(...arr);
    return arr.reduce((acc, index) => {
        if(index === max) {
            acc++
        }
        return acc;
    }, 0)
}

// Examples
console.log(birthdayCakeCandles([4, 4, 1, 3])) // ➞ 2
// The maximum height candles are four units high.
// There are two of them, so you return 2.
console.log(birthdayCakeCandles([3, 2, 1, 3])) // ➞ 2
console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25])) // ➞ 4