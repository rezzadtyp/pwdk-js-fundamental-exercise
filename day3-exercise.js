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

let originalString = ""