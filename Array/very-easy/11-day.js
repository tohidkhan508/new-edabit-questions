// 41. Array From a Range of Numbers
// Create a function that returns an array of all the integers between two given numbers start and end.

// 1 => Example
// function rangeOfNum(start, end) {
//     let result = [];
//     for(let i = start + 1; i < end; i++) {
//         result.push(i);
//     }
//     return result;
// }

// 2 => Example
// function rangeOfNum(start, end) {
//     let result = [];
//     let value = Array(end - start - 1).fill(0);
//     let num = start + 1;
//     for(let value1 of value) {
//         result.push(num);
//         num++;
//     }
//     return result;
// }

// 3 => Example
// function rangeOfNum(start, end) {
//     let result = [];
//     let value = Array(end - start - 1).fill(0);
//     value.forEach((_, idx) => {
//         result.push(start + idx + 1);
//     });
//     return result;
// }

// // Examples
// console.log(rangeOfNum(2, 4)) // ➞ [3]
// console.log(rangeOfNum(5, 9)) // ➞ [6, 7, 8]
// console.log(rangeOfNum(2, 11)) // ➞ [3, 4, 5, 6, 7, 8, 9, 10]



// 42. Sum Greater Than Five
// Write a function that returns the sum of elements greater than 5, in the given array .

// 1 =>  Exmaple
// function sumFive(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 5) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// 2 => Example
// function sumFive(arr) {
//     let sum = 0;
//     for(let num of arr) {
//         if(num > 5) {
//             sum += num;
//         }
//     }
//     return sum;
// }

// 3 => Example
// function sumFive(arr) {
//     let sum = 0;
//     arr.forEach((value) => {
//         if(value > 5) {
//             sum += value;
//         }
//     });
//     return sum;
// }

// 4 => Example
// function sumFive(arr) {
//     return arr.reduce((sum, val) => {
//         if(val > 5) {
//             return sum + val;
//         }
//         return sum;
//     }, 0)
// }

// // Examples
// console.log(sumFive([1, 5, 20, 30, 4, 9, 18])) // ➞ 77
// console.log(sumFive([1, 2, 3, 4])) // ➞ 0
// console.log(sumFive([10, 12, 28, 47, 55, 100])) // ➞ 252



// 43. Skip the Drinks with Too Much Sugar
// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// 1 => Example
// function skipTooMuchSugarDrinks(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] !== "fanta" && arr[i] !== "cola") {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// 2 => Example
// function skipTooMuchSugarDrinks(arr) {
//     let result = [];
//     for(let str of arr) {
//         if(str !== "fanta" && str !== "cola") {
//             result.push(str);
//         }
//     }
//     return result
// }

// 3 => Example
// function skipTooMuchSugarDrinks(arr) {
//     let result = [];
//     arr.forEach((val, idx) => {
//         if(val !== "fanta" && val !== "cola") {
//             result.push(val);
//         }
//     });
//     return result;
// }

// 4 => Example
// function skipTooMuchSugarDrinks(arr) {
//     return arr.filter((val) => val !== "fanta" && val !== "cola");
// }

// // cola
// // fanta
// // Examples
// console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"])) // ➞ ["water"]
// console.log(skipTooMuchSugarDrinks(["fanta", "cola"])) // ➞ []
// console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"])) // ➞ ["lemonade", "beer", "water"]



// 44. Add the Index
// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

// 1 => Example
// function addIndexes(arr) {
//     return arr.map((num1, num2) => num1 + num2);
// }

// 2 => Example
// function addIndexes(arr) {
//     return arr.reduce((acc,num1, num2) => {
//         acc.push(num1 + num2);
//         return acc;
//     },[]);
// }

// 3 => Example
// function addIndexes(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         result.push(arr[i] + i);
//     }
//     return result;
// }

// 4 => Example
// function addIndexes(arr) {
//     let result = [];
//     let i = 0;
//     for(let val of arr) {
//         result.push(val + i);
//         i++;
//     }
//     return result;
// }

// 5 => Example
function addIndexes(arr) {
    let result = [];
    arr.forEach((val, idx) => {
        result.push(val + idx);
    });
    return result;
}

// Examples
console.log(addIndexes([0, 0, 0, 0, 0])) // ➞ [0, 1, 2, 3, 4]
console.log(addIndexes([1, 2, 3, 4, 5])) // ➞ [1, 3, 5, 7, 9]
console.log(addIndexes([5, 4, 3, 2, 1])) // ➞ [5, 5, 5, 5, 5]