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

// 34. Spaces Between Each Character
// Create a function that takes a string and returns a string with spaces in between all of the characters.

// 1 => Example

// function spaceMeOut(str) {
//     return str.split("").join(" ")
// }

// 2 => Example

// function spaceMeOut(str) {
//     let result = "";
//     for(let i = 0; i < str.length; i++) {
//         result += str[i];
//         if(i < str.length - 1) {
//             result += " ";
//         }
//     }
//     return result;
// }

// 3 => Example

// function spaceMeOut(str) {
//     let result = "";
//     let i = 0;
//     for(let word of str) {
//         result += word;
//         if(i < str.length - 1) {
//             result += " ";
//         }
//         i++;
//     }
//     return result;
// }

// 4 => Example

// function spaceMeOut(str) {
//     let result = "";
//     let arr = str.split("");
//     arr.forEach((word, index) => {
//         result += word;
//         if(index < arr.length - 1) {
//             result += " ";
//         }
//     });
//     return result;
// }

// 5 => Example

// function spaceMeOut(str) {
//     return Array.from(str).join(" ");
// } 

// // Examples
// console.log(spaceMeOut("space")) // ➞ "s p a c e"
// console.log(spaceMeOut("far out")) // ➞ "f a r   o u t"
// console.log(spaceMeOut("elongated musk")) // ➞ "e l o n g a t e d   m u s k"



// 35. Even or Odd?
// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).

// 1 => Example

// function evenOrOdd(arr) {
//     let sum = arr.reduce((a, b) => a + b, 0);
//     return sum % 2 === 0 ? "even" : "odd"
// }

// 2 => Example

// function evenOrOdd(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum % 2 === 0 ? "even" : "odd";
// }

// 3 => Example

// function evenOrOdd(arr) {
//     let sum = 0;
//     for(let value of arr) {
//         sum += value;
//     }
//     return sum % 2 === 0 ? "even" : "odd";
// }

// 4 => Example

// function evenOrOdd(arr) {
//     let sum = 0;
//     arr.forEach((value) => {
//         sum += value;
//     });
//     return sum % 2 === 0 ? "even" : "odd";
// }

// // Examples
// console.log(evenOrOdd([0])) // ➞ "even"
// console.log(evenOrOdd([1])) // ➞ "odd"
// console.log(evenOrOdd([])) // ➞ "even"
// console.log(evenOrOdd([0, 1, 5])) // ➞ "even"





// 36. ES6: Destructuring Arrays II
// You can assign variables from nested arrays like this:

// const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

// let trans1 = arr[0]
// let trans2 = arr[1]
// let trans3 = arr[2][0]
// let trans4 = arr[2][1][0]

// const arr = ["cars", "planes", ["trains", ["motorcycles"]]];

// let [trans1, trans2, [trans3, [trans4]]] = arr

// console.log(trans1) // outputs "cars"
// console.log(trans2) // outputs "planes"
// console.log(trans3) // outputs "trains"
// console.log(trans4) // outputs "motorcycles"



// 37. Rotate the Array by One 
// Given an array, rotate the values clockwise by one (the last value is sent to the first position).

// Check the examples for a better understanding.

// 1 => Example

// function rotateByOne(arr) {
//     arr.unshift(arr.pop());
//     return arr;
// }

// 2 => Example

// function rotateByOne(arr) {
//     let last = arr[arr.length - 1];
//     for(let i = arr.length; i > 0; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[0] = last;
//     return arr;
// }

// 3 => Example

// function rotateByOne(arr) {
//     let last = arr[arr.length - 1];
//     let i = arr.length - 1;
//     for(let value of arr) {
//         if(i > 0 ) {
//             arr[i] = arr[i - 1];
//             i--;
//         }
//     }
//     arr[0] = last;
//     return arr;
// }

// // Examples
// console.log(rotateByOne([1, 2, 3, 4, 5])) // ➞ [5, 1, 2, 3, 4]
// console.log(rotateByOne([6, 5, 8, 9, 7])) // ➞ [7, 6, 5, 8, 9]
// console.log(rotateByOne([20, 15, 26, 8, 4 ])) // ➞ [4, 20, 15, 26, 8]



// 38. Get the Sum of All Array Elements
// Create a function that takes an array and returns the sum of all numbers in the array.

// 1 => Example

// function getSumOfItems(arr) {
//     return arr.reduce((a, b) => a + b);
// }

// 2 => Example

// function getSumOfItems(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i ++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// 3 => Example

// function getSumOfItems(arr) {
//     let sum = 0;
//     for(let i of arr) {
//         sum += i;
//     }
//     return sum;
// }

// function getSumOfItems(arr) {
//     let sum = 0;
//     arr.forEach((value) => {
//         sum += value;
//     });
//     return sum;
// }

// 5 => Example

// function getSumOfItems(arr) {
//     let sum = 0;
//     arr.map(value => sum += value);
//     return sum;

// }

// // Examples
// console.log(getSumOfItems([2, 7, 4])) // ➞ 13
// console.log(getSumOfItems([45, 3, 0])) // ➞ 48
// console.log(getSumOfItems([-2, 84, 23])) // ➞ 105


// 39 Invert an Array
// Create a function that takes an array of numbers arr and returns an inverted array.

// 1 => Example 
// function invertArray(arr) {
//     return arr.map(num => -num);
// }

// 2 => Example 
// function invertArray(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         result.push(-arr[i]);
//     }
//     return result
// }

// 3 => Example
// function invertArray(arr) {
//     let result = [];
//     for(let num of arr) {
//         result.push(-num);
//     }
//     return result;
// }

// 4 => Example
// function invertArray(arr) {
//     let result = [];
//     arr.forEach((num) => {
//         result.push(-num);
//     });
//     return result;
// }

// 5 => Example
// function invertArray(arr) {
//     return arr.reduce((acc, num) => {
//         acc.push(-num);
//         return acc;
//     },[]);
// }

// // Examples
// console.log(invertArray([1, 2, 3, 4, 5])) // ➞ [-1, -2, -3, -4, -5]
// console.log(invertArray([1, -2, 3, -4, 5])) // ➞ [-1, 2, -3, 4, -5]
// console.log(invertArray([])) // ➞ []



// 40 Get the File Name
// Create a function that returns the selected filename from a path. Include the extension in your answer.

// 1 => Example
// function getFilename(str) {
//     return str.split("/").pop();
// };

// 2 => Example
// function getFilename(str) {
//     let result = "";
//     for(let i = str.length - 1; i >= 0; i--) {
//         if(str[i] === "/") break;
//         result += str[i];
//     }
//     return result.split("").reverse().join("");
// }

// 3 => Example
// function getFilename(str) {
//     let result = "";
//     for(let value of str) {
//         if(value === "/") {
//             result = "";
//         } else {
//             result += value;
//         }
//     }
//     return result;
// }

// 4 => Example
function getFilename(str) {
    let result = "";
    let arr = str.split("");
    arr.forEach((char) => {
        if(char === "/") {
            result = "";
        } else {
            result += char;
        }
    });
    return result;
}

// Examples
console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt")) // ➞ "edabit.txt"
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3")) // ➞ "Beethoven_5.mp3"
console.log(getFilename("ffprobe.exe")) // ➞ "ffprobe.exe"
