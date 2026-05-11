// 47. True Ones, False Zeros
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// 1 => Example

// function integerBoolean(num) {
//     let val = num.split("");
//     let nums = val.map(value => value == 1 ? true : false);
//     return nums;
// }

// 2 = > Example

// function integerBoolean(num) {
//     return num.split("").map(val => val === "1");
// }

// 3 => Example

// function integerBoolean(num) {
//     let nums = num.split("");
//     let result = [];
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] === "1") {
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// }

// 4 => Example

// function integerBoolean(num) {
//     const nums = num.split("");
//     let result = [];
//     for(let val of nums) {
//         if(val === "1") {
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// }

// 5 => Exmaple

// function integerBoolean(num) {
//     const nums = num.split("");
//     let result = [];
//     nums.forEach((val) => {
//         if(val === "1") {
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     });
//     return result;
// }

// 6 => Example

// function integerBoolean(num) {
//     const nums = num.split("");
//     return nums.reduce((acc, val) => {
//         if(val === "1") {
//             acc.push(true);
//         } else {
//             acc.push(false);
//         }
//         return acc;
//     }, []);
// }

// Examples
// console.log(integerBoolean("100101")) // ➞ [true, false, false, true, false, true]
// console.log(integerBoolean("10")) // ➞ [true, false]
// console.log(integerBoolean("001")) // ➞ [false, false, true]



// 48. Binary Array to Decimal
// In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.

// 1 => Example

// function binaryToDecimal(arr) {
//     return arr.reduce((acc, val) => acc * 2 + val, 0);
// }

// 2 => Example

// function binaryToDecimal(arr) {
//     let result = 0;
//     for(let i = 0; i < arr.length; i++) {
//         result = result * 2 + arr[i];
//     }
//     return result;
// }

// 3 => Example

// function binaryToDecimal(arr) {
//     let result = 0;
//     for(let nums of arr) {
//         result = result * 2 + nums, 0;
//     }
//     return result;
// }

// 4 => Example

// function binaryToDecimal(arr) {
//     let result = 0;
//     arr.forEach((acc) => {
//         result = result * 2 + acc, 0;
//     });
//     return result;
// }

// 5 => Example

function binaryToDecimal(arr) {
    return arr.reduce((acc, val) => {
        acc = acc * 2 + val, 0;
        return acc;
    }, 0)
}

// Examples
console.log(binaryToDecimal([0, 0, 0, 1])) // ➞ 1
console.log(binaryToDecimal([0, 0, 1, 0])) // ➞ 2
console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1])) // ➞ 1005