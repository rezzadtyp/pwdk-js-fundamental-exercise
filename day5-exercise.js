// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

// const arr = [12, 5, 23, 18, 4, 45, 32];

// function array(num) {
//     const lowest = Math.min(...num);
//     const highest = Math.max(...num);
//     let sum = 0;

//     for (let i = 0; i < num.length; i++) {
//         sum += num[i];
//     }

//     let average = sum / num.length;
//     average = average.toFixed(4);

//     return { lowest, highest, average };
// }

// console.log(array(arr));

// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

// const arr = ["apple", "banana", "cherry", "date"];

// function concentenatedString(fruit) {
//   if (arr.length === 0) {
//     return "";
//   } else if (arr.length === 1) {
//     return arr[0];
//   } else {
//     const lastWord = arr.pop();
//     const result = arr.join(",") + " and " + lastWord;

//     return result;
//   }
// }

// console.log(concentenatedString(arr));

// 3. Write a function to split a string and convert it into an array of words
// a. Example : “Hello World” → [“Hello”, “World”]

// const str = "Hello World";

// function splittedStr() {
//   const arr = str.split(" ");
//   return arr;
// }

// console.log(splittedStr(str))

// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

// const arr1 = [1, 2, 3];
// const arr2 = [3, 2, 1];

// function calcArray(arr1, arr2) {
//   const result = [];
  
//   for (let i = 0; i < arr1.length; i++) {
//     result.push(arr1[i] + arr2[i]);
//   }
//   return result;
// }
// console.log(calcArray(arr1, arr2));

// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

// let arr = [1, 2, 3, 4];

// function addArray(data) {
//   arr.push(data);
//   return arr;
// }

// console.log(addArray(5));
// console.log(addArray(7));

// 1. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]

// let numbers = [1, 2, 3, 4, 5, 6];

// function newArray(arr) {
//   let even = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       even.push(arr[i]);
//     }
//   }
//   return even;
// }

// console.log(newArray(numbers));

// 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
//  maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
//  The function will return [5, 10, 24, 3, 6]

// const arr = [5, 10, 24, 3, 6, 7, 8];

// function maxSize(maxSize, ...arr) {
//   if (arr.length > maxSize) {
//     arr.splice(maxSize);
//   }
//   return arr;
// }

// console.log(maxSize(5, ...arr));

// 3. Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const result = arr1.concat(arr2);
// console.log(result);

// 4. Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

// const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];

// function duplicate(array) {
//   const duplicates = [];
//   const result = {};

//   for (let i = 0; i < array.length; i++) {
//     const value = array[i];
//     if (result[value]) {
//       if (!duplicates.includes(value)) {
//         duplicates.push(value);
//       }
//     } else {
//       result[value] = true;
//     }
//   }
//   return duplicates;
// }

// console.log(duplicate(arr));

// 5. Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7] 

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];

// function findDiff(arr1, arr2) {
//   const diff1 = arr1.filter(element => !arr2.includes(element));
//   const diff2 = arr2.filter(element => !arr1.includes(element));

//   return diff1.concat(diff2);
// }

// console.log(findDiff(arr1, arr2));

// 1. Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

// arr = [1, [], undefined, {}, "string", {}, []];

// function filter(arr) {
//   return arr.filter(item => {
//     return typeof item !== "object";
//   });
// }

// console.log(filter(arr));

// 2. Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

// const numbers = [5, 3, 1, 7, 2, 6];

// numbers.sort((a, b) => a - b);

// const second = numbers.slice(1, 2)[0];

// console.log(second);

// 3. Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

// const mixedArray = ["3", 1, "string", null, false, undefined, 2];

// function sumNum(data) {
//   let sum = 0;

//   for (let item of data) {
//     if (typeof item === "number") {
//       sum += item;
//     }
//   }
//   return sum;
// }

// console.log(sumNum(mixedArray));

// 4. Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

const arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];

function sumValues(arr) {
  const duplicate = [];
  let sum = 0;

  for (let item of arr) {
    if (duplicate[item]) {
      duplicate[item]++;
    } else {
      duplicate[item] = 1;
    }
  }
  for (let i = 0; i < duplicate.length; i++) {
    if (duplicate[i] > 1) {
      sum += i * duplicate[i];
    }
  }
  return sum;
}

console.log(sumValues(arr));

// 5. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'