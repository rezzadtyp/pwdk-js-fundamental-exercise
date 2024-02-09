/*
Write a code to display the multiplication table of a given integer.
○ Example : Number → 9
○ Output :
■ 9 x 1
■ 9 x 2
■ ...
■ 9 x 10

● Write a code to check whether a string is a palindrome or not.
○ Example : ‘madam’ → palindrome
● Write a code to convert centimeter to kilometer.
○ Example : 100000 → “1 km”
● Write a code to format number as currency (IDR)
○ Example : 1000 → “Rp. 1.000,00”
● Write a code to remove the first occurrence of a given “search string” from a string
○ Example : string = “Hello world”, search string = “ell” → “Ho world”
● Write a code to capitalize the first letter of each word in a string
○ Example : “hello world” → “Hello World”
● Write a code to reverse a string.
○ Example : “hello” → “olleh”

Exercise

● Write a code to swap the case of each character from string
○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
● Write a code to find the largest of two given integers
○ Example : num1 = 42, num2 = 27 → 42
● Write a conditional statement to sort three numbers
○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
type.
○ Example : “hello” → 1
● Write a code to change every letter a into * from a string of input
○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
*/

// const input = 9;
// const limit = 10;

// for (let i = 1; i <= limit; i++) {
//   console.log(`${input} * ${i} = ${input * i}`);
// }

// //

// const palindrome = "madam";

// for (let i = palindrome.length; i >= 1; i--) {
//   if (palindrome[i] = palindrome.charAt(palindrome.length) - 1) {
//     console.log(`${palindrome} is palindrome`);
//   } else {
//     console.log(`${palindrome} is not palindrome`);
//   }
// }



// const palindrome = "madam";
// const result = true;

// for (let i = palindrome.length; i >= 1; i--) {
//   if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
//     result = false;
//     break;
//   }
// }

// if (result) {
//   console.log(`${palindrome} is a palindrome.`);
// } else {
//   console.log(`${palindrome} is not a palindrome.`);
// }

// //

// const cm = 100000;
// console.log(cm / 100000 + "km");

//

// let originalString = "Hello World";
// const searchString = "ell";
// const index = originalString.indexOf(searchString);
// let result = "";
// if (index !== -1) {
//   result = originalString.slice(0, index) + originalString.slice(index + searchString.length);
// }

// console.log(originalString);
// console.log(result);
// console.log(`"` + originalString + `"` + ", search string = " + `"` + searchString + `"` + " -> " + `"` + result + `"`);

// let originalString = "hello world";
// let words = originalString.split(" ");

// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].substring(1);
// }

// let capitalizedString = words.join(" ");
// console.log(capitalizedString);

//

// let originalString = "hello";
// let newString = "";
// for (let i = originalString.length - 1; i >= 0; i--) {
//   newString += originalString[i];
// }

// console.log(newString);

//

// const str = 'The QuiCk BrOwN Fox';
// const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const LOWER = 'abcdefghijklmnopqrstuvwxyz';
// let result = [];

// for (let i = 0; i < str.length; i++) {
//   if(UPPER.indexOf(str[i]) !== -1) {
//     result.push(str[i].toLowerCase());
//   } else if(LOWER.indexOf(str[i] !== -1)) {
//     result.push(str[i].toUpperCase());
//   } else {
//     result.push(str[i]);
//   }
// }
// console.log(result.join(''));

//

// let num1 = 42;
// let num2 = 27;

// if (num1 > num2) {
//   console.log(num1 + " is greater than " + num2);
// } else {
//   console.log(num1 + " is lesser than " + num2);
// }

// let num1 = 42;
// let num2 = 27;
// let num3 = 18;

// if (num1 > num2) {
//   let sort = num1;
//   num1 = num2;
//   num2 = sort;
// }

// if (num1 > num3) {
//   let sort = num1;
//   num1 = num3;
//   num3 = sort;
// }

// if (num2 > num3) {
//   let sort = num2;
//   num2 = num3;
//   num3 = sort;
// }

// console.log(num1 + ', ' + num2 + ', ' + num3);

//

// let input = "hello";
// let result = "";

// if (typeof input === "string") {
//   result = 1;
// } else if (typeof input === "number") {
//   result = 2;
// } else {
//   result = 3;
// }

// console.log(result);
// console.log(input + " -> " + result);

//

const str = "An apple a day keeps the doctor away";
const modifiedStr = "*";
let result = "";

for (let i = 0; i < str.length; i++){
  if (str[i] === 'a' || str[i] === "A") {
    result += modifiedStr; // Append '*' character
  } else {
    result += str[i];
  }
}

console.log(result);

//DONE