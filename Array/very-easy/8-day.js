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

// 49. Chinese Zodiac
// Create a function that takes a year as an argument and returns the corresponding Chinese zodiac
// 1 => Example

// function chineseZodiac(year) {
//   let zodiac = [
//     "Rat",
//     "Ox",
//     "Tiger",
//     "Rabbit",
//     "Dragon",
//     "Snake",
//     "Horse",
//     "Goat",
//     "Monkey",
//     "Rooster",
//     "Dog",
//     "Pig",
//   ];

//   let index = (year - 4) % 12;
//   return zodiac[index];
// }

// 2 => Example

// function chineseZodiac(year) {
//     let zodiac = [
//     "Rat",
//     "Ox",
//     "Tiger",
//     "Rabbit",
//     "Dragon",
//     "Snake",
//     "Horse",
//     "Goat",
//     "Monkey",
//     "Rooster",
//     "Dog",
//     "Pig",
//   ];

//   let index = (year - 4) % 12;
//   let result = "";
//   for(let i = 0; i < zodiac.length; i++) {
//     if(i === index) {
//         result = zodiac[i];
//     }
//   }
//   return result;
// }

// 3 => Example

// function chineseZodiac(year) {
//     let zodiac = [
//     "Rat",
//     "Ox",
//     "Tiger",
//     "Rabbit",
//     "Dragon",
//     "Snake",
//     "Horse",
//     "Goat",
//     "Monkey",
//     "Rooster",
//     "Dog",
//     "Pig",
//   ];

//   let index = (year - 4) % 12;
//   let result = "";
//   let i = 0

//   for(let animal of zodiac) {
//     if(i === index) {
//         result = animal;
//     }
//     i++;
//   }
//   return result;
// }

// 4 => Example

// function chineseZodiac(year) {
//   let zodiac = [
//     "Rat",
//     "Ox",
//     "Tiger",
//     "Rabbit",
//     "Dragon",
//     "Snake",
//     "Horse",
//     "Goat",
//     "Monkey",
//     "Rooster",
//     "Dog",
//     "Pig",
//   ];

//   let index = (year - 4) % 12;
//   let result = "";

//   zodiac.forEach((animal, i) => {
//     if(i === index) {
//         result = animal;
//     }
//   });
//   return result;
// }

// Examples
// console.log(chineseZodiac(2021)); // ➞ "Ox"
// console.log(chineseZodiac(2020)); // ➞ "Rat"
// console.log(chineseZodiac(1933)); // ➞ "Rooster"



// 50. Learn Lodash: _.fill, Fill an Array With New Values
// According to the lodash documentation, _.fill Fills elements of an array with the value from start to, but not including, end. Note that this method mutates the array.

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Arguments
// array (Array): The array to fill.
// value (*): The value to fill array with.
// [start=0] (number): The start position.
// [end=array.length] (number): The end position.
// Returns
// (Array): Returns array.

// Examples
// var array = [1, 2, 3]

// 1 => Example

// var array = [1, 2, 3];

// function fill(array, value, start = 0, end = array.length) {
//     for(let i = start; i < end; i++) {
//         array[i] = value;
//     }
//     return array;
// }

// 2 => Example

// let array = [1, 2, 3];

// function fill(array, value, start = 0, end = array.length) {
//     let i = 0;
//     for(let _ of array) {
//         if(i >= start && i < end) {
//             array[i] = value;    
//         }
//         i++;
//     }
//     return array;
// }

// 3 => Example

let array = [1, 2, 3];

function fill(array, value, start = 0, end = array.length) {
    let i = 0;
    array.forEach((item) => {
        if(i >= start && i < end) {
            array[i] = value;
        }
        i++;
    });
    return array
}

console.log(fill(array, "a")) // ➞ ["a", "a", "a"]
console.log(fill(Array(3), 2)) // ➞ [2, 2, 2]
console.log(fill([4, 6, 8, 10], "*", 1, 3)) // ➞ [4, "*", "*", 10]
