// 54. Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.
// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.
// Return an empty array if there are no even numbers, or odd.

// 1 => Example
// function cleanUpArray(arr) {
//     const even = [];
//     const odd = [];

//     for(let i = 0; i < arr.length; i++) {
//         let num = Number(arr[i])
//         if(num % 2 === 0) {
//             even.push(num)
//         } else {
//             odd.push(num)
//         }
//     }
//     return [even, odd]
// }

// 2 => Example
// function cleanUpArray(arr) {
//     const even = [];
//     const odd = [];

//     for(let val of arr) {
//         let num = Number(val)

//         if(num % 2 === 0) {
//             even.push(num) 
//         } else {
//             odd.push(num)
//         }
//     }
//     return [even, odd]
// }

// 3 => Example
// function cleanUpArray(arr) {
//     const even = [];
//     const odd = [];

//     arr.forEach((val, idx) => {
//         let num = Number(val);

//         if(num % 2 === 0) {
//             even.push(num);
//         } else {
//             odd.push(num)
//         }
//     })
//     return [even, odd]
// }

// 4 => Example
// function cleanUpArray(arr) {
//     return arr.reduce(([even, odd], val) => {
//         let num = +val;
//         num % 2 === 0 ? even.push(num) : odd.push(num);
//         return [even, odd]
//     }, [[], []])
// }

// 5 => Example
// function cleanUpArray(arr) {
//     return [
//         arr.map(Number).filter(n => n % 2 === 0),
//         arr.map(Number).filter(n => n % 2 !== 0)
//     ]
// }

// Examples
// console.log(cleanUpArray(["8"])) // ➞ [[8], []]
// console.log(cleanUpArray(["11"])) // ➞ [[], [11]]
// console.log(cleanUpArray(["7", "4", "8"])) // ➞ [[4, 8], [7]]
// console.log(cleanUpArray(["9", "4", "5", "8"])) // ➞ [[4, 8], [9, 5]]



// 55. Largest Numbers
// Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

// 1 => Example
// function largestNumbers(num, arr) {
//     if(num === 0) return [];
//     return arr.sort((a, b) => a - b).slice(-num)
// }

// 2 => Example
// function largestNumbers(num, arr) {
//     if(num === 0) return [];
//     arr.sort((a, b) => a - b)
//     let result = [];

//     for(let i = arr.length - num; i < arr.length; i++) {
//         result.push(arr[i])
//     }
//     return result;
// }

// 3 => Example
// function largestNumbers(num, arr) {
//     if(num === 0) return [];
//     arr.sort((a, b) => a - b);
//     let result = [];
//     let idx = arr.length - num;
//     let i = 0
    
//     for(let val of arr) {
//         if(i >= idx) {
//             result.push(val)
//         }
//         i++;
//     }
//     return result;
// }

// 4 => Example
// function largestNumbers(num, arr) {
//     if(num === 0) return [];
//     arr.sort((a, b) => a - b);
//     let result = [];
//     let idx = arr.length - num;
//     let i = 0

//     arr.forEach((val) => {
//         if(i >= idx) {
//             result.push(val)
//         }
//         i++
//     });
//     return result;
// }

// 5 => Example
function largestNumbers(num, arr) {
    if(num === 0) return [];
    arr.sort((a, b) => a - b);
    let idx = arr.length - num;

    return arr.reduce((acc, val, i) => {
        if(i >= idx) {
            acc.push(val)
        }
        return acc;
    }, [])
}

// Examples
console.log(largestNumbers(2, [4, 3, 2, 1])) // ➞ [3, 4]
console.log(largestNumbers(1, [7, 19, 4, 2])) // ➞ [19]
console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])) // ➞ [16, 18, 57]
console.log(largestNumbers(0, [1, 3, 4, 2])) // ➞ []