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
// function search(arr, num) {
//   return arr.reduce((acc, curr, i) => {
//     if (curr === num) return i;
//     return acc;
//   }, -1);
// }

//! Examples
// console.log(search([1, 2, 3, 4], 3));       //* ➞ 2
// console.log(search([2, 4, 6, 8, 10], 8));   //* ➞ 3
// console.log(search([1, 3, 5, 7, 9], 11));   //* ➞ -1

//? 16. Check if an Array Contains a Given Number
//? Write a function to check if an array contains a particular number.

//! 1 => Example
// function check(arr, num) {
//   return arr.includes(num);
// }

//! 2 => Example
// function check(arr, num) {
//   return arr.indexOf(num) !== -1;
// }

//! 3 => Example
// function check(arr, num) {
//   return arr.some((value) => value === num);
// }

//! 4 => Example
// function check(arr, num) {
//   return arr.filter(value => value === num).length > 0
// }

//! 5 => Example
// function check(arr, num) {
//   return arr.findIndex((val) => val === num) !== -1;
// }

//! 6 => Example
// function check(arr, num) {
//   return arr.find((val) => val === num) !== undefined;
// }

//! 7 => Example
// function check(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) return true;
//   }
//   return false;
// }

//! 8 => Example
// function check(arr, num) {
//   for (let val of arr) {
//     if (val === num) return true;
//   }
//   return false;
// }

//! 9 => Example
// function check(arr, num) {
//   let res = false;

//   arr.forEach((val) => {
//     if (val === num) res = true;
//   });
//   return res;
// }

//! 10 => Example
// function check(arr, num) {
//   return arr.reduce((acc, curr) => {
//     if (curr === num) acc = true;
//     return acc;
//   }, false);
// }

//! Examples
// console.log(check([1, 2, 3, 4, 5], 3));   //* ➞ true
// console.log(check([1, 1, 2, 1, 1], 3));   //* ➞ false
// console.log(check([5, 5, 5, 6], 5));      //* ➞ true
// console.log(check([], 5));                //* ➞ false

//? 17. Less Than, Greater Than
//? Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

//! 1 => Example
// function arrBetween(num1, num2, arr) {
//   return arr.filter((val) => val > num1 && val < num2);
// }

//! 2 => Example
// function arrBetween(num1, num2, arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num1 && arr[i] < num2) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

//! 3 => Example
// function arrBetween(num1, num2, arr) {
//   let result = [];

//   for (let val of arr) {
//     if (val > num1 && val < num2) {
//       result.push(val);
//     }
//   }
//   return result;
// }

//! 4 => Example
// function arrBetween(num1, num2, arr) {
//   let result = [];

//   arr.forEach((val, i) => {
//     if (val > num1 && val < num2) {
//       result.push(val);
//     }
//   });
//   return result;
// }

//! 5 => Example
// function arrBetween(num1, num2, arr) {
//   return arr.reduce((acc, curr) => {
//     if (curr > num1 && curr < num2) {
//       acc.push(curr);
//     }
//     return acc;
//   }, []);
// }

//! Examples
// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));    //* ➞ [5, 4, 7]
// console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])); //* ➞ [8, 6]
// console.log(arrBetween(7, 32, [1, 2, 3, 78]));         //* ➞ []

//? 18. 50-30-20 Strategy
//? The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

//? Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

//! 1 => Example
// function fiftyThirtyTwenty(ati) {
//   return {
//     Needs: ati * 0.5,
//     Wants: ati * 0.3,
//     Savings: ati * 0.2,
//   };
// }

//! 2 => Example
// function fiftyThirtyTwenty(ati) {
//   let Needs = ati * 0.5;
//   let Wants = ati * 0.3;
//   let Savings = ati * 0.2;

//   let result = { Needs, Wants, Savings };
//   return result;
// }

//! 3 => Example
// function fiftyThirtyTwenty(ati) {
//   let result = {}
//   let keys = ["Needs", "Wants", "Savings"]
//   let values = [0.5, 0.3, 0.2]

//   for(let i = 0; i < keys.length; i++) {
//     result[keys[i]] = ati * values[i]
//   }
//   return result
// }

//! 4 => Example
// function fiftyThirtyTwenty(ati) {
//   let result = {};
//   let keys = ["Needs", "Wants", "Savings"];
//   let value = [0.5, 0.3, 0.2];

//   let i = 0

//   for (let key of keys) {
//     result[key] = ati * value[i];
//     i++
//   }
//   return result;
// }

//! 5 => Example
// function fiftyThirtyTwenty(ati) {
//   let result = {};
//   let keys = ["Needs", "Wants", "Savings"];
//   let values = [0.5, 0.3, 0.2];

//   keys.forEach((key, i) => {
//     result[key] = ati * values[i];
//   });
//   return result;
// }

//! 6 => Example
// function fiftyThirtyTwenty(ati) {
//   let keys = ["Needs", "Wants", "Savings"]
//   let values = [0.5, 0.3, 0.2]

//   return keys.reduce((acc, curr, i) => {
//     acc[curr] = ati * values[i]
//     return acc
//   }, {})

// }

//! Examples
// console.log(fiftyThirtyTwenty(10000)); //* ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// console.log(fiftyThirtyTwenty(50000)); //* ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// console.log(fiftyThirtyTwenty(13450)); //* ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

//? 19. Similar Bread
//? Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

//! 1 => Example
// function hasSameBread(arr1, arr2) {
//   return arr1[0] === arr2[0] && arr1.length - 1 === arr2.length - 1;
// }

//! 2 => Example
// function hasSameBread(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (
//       arr1[0] === arr2[0] &&
//       arr1[arr1.length - 1] === arr2[arr2.length - 1]
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

//! 3 => Example
// function hasSameBread(arr1, arr2) {
//   let i = 0;

//   for (let val of arr1) {
//     if (
//       (i === 0 && val === arr2[0]) ||
//       (i === arr1.length - 1 && val === arr2[arr2.length - 1])
//     ) {
//       i++;
//       continue;
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

//! Examples
// console.log(
//   hasSameBread(
//     ["white bread", "lettuce", "white bread"],
//     ["white bread", "tomato", "white bread"],
//   ),
// ); //* ➞ true

// console.log(
//   hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"],
//   ),
// ); //* ➞ false

// console.log(
//   hasSameBread(
//     ["toast", "cheese", "toast"],
//     ["brown bread", "cheese", "toast"],
//   ),
// ); //* ➞ false

//? 20. Convert All Array Items to String
//? Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

//! 1 => Example
// function parseArray(arr) {
//     return arr.map(String)
// }

//! 2 => Example
// function parseArray(arr) {
//   return Array.from(arr, String);
// }

//! 3 => Example
// function parseArray(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(String(arr[i]));
//   }
//   return result;
// }

//! 4 => Example
// function parseArray(arr) {
//   let result = [];

//   for (let val of arr) {
//     result.push(String(val));
//   }
//   return result;
// }

//! 5 => Example
// function parseArray(arr) {
//   let result = [];

//   arr.forEach((val, i) => {
//     result.push(String(val));
//   });
//   return result;
// }

//! 6 => Example
function parseArray(arr) {
  return arr.reduce((acc, curr) => {
    acc.push(String(curr));
    return acc;
  }, []);
}

//! Examples
console.log(parseArray([1, 2, "a", "b"]));                  //* ➞ ["1", "2", "a", "b"]
console.log(parseArray(["abc", 123, "def", 456]));          //* ➞ ["abc", "123", "def", "456"]
console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"])); //* ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
console.log(parseArray([]));                                //* ➞ []