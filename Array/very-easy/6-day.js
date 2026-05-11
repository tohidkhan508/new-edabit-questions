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



// 26. ES6: Destructuring Arrays III
// You can assign variables from arrays with destructuring like this:

// const arr = ["eyes", "nose", "lips", "ears"]
// let [eyes, nose, lips, ears] = arr

// console.log(eyes);

// But you can also skip over items in the array being destructured.



// 27. Recreating the String.length Property
// Create a function which returns the length of a string, WITHOUT using String.length property.

// 1 => Example

// function length(str) {
//     let count = 0;
//     for(let i = 0; i < str.length; i++) {
//         count++
//     }
//     return count;
// }

// 2 => Example 

// function length(str) {
//     let count = 0;
//     for(let value of str) {
//         count++
//     }
//     return count;
// }

// 3 => Example

function length(str) {
    count = 0;
    str.split('').forEach(() => {
        count++;
    });
    return count;
}

// Examples
console.log(length("Hello World")) // ➞ 11
console.log(length("Edabit")) // ➞ 6
console.log(length("wash your hands!")) // ➞ 16