//? 6. Fix the Bug: Simple Array Manipulation
//? Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

//! 1 => Example
// function incrementItems(arr) {
//   return arr.map((arr) => arr + 1);
// }

//! 2 => Example
// function incrementItems(arr) {
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i]  + 1);
//   }
//   return res;
// }

//! 2 => Example
// function incrementItems(arr) {
//   let res = [];
//   let i = 0;

//   for (let val of arr) {
//     res.push(val + 1);
//     i++;
//   }
//   return res;
// }

//! 3 => Example
// function incrementItems(arr) {
//   let res = [];
//   arr.forEach((val, i) => {
//     res.push(val + 1);
//   });
//   return res;
// }

//! 4 => Example
// function incrementItems(arr) {
//   return arr.reduce((acc, curr) => {
//     acc.push(curr + 1);
//     return acc
//   }, []);
// }

//! 5 => Example
// function incrementItems(arr) {
//   return Array.from(arr, value => value + 1);
// }

//! Examples
// console.log(incrementItems([0, 1, 2, 3])); //* ➞ [1, 2, 3, 4]
// console.log(incrementItems([2, 4, 6, 8])); //* ➞ [3, 5, 7, 9]
// console.log(incrementItems([-1, -2, -3, -4])); //* ➞ [0, -1, -2, -3]

//? 7. ES6: Destructuring Arrays I
//? You can assign variables from arrays like this:

//! 1 => Example
// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]

//! 2 => Example
// let [a, b, c] = arr;

//! 3 => Example
// let [a, b, c] = arr.slice(0, 3)

//! 4=> Example
// let a = arr.at(0);
// let b = arr.at(1);
// let c = arr.at(2)

//! 5 => Example
// let a = arr.shift();
// let b = arr.shift();
// let c = arr.shift();

//! Example
// console.log(a); //* outputs 1
// console.log(b); //* outputs 2
// console.log(c); //* outputs 3

//? With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.

//? 8. Return the Last Element in an Array
//? Create a function that accepts an array and returns the last item in the array.

//! 2 => Example
// function getLastItem(arr) {
//   return arr.pop();
// }

//! 2 => Example
// function getLastItem(arr) {
//   return arr[arr.length - 1];
// }

//! 3 => Example
// function getLastItem(arr) {
//   return arr.at(-1);
// }

//! 4 => Example
// function getLastItem(arr) {
//   return arr.slice(2, 4)[0];
// }

//! 5 => Example
// function getLastItem(arr) {
//     return arr.splice(2, 1)[0]
// }

//! 6 => Example
// function getLastItem(arr) {
//   let res;

//   for (let i = 0; i < arr.length; i++) {
//     res = arr[i];
//   }
//   return res;
// }

//! 7 => Example
// function getLastItem(arr) {
//   let res;

//   for (let val of arr) {
//     res = val;
//   }
//   return res;
// }

//! 8 => Example
// function getLastItem(arr) {
//   let res;
//   arr.forEach((val) => {
//     res = val;
//   });
//   return res;
// }/

//! 9 => Example
// function getLastItem(arr) {
//   return arr.reduce((acc, val) => {
//     acc = val;
//     return acc
//   });
// }

//! Examples
// console.log(getLastItem([1, 2, 3]));              //* ➞ 3
// console.log(getLastItem(["cat", "dog", "duck"])); //* ➞ "duck"
// console.log(getLastItem([true, false, true]));    //* ➞ true

//? 9. Convert an Array to a String
//? Create a function that takes an array of numbers or letters and returns a string.

//! 1 => Example
// function arrayToString(arr) {
//     return arr.join("")
// }

//! 2 => Exmaple
// function arrayToString(arr) {
//     return arr.split()
// }

//! 3 => Example
// function arrayToString(arr) {
//   return arr.map(String).join("");
// }

//! 4 => Example
// function arrayToString(arr) {
//   return arr.reduce((acc, curr) => acc + curr, "");
// }

//! 5 => Example
// function arrayToString(arr) {
//   let res = "";

//   for (let i = 0; i < arr.length; i++) {
//     res += arr[i];
//   }
//   return res;
// }

//! 6 => Example
// function arrayToString(arr) {
//   let res = "";

//   for (let val of arr) {
//     res += val;
//   }
//   return res;
// }

//! 7 => Example
// function arrayToString(arr) {
//   let res = "";

//   arr.forEach((val) => {
//     res += val;
//   });
//   return res;
// }

//! Examples
// console.log(arrayToString([1, 2, 3, 4, 5, 6]));             //* ➞ "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); //* ➞ "abcdef"
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));   //* ➞ "123asdAAAA"

//? 10. Concatenating Two Integer Arrays
//? Create a function to concatenate two integer arrays.

//! 1 => Example
// function concat(arr1, arr2) {
//     return arr1.concat(arr2)
// }

//! 2 => Example
// function concat(arr1, arr2) {
//     return [...arr1, ...arr2]
// }

//! 3 => Example
// function concat(arr1, arr2) {
//   let res = [];

//   for (let i = 0; i < arr1.length; i++) {
//     res.push(arr1[i]);
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     res.push(arr2[i]);
//   }
//   return res;
// }

//! 4 => Example
// function concat(arr1, arr2) {
//   let res = [];

//   for (let val of arr1) {
//     res.push(val);
//   }

//   for (let val of arr2) {
//     res.push(val);
//   }
//   return res;
// }

//! 5 => Example
// function concat(arr1, arr2) {
//   let res = [];

//   arr1.forEach((val) => {
//     res.push(val);
//   });

//   arr2.forEach((val) => {
//     res.push(val)
//   })
//   return res;
// }

//! 6 => Example
// function concat(arr1, arr2) {
//   return arr2.reduce(
//     (acc, curr) => {
//       acc.push(curr);
//       return acc;
//     },
//     [...arr1],
//   );
// }

//! Examples
// console.log(concat([1, 3, 5], [2, 6, 8]));        //* ➞ [1, 3, 5, 2, 6, 8]
// console.log(concat([7, 8], [10, 9, 1, 1, 2]));    //* ➞ [7, 8, 10, 9, 1, 1, 2]
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));  //* ➞ [4, 5, 1, 3, 3, 3, 3, 3]
