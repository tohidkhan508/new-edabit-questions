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
