// 45. Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// 1 => Example

// function filterArray(arr) {
//     return arr.filter(num => typeof num === "number");
// };

// 2 => Example

// function filterArray(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(typeof arr[i] === "number") {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// 3 => Example

// function filterArray(arr) {
//     let result = [];
//     for(let val of arr) {
//         if(typeof val === "number") {
//             result.push(val);
//         }
//     }
//     return result;
// }

// 4 => Example

// function filterArray(arr) {
//     let result = [];
//     arr.forEach((num) => {
//         if(typeof num === "number") {
//             result.push(num);
//         }
//     });
//     return result;
// }

// 5 => Example

// function filterArray(arr) {
//     return arr.reduce((acc, val) => {
//         if(typeof val === "number") {
//             acc.push(val);
//         }
//         return acc;
//     }, []);
// }

// Examples
// console.log(filterArray([1, 2, 3, "a", "b", 4])) // ➞ [1, 2, 3, 4]
// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])) // ➞ [0, 1729]
// console.log(filterArray(["Nothing", "here"])) // ➞ []



// 46. Burglary Series (11): Say What
// The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

// 1 => Example

// function helo(obj) {
//     const values = Object.values(obj).join(" ");
//     const secondKey = Object.values(obj)[1];
//     return values + " " + secondKey;        
// }

// 2 => Example

// function helo(obj) {
//     const keys = Object.keys(obj);
//     const result = [];

//     for(let i = 0; i < keys.length; i++) {
//         result.push(obj[keys[i]]);
//     }
//     return result.join(" ") + " " + result[1];
// }

// 3 => Example

// function helo(obj) {
//     const result = [];
    
//     for(let str in obj) {
//         result.push(obj[str]);
//     }
//     return result.join(" ") + " " + result[1];
// }

// 4 => Exmaple

// function helo(obj) {
//     let keys = Object.values(obj);
//     let result = [];
//     keys.forEach(val => {
//         result.push(val);
//     });
//     return result.join(" ") + " " + result[1];
// }

// 5 => Example

function helo(obj) {
    let keys = Object.values(obj);
    const arr = keys.reduce((acc, val) => {
        acc.push(val);
        return acc
    }, []);
    return arr.join(" ") + " " + arr[1];
}

// Examples
console.log(helo({ 1: "Mommy", 2: "please", 3: "help" })) // ➞ "Mommy please help please"
console.log(helo({ 1: "Me", 2: "innocent", 3: "is" })) // ➞ "Me innocent is innocent"
console.log(helo({ 1: "Must", 2: "lawyer", 3: "call" })) // ➞ "Must lawyer call lawyer"