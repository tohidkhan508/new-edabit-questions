// 12. Array Indexing
// Given an index and an array, return the value of the array with the given index.

// function valueAt(arr, num) {
//     return arr[Math.floor(num)];
// }

// function valueAt(arr, num) {
//     let result;
//     let idx = Math.floor(num)
//     for(let i = 0; i < arr.length; i++) {
//         if(i === idx) {
//             result = arr[i] 
//         }
//     }
//     return result;
// }

// function valueAt(arr, num) {
//     let result;
//     let idx = Math.floor(num);
//     let i = 0;
//     for(let value of arr) {
//         if(i === idx) {
//             result = value;
//         }
//         i++
//     }
//     return result;
// }

// function valueAt(arr, num) {
//     return arr[Math.trunc(num)]
// }

// function valueAt(arr, num) {
//     return arr.at(Math.floor(num));
// }

// // Examples
// console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2)) // ➞ 6
// console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2)) // ➞ 5
// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2)) // ➞ 4




// 13. Find the Index (Part 1)
// Create a function that finds the index of a given item.

// function search(arr, num) {
//     return arr.indexOf(num);
// }

// function search(arr, num) {
//     let result = -1;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === num) {
//             return i
//         }
//     }
//     return result;
// }

// function search(arr, num) {
//     let result = -1;
//     arr.forEach((arr1, value) => {
//         if(arr1 === num) {
//             result = value
//         }
//     });
//     return result
// }

// function search(arr, num) {
//     return arr.findIndex((value) => value == num)
// }  

// function search(arr, num) {
//     let res = 0;
//     for(let value of arr) {
//         if(value === num) {
//             return res;
//         }
//         res++;
//     }
//     return -1
// }

// Examples
// console.log(search([1, 5, 3], 5)) // ➞ 1
// console.log(search([9, 8, 3], 3)) // ➞ 2
// console.log(search([1, 2, 3], 4)) // ➞ -1




// 14. Buggy Code (Part 3)
// Fix t/he code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// function sumArray(arr) {
//     return arr.reduce((num1, num2) => num1 + num2);
// }

// function sumArray(arr) {
//     let result = 0;
//     for(let value of arr) {
//         result += value
//     }
//     return result
// }

// function sumArray(arr) {
//     let result = 0;
//     for(let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     return result;
// }

// function sumArray(arr) {
//     let sum = 0;
//     arr.map((num) => sum += num);
//     return sum;
// }

// function sumArray(arr) {
//     let sum = 0;
//     arr.forEach((num) => sum += num);
//     return sum;
// }

// // Examples
// console.log(sumArray([1, 2, 3, 4, 5])) // ➞ 15
// console.log(sumArray([-1, 0, 1])) // ➞ 0
// console.log(sumArray([0, 4, 8, 12])) // ➞ 24




// 15. Find the Index (Part #2)
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// function search(arr, num) {
//     return arr.indexOf(num)
// }

// function search(arr, num) {
//     let result = 0;
//     for(let value of arr) {
//         if(value === num) {
//             return result;
//         }
//         result++;
//     }
//     return -1
// }

// function search(arr, num) {
//     let result = -1;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === num) {
//             return i;
//         }
//     }
//     return result
// }

// function search(arr, num) {
//     let result = -1;
//     arr.forEach((value, idx) => {
//         if(value === num) {
//             result = idx;
//         }
//     });
//     return result;
// }

// function search(arr, num) {
//     return arr.findIndex(value => value === num)
// }

// // Examples
// console.log(search([1, 2, 3, 4], 3)) // ➞ 2
// console.log(search([2, 4, 6, 8, 10], 8)) // ➞ 3
// console.log(search([1, 3, 5, 7, 9], 11)) // ➞ -1




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
