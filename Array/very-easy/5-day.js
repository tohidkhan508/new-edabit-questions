// 20. Convert All Array Items to String
// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// function parseArray(arr) {
//     return arr.map(String);
// }

// function parseArray(arr) {
//     result = [];
//     for(let i = 0; i < arr.length; i++) {
//         result.push(String(arr[i]));
//     }
//     return result;
// }

// function parseArray(arr) {
//     let result = [];
//     for(let i of arr) {
//         result.push(String(i))
//     }
//     return result;
// }

// function parseArray(arr) {
//     let result = [];
//     arr.forEach((value) => {
//         result.push(String(value))
//     });
//     return result;
// }

// function parseArray(arr) {
//    return Array.from(arr, String);
// }

// // Examples
// console.log(parseArray([1, 2, "a", "b"])) // ➞ ["1", "2", "a", "b"]
// console.log(parseArray(["abc", 123, "def", 456])) // ➞ ["abc", "123", "def", "456"]
// console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"])) // ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
// console.log(parseArray([])) // ➞ []




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


function checkSquareAndCube(arr) {
    let result = false;
    arr.forEach((_, idx) => {
        if(idx === 0) {
            if(Math.sqrt(arr[0]) === Math.cbrt(arr[1])) {
                result = true;
            }
        }
    });
    return result
}

// Examples
console.log(checkSquareAndCube([4, 8])) // ➞ true
console.log(checkSquareAndCube([16, 48])) // ➞ false
console.log(checkSquareAndCube([9, 27])) // ➞ true