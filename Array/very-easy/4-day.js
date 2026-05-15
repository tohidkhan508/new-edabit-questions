// 21. Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.

// function arrayValuesTypes(arr) {
//     return arr.map(value => typeof value)
// }

// function arrayValuesTypes(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         result.push(typeof arr[i]);
//     }
//     return result;
// }

// function arrayValuesTypes(arr) {
//     let result = [];
//     for(let i of arr) {
//         result.push(typeof i);
//     }
//     return result;
// }

// function arrayValuesTypes(arr) {
//     let result = [];
//     arr.forEach((value) => {
//         result.push(typeof value);
//     });
//     return result;
// }

// function arrayValuesTypes(arr) {
//     return Array.from(arr, value => typeof value)
// }

// // Examples
// console.log(arrayValuesTypes([1, 2, "null", []])) // ➞ ["number", "number", "string", "object"]
// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null])) // ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])) // ➞ ["number", "string", "string", "object", "object", "boolean", "number"]

// 22. ES6: Destructuring Arrays IV
// There is an easy way to assign to array values to the nth index by using rest parameter syntax.

// var [head, tail] = [1, 2, 3, 4];

// console.log(head) // outputs  1
// console.log(tail) // outputs 2
// But how could I make tail = [2, 3, 4] instead of tail = 2?

// let [head, ...tail] = [1, 2, 3, 4];

// console.log(head);
// console.log(tail);

// let arr = [1, 2, 3, 4];
// let head = arr[0]
// let tail = arr.slice(1);

// console.log(head); // 1
// console.log(tail); // [2, 3, 4]

// let arr = [1, 2, 3, 4];
// let head = arr[0];
// let tail = arr.splice(1);

// console.log(head); // 1
// console.log(tail); // [2, 3, 4]

// let arr = [1, 2, 3, 4];
// let head = arr[0];
// let tail = arr.filter((_, idx) => idx > 0);

// console.log(head); // 1
// console.log(tail); // [2, 3, 4]

// 23. Squares and Cubes
// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

// function checkSquareAndCube(arr) {
//     return Math.sqrt(arr[0]) === Math.cbrt(arr[1]);
// }

// function checkSquareAndCube(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(Math.sqrt(arr[i]) === Math.cbrt(arr[i + 1])) {
//             return true;
//         }
//     }
//     return false;
// }

// function checkSquareAndCube(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         let sqrt = Math.sqrt(arr[i]);
//         let cbrt = Math.cbrt(arr[i + 1]);

//         if(sqrt === cbrt) {
//             return true;
//         }
//     }
//     return false;
// }

// function checkSquareAndCube(arr) {
//     let result = [];
//     for(let i of arr) {
//         result.push(i);
//     }
//     return Math.sqrt(result[0]) === Math.cbrt(result[1]);
// }

// function checkSquareAndCube(arr) {
//     let result = false;
//     arr.forEach((_, idx) => {
//         if(idx === 0) {
//             if(Math.sqrt(arr[0]) === Math.cbrt(arr[1])) {
//                 result = true;
//             }
//         }
//     });
//     return result
// }

// // Examples
// console.log(checkSquareAndCube([4, 8])) // ➞ true
// console.log(checkSquareAndCube([16, 48])) // ➞ false
// console.log(checkSquareAndCube([9, 27])) // ➞ true

// 24. Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"] // ➞ [1, 3, 3.6]

// 1 => Example

// function toNumberArray(arr) {
//     return arr.map(Number);
// }

// 2 => Example

// function toNumberArray(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         result.push(Number(arr[i]));
//     }
//     return result
// }

// 3 => Example

// function toNumberArray(arr) {
//     let result = [];
//     for(let i of arr) {
//         result.push(Number(i));
//     }
//     return result;
// }

// 4 => Example

// function toNumberArray(arr) {
//     let result = [];
//     arr.forEach((value) => {
//         result.push(Number(value));
//     });
//     return result
// }

// 5 => Example

// function toNumberArray(arr) {
//     return Array.from(arr, Number);
// }

// 6 => Example

// function toNumberArray(arr) {
//     return arr.reduce((num, value) => {
//         num.push(Number(value));
//         return num
//     }, []);
// }

// Examples
// console.log(toNumberArray(["9.4", "4.2"])) // ➞ [9.4, 4.2]
// console.log(toNumberArray(["91", "44"])) // ➞ [91, 44]
// console.log(toNumberArray(["9.5", "8.8"])) // ➞ [9.5, 8.8]



// 25. Burglary Series (14): Adjectives Total
// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

// 1 => Example

// function totalAmountAdjectives(obj) {
//     return Object.keys(obj).length;
// }

// 2 => Example

// function totalAmountAdjectives(obj) {
//     let keys = Object.keys(obj);
//     let count = 0;
//     for(let i = 0; i < keys.length; i++) {
//         count++;
//     }
//     return count;
// }

// 3 => Example

// function totalAmountAdjectives(obj) {
//     let count = 0
//     for(let keys in obj) {
//         count++;
//     }
//     return count;
// }

// 4 => Example

// function totalAmountAdjectives(obj) {
//     return Object.keys(obj).reduce(value => value + 1, 0)
// }

// 5 => Example

// function totalAmountAdjectives(obj) {
//     return Object.entries(obj).length;
// }

// Examples
// console.log(totalAmountAdjectives({ a: "moron" })) // ➞ 1
// console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" })) // ➞ 3
// console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })) // ➞ 4
