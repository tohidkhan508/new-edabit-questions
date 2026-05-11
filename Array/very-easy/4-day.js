// 18. 50-30-20 Strategy
// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// function fiftyThirtyTwenty(ati) {
//     return {
//         Needs: ati * 0.5,
//         Wants: ati * 0.3,
//         Savings: ati * 0.2
//     }
// }

// function fiftyThirtyTwenty(ati) {
//     let needs = ati * 0.5;
//     let wants = ati * 0.3;
//     let savings = ati * 0.2;

//     let result = {
//         Needs: needs,
//         Wants: wants,
//         Savings: savings
//     };

//     return result;
// }

// function fiftyThirtyTwenty(ati) {
//     let categories = ["Needs", "Wants", "Savings"];
//     let percentages = [0.5, 0.3, 0.2];
//     let result = {};

//     categories.forEach((key, i) => {
//         result[key] = ati * percentages[i];
//     });
//     return result
// }

// function fiftyThirtyTwenty(ati) {
//     let percent = {needs: 0.5, wants: 0.3, savings: 0.2};
//     return {
//         Needs: ati * percent.needs,
//         Wants: ati * percent.wants,
//         Savings: ati * percent.savings
//     };
// }

// function fiftyThirtyTwenty(ati) {
//     let categories = ["Needs", "Wants", "Savings"];
//     let percentages = [0.5, 0.3, 0.2];
//     let result = {};

//     for(let i = 0; i < categories.length; i++) {
//         result[categories[i]] = ati * percentages[i];
//     }
//     return result;
// }

// function fiftyThirtyTwenty(ati) {
//     let categories = ["Needs", "Wants", "Savings"];
//     let percentages = [0.5, 0.3, 0.2];
//     let result = {};
//     let i = 0;

//     for(let value of categories) {
//         result[value] = ati * percentages[i];
//         i++;
//     }
//     return result;
// }

// function fiftyThirtyTwenty(ati) {
//    let categories = ["Needs", "Wants", "Savings"];
//    let percentages = [0.5, 0.3, 0.2];

//    let result = categories.reduce((value, category, i) => {
//       value[category] = ati * percentages[i];
//       return value;
//    }, {});
//    return result;
// }

// Examples
// console.log(fiftyThirtyTwenty(10000)) // ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// console.log(fiftyThirtyTwenty(50000)) // ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// console.log(fiftyThirtyTwenty(13450)) // ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }




// 19. Similar Bread
// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// function hasSameBread(arr1, arr2) {
//    return arr1[0] === arr2[0] && arr1.length - 1 === arr2.length - 1;
// }

function hasSameBread(arr1, arr2) {
   for(let i = 0; i < arr1.length; i++) {
      if(i === 0 && arr1[i] !== arr2[i]) {
         return false;
      }
      if(i === arr1.length - 1 && arr1[i] !== arr2[i]) {
         return false;
      }
   }
   return true;
}

// Examples
console.log(hasSameBread(
  ["white bread", "lettuce", "white bread"],
  ["white bread", "tomato", "white bread"]
)) // ➞ true

console.log(hasSameBread(
  ["brown bread", "chicken", "brown bread"],
  ["white bread", "chicken", "white bread"]
)) // ➞ false

console.log(hasSameBread(
  ["toast", "cheese", "toast"],
  ["brown bread", "cheese", "toast"]
)) // ➞ false