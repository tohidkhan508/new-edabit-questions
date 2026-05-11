// 6. Fix the Bug: Simple Array Manipulation
// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// function incrementItems(arr) {
//     return arr.map((arr) => arr + 1);
// }

// function incrementItems(arr) {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] + 1);
//     }
//     return newArr;
// }

// function incrementItems(arr) {
//     let newArr = [];
//     arr.forEach((num) => {
//         newArr.push(num + 1);
//     });
//     return newArr
// }

// function incrementItems(arr) {
//     let newArr = [];
//     for(let num of arr) {
//         newArr.push(num + 1);
//     }
//     return newArr
// }

// function incrementItems(arr) {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         newArr[i] = arr[i] + 1;
//     }
//     return newArr
// }

// Examples
// console.log(incrementItems([0, 1, 2, 3])) // ➞ [1, 2, 3, 4]
// console.log(incrementItems([2, 4, 6, 8])) // ➞ [3, 5, 7, 9]
// console.log(incrementItems([-1, -2, -3, -4])) // ➞ [0, -1, -2, -3]




// 7. ES6: Destructuring Arrays I
// You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]

// let [a, b] = arr;

// let [a, b] = arr.slice(0, 2)

// let a = arr.at(0);
// let b = arr.at(1);

// let a = arr.shift();
// let b = arr.shift();
// let c = arr.shift();

// console.log(a); // outputs 1
// console.log(b); // outputs 2
// console.log(c); // outputs 3

// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.




// 8. Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.

// function getLastItem(arr) {
//     return arr.pop();
// }

// function getLastItem(arr) {
//     return arr[arr.length - 1];
// }

// function getLastItem(arr) {
//     return arr.at(-1);
// }

// function getLastItem(arr) {
//     return arr.slice(-1)[0];
// }

// function getLastItem(arr) {
//     let last;
//     for(let i = 0; i < arr.length; i++) {
//         last = arr[i];
//     }
//     return last;
// }

// function getLastItem(arr) {
//     let last;
//     for(let num of arr) {
//         last = num;
//     }
//     return last;
// }

// Examples
// console.log(getLastItem([1, 2, 3])) // ➞ 3
// console.log(getLastItem(["cat", "dog", "duck"])) // ➞ "duck"
// console.log(getLastItem([true, false, true])) // ➞ true




// 9. Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// function arrayToString(arr) {
//     return arr.join("");
// }

// function arrayToString(arr) {
//     return arr.reduce((str, item) => str + item, "");
// }

// function arrayToString(arr) {
//     return arr.map(String).join("");
// }

// function arrayToString(arr) {
//     let result = "";
//     for(let item of arr) {
//         result += item;
//     }
//     return result;
// }

// // Examples
// console.log(arrayToString([1, 2, 3, 4, 5, 6])) // ➞ "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"])) // ➞ "abcdef"
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])) // ➞ "123asdAAAA"




// 10. Concatenating Two Integer Arrays
// Create a function to concatenate two integer arrays.

// function concat(arr1, arr2) {
//     return arr1.concat(arr2)
// }

// function concat(arr1, arr2) {
//     return [...arr1, ...arr2];
// }

// function concat(arr1, arr2) {
//     let result = [];
//     for(let item of arr1) {
//         result.push(item)
//     }

//     for(let item of arr2) {
//         result.push(item)
//     }
//     return result
// }

// function concat(arr1, arr2) {
//     arr1.push(...arr2);
//     return arr1;
// }

// function concat(arr1, arr2) {
//     return arr2.reduce((acc, item) => {
//         acc.push(item);
//         return acc;
//     }, [...arr1])
// }

// // Examples
// console.log(concat([1, 3, 5], [2, 6, 8])) // ➞ [1, 3, 5, 2, 6, 8]
// console.log(concat([7, 8], [10, 9, 1, 1, 2])) // ➞ [7, 8, 10, 9, 1, 1, 2]
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])) // ➞ [4, 5, 1, 3, 3, 3, 3, 3]




// 11. Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

// function findIndex(arr, word) {
//     return arr.indexOf(word);
// }

// function findIndex(arr, word) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === word) {
//             return i;
//         }
//     }
// }

// function findIndex(arr, word) {
//     let index = -1;
//     arr.forEach((item, i) => {
//         if(item === word) {
//             index = i;
//         }
//     })
//     return index;
// }

// function findIndex(arr, word) {
//     return arr.findIndex(item => item === word);
// }

// function findIndex(arr, word) {
//     let index = 0;
//     for(let item of arr) {
//         if(item === word) {
//             return index;
//         }
//         index++;
//     }
//     return -1;
// }

// // Examples
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")) // ➞ 2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")) // ➞ 1
// console.log(findIndex(["a", "g", "y", "d"], "d")) // ➞ 3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")) // ➞ 0