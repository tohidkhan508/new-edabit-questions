//? 1. Return the First Element in an Array
//? Create a function that takes an array containing only numbers and return the first element.

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

//? 2. Pair Management
//? Given two arguments, return an array which contains these two arguments.

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

//! 4 => Example
// function makePair(num1,  num2) {
//     return new Array(num1, num2)
// }

//! 5 => Example
// function makePair(num1, num2) {
//     let arr = []

//! 6 => Example
//     arr.push(num1, num2)
//     return arr
// }

//! 7 => Example
// function makePair(num1, num2) {
//     let arr = [num1, num2]
//     return arr
// }

//! 8 => Example
// function makePair(num1, num2) {
//     let arr = [num1, num2]
//     return [...arr]
// }

// Examples
// console.log(makePair(1, 2)); //* ➞ [1, 2]
// console.log(makePair(51, 21)); //* ➞ [51, 21]
// console.log(makePair(512124, 215)); //* ➞ [512124, 215]

//? 3. Learn Lodash: _.drop, Drop the First Elements of an Array
//? According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

//? Your challenge is to write your own version using vanilla JavaScript.

//! 1 => Example

// function drop(arr, n) {
//     return arr.slice(n)
// }

//! 2 => Example
// function drop(arr ,n) {
//     return arr.splice(n)
// }

//! 3 => Example

// function drop(arr, n) {
//     return arr.filter((value, index) => index >= n)
// }

//! 4 => Example
// function drop(arr, n) {
//   return arr.reduce((acc, curr, i) => {
//     if (i >= n) {
//       acc.push(curr);
//     }
//     return acc;
//   }, []);
// }

//! 5 => Example
// function drop(arr, n) {
//   let res = [];

//   for (let i = n; i < arr.length; i++) {
//     res.push(arr[i]);
//   }
//   return res;
// }

//! 6 => Example
// function drop(arr, n) {
//   let res = [];
//   let i = 0;

//   for (let val of arr) {
//     if (i >= n) {
//       res.push(val);
//     }
//     i++;
//   }
//   return res;
// }

//! 7 => Example
// function drop(arr, n) {
//   let res = [];

//   arr.forEach((value, index) => {
//     if (index >= n) {
//       res.push(value);
//     }
//   });
//   return res;
// }

// Examples
// console.log(drop([1, 2, 3], 1)); //* ➞ [2, 3]
// console.log(drop([1, 2, 3], 2)); //* ➞ [3]
// console.log(drop([1, 2, 3], 5)); //* ➞ []
// console.log(drop([1, 2, 3], 0)); //* ➞ [1, 2, 3]

//? 4. Upvotes vs Downvotes
//? Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

//! 1 => Example
// function getVoteCount(votes) {
//     return votes.upvotes - votes.downvotes
// }

//! 2 => Example
// function getVoteCount(votes) {
//     let up = votes.upvotes
//     let down = votes.downvotes
//     let res = up - down
//     return res
// }

//! 3 => Example
// function getVoteCount({upvotes, downvotes}) {
//     return upvotes - downvotes
// }

//! 4 => Exmaple
// function getVoteCount(votes) {
//   let res = 0;

//   for (let data in votes) {
//     if (data === "upvotes") res += votes[data];
//     if (data === "downvotes") res -= votes[data];
//   }
//   return res;
// }

// Examples
// console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); //* ➞ 13
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); //* ➞ -31
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); //* ➞ 0

//? 5. Reverse an Array
//? Write a function to reverse an array.

//! 1 => EXample
// function reverse(arr) {
//     return arr.reverse()
// }

//! 2 => Example
// function reverse(arr) {
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     res.unshift(arr[i]);
//   }
//   return res;
// }

//! 3 => Example
// function reverse(arr) {
//   let res = [];
//   let i = 0;

//   for (let val of arr) {
//     res.unshift(val);
//     i++;
//   }
//   return res;
// }

//! 4 => Example
// function reverse(arr) {
//   let res = [];
//   arr.forEach((value) => {
//     res.unshift(value);
//   });
//   return res;
// }

//! 5 => Example
// function reverse(arr) {
//   return arr.reduce((acc, curr) => {
//     acc.unshift(curr);
//     return acc;
//   }, []);
// }

//! 6 => Example
function reverse(arr) {
  let res = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
}

// Examples
console.log(reverse([1, 2, 3, 4])); //* ➞ [4, 3, 2, 1]
console.log(reverse([9, 9, 2, 3, 4])); //* ➞ [4, 3, 2, 9, 9]
console.log(reverse([])); //* ➞ []
