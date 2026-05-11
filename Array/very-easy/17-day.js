//* Largest Numbers
//? Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

//! 1 => Example
// function largestNumbers(n, arr) {
//     if(n <= 0) return [];
//     return arr.sort((a, b) => a - b).slice(-n)
// }

//! 2 => Example



// Examples
// console.log(largestNumbers(2, [4, 3, 2, 1])) //*  ➞ [3, 4]
// console.log(largestNumbers(1, [7, 19, 4, 2])) //* ➞ [19]
// console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])) //* ➞ [16, 18, 57]
// console.log(largestNumbers(0, [1, 3, 4, 2])) //* ➞ []