// 31. Array of Word Lengths
// Create a function that takes an array of words and transforms it into an array of each word's length.

// 1 => Example

// function wordLengths(arr) {
//     return arr.map(word => word.length);
// }

// 2 => Example

// function wordLengths(arr) {
//     let result = [];
//     for(i = 0; i < arr.length; i++) {
//         result.push(arr[i].length);
//     }
//     return result;
// }

// 3 = Example

// function wordLengths(arr) {
//     let result = [];
//     for(let word of arr) {
//         result.push(word.length);
//     }
//     return result;
// }

// 4 => Example

// function wordLengths(arr) {
//     let result = [];
//     arr.forEach((word) => {
//         result.push(word.length);
//     });
//     return result;
// }

// 5 => Example

// function wordLengths(arr) {
//     return arr.reduce((res, word) => {
//         res.push(word.length);
//         return res;
//     }, []);
// }

// 6 => Example

// function wordLengths(arr) {
//     return Array.from(arr, word => word.length);
// }

// // Examples
// console.log(wordLengths(["hello", "world"])) // ➞ [5, 5]
// console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])) // ➞ [9, 12, 9]
// console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])) // ➞ [3, 5, 9, 4, 2, 3, 8]



// 32. First Class, Second Class and Third Class Levers
// Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

// 1. In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// 2. In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
// 3. In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.


// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.

// 1 => Example

// function determineLever(arr) {
//     if(arr[1] === "f") {
//         return "first class lever";
//     } else if(arr[1] === "l") {
//         return "second class lever";
//     } else if(arr[1] === "e") {
//         return "third class lever";
//     }
// };

// 2 => Example

// function determineLever(arr) {
//     for(i = 0; i < arr.length; i++) {
//         if(i === 1) {
//             if(arr[i] === "f") {
//                 return "first class lever";
//             } else if(arr[i] === "l") {
//                 return "second class lever";
//             } else {
//                 return "third class lever"
//             }
//         }
//     }
// }

// 3 => Example

// function determineLever(arr) {
//     let i = 0
//     for(let value of arr) {
//         if(i === 1) {
//             if(value === "f") return "first class lever";
//             else if(value === "l") return "second class lever";
//             else return "third class lever";
//         }
//         i++;
//     }
// }

// Examples
// console.log(determineLever(["e", "f", "l"])) // ➞ "first class lever"
// console.log(determineLever(["e", "l", "f"])) // ➞ "second class lever"
// console.log(determineLever(["f", "e", "l"])) // ➞ "third class lever" 



// 33. Difference of Volumes of Cuboids
// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// 1 => Example

// function findDifference(a, b) {
//     let vloumeA = a[0] * a[1] * a[2];
//     let volumeB = b[0] * b[1] * b[2];
//     let result = vloumeA - volumeB;
//     return Math.abs(result);
// }

// 2 => Example

// function findDifference(a, b) {
//     let volumeA = 1;
//     let volumeB = 1;
//     let result

//     for(let i = 0; i < a.length; i++) {
//         volumeA *= a[i];
//         volumeB *= b[i];
//         result = volumeA - volumeB;
//     }
//     return Math.abs(result)
// }

// 3 => Example

// function findDifference(a, b) {
//     let volumeA = 1;
//     let volumeB = 1;
//     let i = 0;

//     for(let value of a) {
//         volumeA *= a[i];
//         volumeB *= b[i];
//         i++
//     }

//     let result = volumeA - volumeB;
//     return Math.abs(result);
// }

// 4 => Example

function findDifference(a, b) {
    return Math.abs(a.reduce((x, y) => x * y) - b.reduce((x, y) => x * y));
}

// Examples
console.log(findDifference([ 28, 16, 29 ], [ 7, 8, 17 ])) // ➞ 12040
console.log(findDifference([ 9, 22, 18 ], [ 16, 24, 10 ])) // ➞ 276
console.log(findDifference([ 1, 9, 25 ], [ 10, 7, 9 ])) // ➞ 405
console.log(findDifference([ 7, 6, 16 ], [ 26, 9, 26 ])) // ➞ 5412
