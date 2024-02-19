// ● Create a function to check if two objects are equal
// ● Example
// ○ Input : { a: 2 } & { a: 1 }
// ○ Output: false
// ● Example
// ○ Input : { a: “Hello” } & { a: 1 }
// ○ Output: false
// ● Example
// ○ Input : { a: 1 } & { a: 1 }
// ○ Output: true

// const checkEqual = (obj1, obj2) => {
//   console.log(obj1.a);
//   console.log(obj2.a);
//   console.log(obj1.a === obj2.a)
//   obj1.a === obj2.a;
// };

// Input 1
// object1 = { a: 2 };
// object2 = { a: 1 };

// Input 2
// object1 = { a: "Hello" };
// object2 = { a: 1 };

// Input 3
const object1 = { a: 1 };
const object2 = { a: 1 };

const checkEqual = (a, b) => a.a === b.a;

let result = checkEqual(object1, object2);
console.log(result);

// ===============================================================
// ● Create a function to get the intersection of two objects
// ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output: { a: 1 }

// const object1 = { a: 1, b: 2 };
// const object2 = { a: 1, c: 3 };
// const intersect = intersection(object1, object2);

// function intersection(o1, o2) {
//   const result = {};

//   for (let key in o1) {
//     if (o2.hasOwnProperty(key) && o1[key] === o2[key]) {
//       result[key] = o1[key];
//     }
//   }
//   return result;
// }

// console.log(intersect);

// ===============================================================
// ● Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example :
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]
// ● Result :
// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]
const array1 = [
  { name: "Student 1", email : "student1@mail.com" },
  { name: "Student 2", email : "student2@mail.com" }
  ]
const array2 = [
  { name: "Student 1", email : "student1@mail.com" },
  { name: "Student 3", email : "student2@mail.com" }
  ]

let names = new Set(array1.map(a => a.name));
let merged = [...array1, ...array2.filter(a => !names.has(a.name))];

console.log(merged);

// ===============================================================
// ● Create a function that can accept input as an array of objects and switch all values into property and
// property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]
function reverseObject(o) {
  const reversed = {};

  for (const key in o) {
    if (Object.hasOwnProperty.call(o, key)) {
      const value = o[key];
      reversed[value] = key;
    }
  }

  return reversed;
}

const object = { name: "David", age: "20" };
const reversedObj = reverseObject(object);

console.log(reversedObj);

// ===============================================================
// ● Create a function to find a factorial number using recursion
// ● Example
// ○ Input : 5
// ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));
