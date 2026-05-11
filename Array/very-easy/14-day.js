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
