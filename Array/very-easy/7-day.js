// 28. Half, Quarter and Eighth
// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// 1 => Example

// function halfQuarterEighth(num) {
//     return [num / 2, num / 4, num / 8];
// }

// 2 => Example

// function halfQuarterEighth(num) {
//     let result = []; 
//     let division = [2, 4, 8];

//     for(let i = 0; i < division.length; i++) {
//         result.push(num / division[i]);
//     }
//     return result;
// }

// 3 => Example

// function halfQuarterEighth(num) {
//     let result = [];
//     let division = [2, 4, 8];

//     for(let i of division) {
//         result.push(num / i);
//     }
//     return result;
// }

// 4 => Example

// function halfQuarterEighth(num) {
//     let result = [];
//     let division = [2, 4, 8];

//     division.forEach((value) => {
//         result.push(num / value);
//     });
//     return result;
// }

// 5 => Example

// function halfQuarterEighth(num) {
//     return [2, 4, 8].map(x => num / x);
// }

// 6 => Example

// function halfQuarterEighth(num) {
//     return [2, 4, 8].reduce((acc, val) => {
//         acc.push(num / val);
//         return acc
//     }, []);
// }

// Examples
// console.log(halfQuarterEighth(6)) // ➞ [3, 1.5, 0.75]
// console.log(halfQuarterEighth(22)) // ➞ [11, 5.5, 2.75]
// console.log(halfQuarterEighth(25)) // ➞ [12.5, 6.25, 3.125]



// 29. Shapes With N Sides
// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"

// 1 => Example

// function nSidedShape(num) {
//     let shapes = ["circle", "semi-circle", "triangle", "square", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];

//     return shapes[num - 1];
// }

// 2 => Example

// function nSidedShape(num) {
//     let shapes = ["circle", "semi-circle", "triangle", "square", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];

//     for(let i = 0; i < shapes.length; i++) {
//         if(i === num - 1) {
//             return shapes[i];
//         }
//     }
// }

// 3 => Example

// function nSidedShape(num) {
//     let shapes = ["circle", "semi-circle", "triangle", "square", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
//     let i = 0;

//     for(let value of shapes) {
//         if(i === num - 1) {
//             return value;
//         }
//         i++;
//     }
// }

// 4 => Example

// function nSidedShape(num) {
//     let shapes = ["circle", "semi-circle", "triangle", "square", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
//     let result;

//    shapes.forEach((value, index) => {
//     if(index === num - 1) {
//         result = value;
//     }
//    });
//    return result;
// }

// 5 => Example

// function nSidedShape(num) {
//     let shapes = ["circle", "semi-circle", "triangle", "square", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];

//      return shapes.reduce((result, value, idx) => {
//         if(idx === num - 1) {
//             result = value;
//         }
//         return result;
//     }, "");
// }

// // Examples
// console.log(nSidedShape(3)) // ➞ "triangle"
// console.log(nSidedShape(1)) // ➞ "circle"
// console.log(nSidedShape(9)) // ➞ "nonagon"



// 30. Multiply Every Array Item by Two
// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// 1 => Example

// function getMultipliedArr(arr) {
//     return arr.map(x => x * 2);
// }

// 2 => Example

// function getMultipliedArr(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         result[i] = arr[i] * 2;
//     }
//     return result
// }

// 3 => Example

// function getMultipliedArr(arr) {
//     let result = [];
//     let i = 0;
//     for(let value of arr) {
//         result[i] = value * 2;
//         i++;
//     }
//     return result;
// }

// 4 => Example

// function getMultipliedArr(arr) {
//     let result = [];
//     let i = 0;
//     arr.forEach((value) => {
//         result[i] = value * 2;
//         i++
//     });
//     return result;
// }

// 5 => Example

// function getMultipliedArr(arr) {
//     let result;
//     return arr.reduce((acc, value) => {
//         acc.push(value * 2);
//         return acc;
//     }, []);
// }

// 6 => Example

function getMultipliedArr(arr) {
    return Array.from(arr, x => x * 2);
}

// Examples
console.log(getMultipliedArr([2, 5, 3])) // ➞ [4, 10, 6]
console.log(getMultipliedArr([1, 86, -5])) // ➞ [2, 172, -10]
console.log(getMultipliedArr([5, 382, 0])) // ➞ [10, 764, 0]