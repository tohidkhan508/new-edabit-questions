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

// 54. Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.
// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.
// Return an empty array if there are no even numbers, or odd.

// 1 => Example
// function cleanUpArray(arr) {
//     const even = [];
//     const odd = [];

//     for(let i = 0; i < arr.length; i++) {
//         let num = Number(arr[i])
//         if(num % 2 === 0) {
//             even.push(num)
//         } else {
//             odd.push(num)
//         }
//     }
//     return [even, odd]
// }

// 2 => Example
// function cleanUpArray(arr) {
//     const even = [];
//     const odd = [];

//     for(let val of arr) {
//         let num = Number(val)

//         if(num % 2 === 0) {
//             even.push(num) 
//         } else {
//             odd.push(num)
//         }
//     }
//     return [even, odd]
// }

// 3 => Example
// function cleanUpArray(arr) {
//     const even = [];
//     const odd = [];

//     arr.forEach((val, idx) => {
//         let num = Number(val);

//         if(num % 2 === 0) {
//             even.push(num);
//         } else {
//             odd.push(num)
//         }
//     })
//     return [even, odd]
// }

// 4 => Example
// function cleanUpArray(arr) {
//     return arr.reduce(([even, odd], val) => {
//         let num = +val;
//         num % 2 === 0 ? even.push(num) : odd.push(num);
//         return [even, odd]
//     }, [[], []])
// }

// 5 => Example
// function cleanUpArray(arr) {
//     return [
//         arr.map(Number).filter(n => n % 2 === 0),
//         arr.map(Number).filter(n => n % 2 !== 0)
//     ]
// }

// Examples
// console.log(cleanUpArray(["8"])) // ➞ [[8], []]
// console.log(cleanUpArray(["11"])) // ➞ [[], [11]]
// console.log(cleanUpArray(["7", "4", "8"])) // ➞ [[4, 8], [7]]
// console.log(cleanUpArray(["9", "4", "5", "8"])) // ➞ [[4, 8], [9, 5]]



// 55. Largest Numbers
// Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

// 1 => Example
// function largestNumbers(num, arr) {
//     if(num === 0) return [];
//     return arr.sort((a, b) => a - b).slice(-num)
// }

// 2 => Example
// function largestNumbers(num, arr) {
//     if(num === 0) return [];
//     arr.sort((a, b) => a - b)
//     let result = [];

//     for(let i = arr.length - num; i < arr.length; i++) {
//         result.push(arr[i])
//     }
//     return result;
// }

// 3 => Example
// function largestNumbers(num, arr) {
//     if(num === 0) return [];
//     arr.sort((a, b) => a - b);
//     let result = [];
//     let idx = arr.length - num;
//     let i = 0
    
//     for(let val of arr) {
//         if(i >= idx) {
//             result.push(val)
//         }
//         i++;
//     }
//     return result;
// }

// 4 => Example
// function largestNumbers(num, arr) {
//     if(num === 0) return [];
//     arr.sort((a, b) => a - b);
//     let result = [];
//     let idx = arr.length - num;
//     let i = 0

//     arr.forEach((val) => {
//         if(i >= idx) {
//             result.push(val)
//         }
//         i++
//     });
//     return result;
// }

// 5 => Example
function largestNumbers(num, arr) {
    if(num === 0) return [];
    arr.sort((a, b) => a - b);
    let idx = arr.length - num;

    return arr.reduce((acc, val, i) => {
        if(i >= idx) {
            acc.push(val)
        }
        return acc;
    }, [])
}

// Examples
console.log(largestNumbers(2, [4, 3, 2, 1])) // ➞ [3, 4]
console.log(largestNumbers(1, [7, 19, 4, 2])) // ➞ [19]
console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])) // ➞ [16, 18, 57]
console.log(largestNumbers(0, [1, 3, 4, 2])) // ➞ []