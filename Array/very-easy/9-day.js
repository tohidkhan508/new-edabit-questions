// 34. Spaces Between Each Character
// Create a function that takes a string and returns a string with spaces in between all of the characters.

// 1 => Example

// function spaceMeOut(str) {
//     return str.split("").join(" ")
// }

// 2 => Example

// function spaceMeOut(str) {
//     let result = "";
//     for(let i = 0; i < str.length; i++) {
//         result += str[i];
//         if(i < str.length - 1) {
//             result += " ";
//         }
//     }
//     return result;
// }

// 3 => Example

// function spaceMeOut(str) {
//     let result = "";
//     let i = 0;
//     for(let word of str) {
//         result += word;
//         if(i < str.length - 1) {
//             result += " ";
//         }
//         i++;
//     }
//     return result;
// }

// 4 => Example

// function spaceMeOut(str) {
//     let result = "";
//     let arr = str.split("");
//     arr.forEach((word, index) => {
//         result += word;
//         if(index < arr.length - 1) {
//             result += " ";
//         }
//     });
//     return result;
// }

// 5 => Example

// function spaceMeOut(str) {
//     return Array.from(str).join(" ");
// } 

// // Examples
// console.log(spaceMeOut("space")) // ➞ "s p a c e"
// console.log(spaceMeOut("far out")) // ➞ "f a r   o u t"
// console.log(spaceMeOut("elongated musk")) // ➞ "e l o n g a t e d   m u s k"



// 35. Even or Odd?
// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).

// 1 => Example

// function evenOrOdd(arr) {
//     let sum = arr.reduce((a, b) => a + b, 0);
//     return sum % 2 === 0 ? "even" : "odd"
// }

// 2 => Example

// function evenOrOdd(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum % 2 === 0 ? "even" : "odd";
// }

// 3 => Example

// function evenOrOdd(arr) {
//     let sum = 0;
//     for(let value of arr) {
//         sum += value;
//     }
//     return sum % 2 === 0 ? "even" : "odd";
// }

// 4 => Example

// function evenOrOdd(arr) {
//     let sum = 0;
//     arr.forEach((value) => {
//         sum += value;
//     });
//     return sum % 2 === 0 ? "even" : "odd";
// }

// // Examples
// console.log(evenOrOdd([0])) // ➞ "even"
// console.log(evenOrOdd([1])) // ➞ "odd"
// console.log(evenOrOdd([])) // ➞ "even"
// console.log(evenOrOdd([0, 1, 5])) // ➞ "even"



// 36. ES6: Destructuring Arrays II
// You can assign variables from nested arrays like this:

// const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

// let trans1 = arr[0]
// let trans2 = arr[1]
// let trans3 = arr[2][0]
// let trans4 = arr[2][1][0]

// const arr = ["cars", "planes", ["trains", ["motorcycles"]]];

// let [trans1, trans2, [trans3, [trans4]]] = arr

// console.log(trans1) // outputs "cars"
// console.log(trans2) // outputs "planes"
// console.log(trans3) // outputs "trains"
// console.log(trans4) // outputs "motorcycles"



// 37. Rotate the Array by One 
// Given an array, rotate the values clockwise by one (the last value is sent to the first position).

// Check the examples for a better understanding.

// 1 => Example

// function rotateByOne(arr) {
//     arr.unshift(arr.pop());
//     return arr;
// }

// 2 => Example

// function rotateByOne(arr) {
//     let last = arr[arr.length - 1];
//     for(let i = arr.length; i > 0; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[0] = last;
//     return arr;
// }

// 3 => Example

// function rotateByOne(arr) {
//     let last = arr[arr.length - 1];
//     let i = arr.length - 1;
//     for(let value of arr) {
//         if(i > 0 ) {
//             arr[i] = arr[i - 1];
//             i--;
//         }
//     }
//     arr[0] = last;
//     return arr;
// }

// // Examples
// console.log(rotateByOne([1, 2, 3, 4, 5])) // ➞ [5, 1, 2, 3, 4]
// console.log(rotateByOne([6, 5, 8, 9, 7])) // ➞ [7, 6, 5, 8, 9]
// console.log(rotateByOne([20, 15, 26, 8, 4 ])) // ➞ [4, 20, 15, 26, 8]



// 38. Get the Sum of All Array Elements
// Create a function that takes an array and returns the sum of all numbers in the array.

// 1 => Example

// function getSumOfItems(arr) {
//     return arr.reduce((a, b) => a + b);
// }

// 2 => Example

// function getSumOfItems(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i ++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// 3 => Example

// function getSumOfItems(arr) {
//     let sum = 0;
//     for(let i of arr) {
//         sum += i;
//     }
//     return sum;
// }

// function getSumOfItems(arr) {
//     let sum = 0;
//     arr.forEach((value) => {
//         sum += value;
//     });
//     return sum;
// }

// 5 => Example

// function getSumOfItems(arr) {
//     let sum = 0;
//     arr.map(value => sum += value);
//     return sum;

// }

// // Examples
// console.log(getSumOfItems([2, 7, 4])) // ➞ 13
// console.log(getSumOfItems([45, 3, 0])) // ➞ 48
// console.log(getSumOfItems([-2, 84, 23])) // ➞ 105