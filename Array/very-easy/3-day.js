//? 11. Find the Index
//? Create a function that takes an array and a string as arguments and returns the index of the string.

//! 1 => Example
// function findIndex(arr, str) {
//   return arr.indexOf(str);
// }

//! 2 => Example
// function findIndex(arr, str) {
//   return arr.findIndex((val) => val === str);
// }/

//! 3 => Example
// function findIndex(arr, str) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === str) {
//       return i;
//     }
//   }
// }

//! 4 => Example
// function findIndex(arr, str) {
//   let i = 0;
//   for (let val of arr) {
//     if (val === str) {
//       return i;
//     }
//     i++;
//   }
// }

//! 5 => Example
// function findIndex(arr, str) {
//     let result = -1
//   arr.forEach((val, i) => {
//     if (val === str && result === -1) {
//       result = i;
//     }
//   });
//   return result
// }

//! 6 => Example
// function findIndex(arr, str) {
//   return arr.reduce((acc, curr, i) => {
//     if (curr === str) {
//       return i;
//     }
//     return acc
//   }, -1);
// }

//! Examples
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));                  //* ➞ 2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));               //* ➞ 1
// console.log(findIndex(["a", "g", "y", "d"], "d"));                              //* ➞ 3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); //* ➞ 0

//? 12. Array Indexing
//? Given an index and an array, return the value of the array with the given index.

//! 1 => Example
// function valueAt(arr, num) {
//     return arr[Math.floor(num)]
// }

//! 2 => Example
// function valueAt(arr, num) {
//     return arr[Math.trunc(num)]
// }

//! 3 => Example
// function valueAt(arr, num) {
//     return arr.at(num)
// }

//! 4 => Example
// function valueAt(arr, num) {
//   let result;
//   let idx = Math.floor(num);
//   for (let i = 0; i < arr.length; i++) {
//     if (i === idx) {
//       result = arr[i];
//     }
//   }
//   return result;
// }

//! 5 => Example
// function valueAt(arr, num) {
//   let result;
//   let idx = Math.floor(num);
//   let i = 0;

//   for (let val of arr) {
//     if (i === idx) {
//       result = val;
//     }
//     i++;
//   }
//   return result;
// }

//! 6 => Example
// function valueAt(arr, num) {
//   let result;
//   let idx = Math.floor(num);

//   arr.forEach((data, i) => {
//     if (i === idx) {
//       result = data;
//     }
//   });
//   return result;
// }

//! 7 => Example
// function valueAt(arr, num) {
//   let idx = Math.floor(num);
//   return arr.reduce((acc, curr, i) => {
//     if (i === idx) return curr;
//     return acc;
//   }, -1);
// }

//! Examples
// console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));     //* ➞ 6
// console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));    //* ➞ 5
// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2)) ; //* ➞ 4

//? 13. Find the Index (Part 1)
//? Create a function that finds the index of a given item.

//! 1 => Example
// function search(arr, num) {
//     return arr.indexOf(num)
// }

//! 2 => Example
// function search(arr, num) {
//     return arr.findIndex(value => value == num)
// }

//! 3 => Example
// function search(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }
//   return -1;
// }/

//! 4 => Example
// function search(arr, num) {
//   let res = -1;
//   let i = 0;

//   for (let val of arr) {
//     if (val === num) {
//       return i;
//     }
//     i++;
//   }
//   return res;
// }

//! 5 => Exmaple
// function search(arr, num) {
//   let result = -1;
//   arr.forEach((val, i) => {
//     if (val === num) {
//       result = i;
//     }
//   });
//   return result;
// }

//! 6 => Example
// function search(arr, num) {
//   return arr.reduce((acc, curr, i) => {
//     if (curr === num) return i;
//     return acc;
//   }, -1);
// }

//! Examples
// console.log(search([1, 5, 3], 5)); //* ➞ 1
// console.log(search([9, 8, 3], 3)); //* ➞ 2
// console.log(search([1, 2, 3], 4)); //* ➞ -1

//? 14. Buggy Code (Part 3)
//? Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

//! 1 => Example
// function sumArray(arr) {
//     return arr.reduce((num1, num2) => num1 + num2)
// }

//! 2 => Example
// function sumArray(arr) {
//   let result = 0

//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
//   }
//   return result;
// }

//! 3 => Example
// function sumArray(arr) {
//   let result = 0;

//   for (let val of arr) {
//     result += val;
//   }
//   return result;
// }

//! 4 => Example
// function sumArray(arr) {
//     let result = 0;
//     arr.forEach(val => {
//         result += val
//     });
//     return result
// }

//! 5 => Example
// function sumArray(arr) {
//   return arr.reduce((acc, curr) => {
//     acc += curr;
//     return acc;
//   }, 0);
// }

//! Examples
// console.log(sumArray([1, 2, 3, 4, 5])); //* ➞ 15
// console.log(sumArray([-1, 0, 1]));      //* ➞ 0
// console.log(sumArray([0, 4, 8, 12]));   //* ➞ 24

//? 15. Find the Index (Part #2)
//? Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

//! 1 => Example
// function search(arr, num) {
//     return arr.indexOf(num)
// }

//! 2 => Example
// function search(arr, num) {
//     return arr.findIndex(value => value === num)
// }

//! 3 => Example
// function search(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }
//   return -1;
// }

//! 4 => Example
// function search(arr, num) {
//   let res = -1;
//   let i = 0;

//   for (let val of arr) {
//     if (val === num) {
//       return i;
//     }
//     i++;
//   }
//   return res;
// }

//! 5 => Example
// function search(arr, num) {
//   let result = -1;

//   arr.forEach((val, i) => {
//     if (val === num) {
//       result = i;
//     }
//   });
//   return result;
// }

//! 6 => Example
function search(arr, num) {
  return arr.reduce((acc, curr, i) => {
    if (curr === num) return i;
    return acc;
  }, -1);
}

//! Examples
console.log(search([1, 2, 3, 4], 3)); // ➞ 2
console.log(search([2, 4, 6, 8, 10], 8)); // ➞ 3
console.log(search([1, 3, 5, 7, 9], 11)); // ➞ -1

// 16. Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

// function check(arr, num) {
//     return arr.includes(num);
// }

// function check(arr, num) {
//     let result = false;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === num) {
//             result = true;
//         }
//     }
//     return result
// }

// function check(arr, num) {
//     let result = false;
//     for(let value of arr) {
//         if(value === num) {
//             result = true;
//         }
//     }
//     return result
// }

// function check(arr, num) {
//     let result = false;
//     arr.forEach((value) => {
//         if(value === num) {
//             result = true
//         }
//     });
//     return result
// }

// function check(arr, num) {
//     return arr.reduce((value, value2) => value || value2 === num, false);
// }

// function check(arr, num) {
//     return arr.some(value => value === num);
// }

// function check(arr, num) {
//   return arr.indexOf(num) !== -1;
// }

// function check(arr, num) {
//   return arr.find(value => value === num) !== undefined;
// }

// function check(arr, num) {
//   return arr.filter(value => value === num).length > 0
// }

// // Examples
// console.log(check([1, 2, 3, 4, 5], 3)) // ➞ true
// console.log(check([1, 1, 2, 1, 1], 3)) // ➞ false
// console.log(check([5, 5, 5, 6], 5)) // ➞ true
// console.log(check([], 5)) // ➞ false

// 17. Less Than, Greater Than
// Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

// function arrBetween(num1, num2, arr) {
//     return arr.filter((arr1) => arr1 > num1 && arr1 < num2);
// }

// function arrBetween(num1, num2, arr) {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > num1 && arr[i] < num2) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// function arrBetween(num1, num2, arr) {
//     let newArr = [];
//     for(let value of arr) {
//         if(value > num1 && value < num2) {
//             newArr.push(value)
//         }
//     }
//     return newArr;
// }

// function arrBetween(num1, num2, arr) {
//     let newArr = [];
//     arr.forEach((value) => {
//         if(value > num1 && value < num2) {
//             newArr.push(value)
//         }
//     });
//     return newArr;
// }

// Examples
// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])) // ➞ [5, 4, 7]
// console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])) // ➞ [8, 6]
// console.log(arrBetween(7, 32, [1, 2, 3, 78])) // ➞ []
