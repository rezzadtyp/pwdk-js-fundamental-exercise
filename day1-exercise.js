const length = 5;
const width = 3;

const area = length * width;
console.log(area);
//
const perimeter = length * 2  + width * 2;
console.log(perimeter);
//
const radius = 5;
const circleDiameter = 2 * radius;
console.log(circleDiameter);

const circumference = 22 / 7 * circleDiameter;
console.log(circumference);

const circleArea = 22 /  7 * 5 * 5;
console.log(circleArea);
//
const angleA = 80;
const angleB = 65;

const angleC = 180 - [angleA + angleB];
console.log(angleC);
//
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");

const difference = date2 - date1;
console.log(difference / (24 * 3600 * 1000));
/*
function convertDays(numberOfDays) {
  let years = Math.floor(numberOfDays / 365);
  let months = Math.floor((numberOfDays % 365) / 30);
  let days = numberOfDays % 365 % 30;

  return {
    years: years,
    months: months,
    days: days
  };
}

const numberOfDays1 = 400;
const result1 = convertDays(numberOfDays1);

console.log(`${result1.years} years, ${result1.months} months, ${result1.days} days.`);

const numberOfDays2 = 366;
const result2 = convertDays(numberOfDays2);

console.log(`${result2.years} years, ${result2.months} months, ${result2.days} days.`);
*/

let numberOfDays1 = 400;
let years1 = Math.floor(numberOfDays1 / 365);
let months1 = Math.floor((numberOfDays1 % 365) / 30);
let days1 = Math.floor(numberOfDays1 % 365 % 30);
let result1 = `${years1} years, ${months1} months, ${days1} days.`;

console.log(result1);


let numberOfDays2 = 366;
let years2 = Math.floor(numberOfDays2 / 365);
let months2 = Math.floor((numberOfDays2 % 365) / 30);
let days2 = Math.floor(numberOfDays2 % 365 % 30);
let result2 = `${years2} years, ${months2} months, ${days2} days.`;

console.log(result2);