//* 1. Return the First Element in an Array
//* Create a function that takes an array containing only numbers and return the first element.

//! 1 => Example
// function getFirstValue(arr) {
//   return arr.shift()
// }

//! 2 => Example
// function getFirstValue(arr) {
//     return arr[0]
// }

//! 3 => Example
// function getFirstValue(arr) {
//     return arr.splice(0, 1)[0]
// }

//! 4 => Example
// function getFirstValue(arr) {
//   return arr.at(0);
// }

//! 5 => Example
// function getFirstValue(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     return arr[0];
//   }
// }

//! 6 => Example
// function getFirstValue(arr) {
//   for (let value of arr) {
//     return value;
//   }
// }

// Examples
// console.log(getFirstValue([1, 2, 3])); //* ➞ 1
// console.log(getFirstValue([80, 5, 100])); //* ➞ 80
// console.log(getFirstValue([-500, 0, 50])); //* ➞ -500

//* 2. Pair Management
//* Given two arguments, return an array which contains these two arguments.

//! 1 => Example
// function makePair(num1, num2) {
//     return Array(num1, num2)
// }

//! 2 => Example
// function makePair(num1, num2) {
//   return Array.of(num1, num2);
// }

//! 3 => Example
// function makePair(num1, num2) {
//     return [num1, num2]
// }

// function makePair(num1,  num2) {
//     return new Array(num1, num2)
// }

// function makePair(num1, num2) {
//     let arr = []

//     arr.push(num1, num2)
//     return arr
// }

// function makePair(num1, num2) {
//     let arr = [num1, num2]
//     return arr
// }

// function makePair(num1, num2) {
//     let arr = [num1, num2]
//     return [...arr]
// }

// Examples
// console.log(makePair(1, 2)); //* ➞ [1, 2]
// console.log(makePair(51, 21)); //* ➞ [51, 21]
// console.log(makePair(512124, 215)); //* ➞ [512124, 215]

// 3. Learn Lodash: _.drop, Drop the First Elements of an Array
// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

// function drop(arr, n) {
//     return arr.slice(n)
// }

// function drop(arr, n) {
//     let newArr = [];
//     for(let i = n; i < arr.length; i++) {
//         newArr.push(arr[i])
//     }
//     return newArr
// }

// function drop(arr, n) {
//     return arr.reduce((arr3, val, i) => {
//         if(i >= n) {
//             arr3.push(val);
//         }
//         return arr3
//     }, []);
// }

// Examples
// console.log(drop([1, 2, 3], 1)) // ➞ [2, 3]
// console.log(drop([1, 2, 3], 2)) // ➞ [3]
// console.log(drop([1, 2, 3], 5)) // ➞ []
// console.log(drop([1, 2, 3], 0)) // ➞ [1, 2, 3]

// 4. Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// function getVoteCount(obj) {
//     return obj.upvotes - obj.downvotes
// }

// function getVoteCount(obj) {
//     let {upvotes, downvotes} = obj;
//     return upvotes - downvotes
// }

// Examples
// console.log(getVoteCount({ upvotes: 13, downvotes: 0 })) // ➞ 13
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 })) // ➞ -31
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 }))  //➞ 0

// 5. Reverse an Array
// Write a function to reverse an array.

// function reverse(arr) {
//     return arr.reverse();
// }

// function reverse(arr) {
//     let newArr = [];
//     for(let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// function reverse(arr) {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         newArr.unshift(arr[i]);
//     }
//     return newArr
// }
// Examples
// console.log(reverse([1, 2, 3, 4])) // ➞ [4, 3, 2, 1]
// console.log(reverse([9, 9, 2, 3, 4])) // ➞ [4, 3, 2, 9, 9]
// console.log(reverse([])) // ➞ []
