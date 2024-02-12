// EXERCISE 1
/*
Create a function that can create a triangle pattern according to the height we provide like the
following :
01
02 03
04 05 06
07 08 09 10
● Parameters : height → triangle height
*/

// function triangle(height) {
//   let x = "";
//   let count = 1;
  
//   for (let i = 1; i <= height; i++) {
//     for (let j = 1; j <= i; j++) {
//       x += count.toString().padStart(2, 0) + " ";
//       count++;
//     }
//     x += "\n";
//   }
//   return x;
// }
// console.log(triangle(4));

// EXERCISE 2
/* 
Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".
● Parameters : n → total looping
○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz 
*/

// function totalLooping(n) {
//   let count = 1;
//   let x = "";
//   const a = "Fizz";
//   const b = "Buzz";

//   for (let i = 1; i <= n; i++){
//     if (count % 3 === 0 && count % 5 === 0) {
//       x += a+b;
//     } else if (count % 3 === 0) {
//       x += a;
//     } else if (count % 5 === 0) {
//       x += b;
//     } else {
//       x += count;
//     }
//     if (i < n) {
//       x += ", ";
//     }
//     count++;
//   }
//   return x;
// }

// console.log(totalLooping(15));

// EXERCISE 3
/*
Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))²
● Parameters : weight & height
● Return values :
○ < 18.5 return “less weight”
○ 18.5 - 24.9 return “ideal”
○ 25.0 - 29.9 return “overweight”
○ 30.0 - 39.9 return “very overweight”
○ > 39.9 return “obesity”
*/

// function calcBMI(kg, cm) {
//   let m = cm / 100;
//   const bmi =  kg / (m ** 2);

//   console.log(bmi);

//   if (bmi < 18.5) {
//     return "less weight";
//   }else if (bmi >= 18.5 && bmi < 25) {
//     return "ideal";
//   }else if (bmi >= 25 && bmi < 30) {
//     return "overweight";
//   }else if (bmi >= 30 && bmi < 40) {
//     return "very overweight";
//   }else {
//     return "obesity";
//   }
// }

// kg = 57;
// cm = 175;

// let result = calcBMI(kg,cm);
// console.log(result);

// EXERCISE 4
/*
Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only
○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
*/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = numbers.filter((even) => {
//   if (even % 2 === 0) {
//     return even;
//   }
// });

// console.log(result);

// EXERCISE 5
/*
Write a function to split a string and convert it into an array of words
○ Example : “Hello World” → [“Hello”, “World”]
*/

// const words = "Hello World";
// const convert = words.split(" ");

// console.log(convert);