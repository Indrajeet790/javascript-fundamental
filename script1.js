/*let js = "amazing";
 if (js === "amazing") alert("javascript is fun");

console.log(40 + 8 + 23 - 10);

console.log("vijay");
console.log(23);

let firstname = "vijay";
console.log(firstname);
console.log(firstname);
console.log(firstname);
console.log(firstname);

let country = "india";
console.log(country);

let continent = "Asia";
console.log(continent);

let poplution = 64377882389294;
console.log(poplution);
*/

// datatype//

/*let javascriptIsFun = true;
console.log(javascriptIsFun);

 console.log(typeof true);
console.log(typeof javascriptIsFun);
 console.log(typeof 23);
console.log(typeof "jones");

javascriptIsFun = "yes!";
console.log(typeof javascriptIsFun);

let x;
console.log(x);
console.log(typeof x);

x = 1998;
console.log(typeof x);
*/

//declare variable  let var const//

/*let age = 23;
console.log(age);

age = 34;
console.log(age);

const birthYear = 1991;
console.log(birthYear);
// birthYear = 1998;

var job = "student";
job = "teacher";
console.log(job);
*/

// javascript operator//
/*const now = 2023;
const ageVijay = now - 1998;
const ageNikita = now - 2002;
console.log(ageVijay, ageNikita);
*/

// challange1//

/*let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
*/

/*
let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;
let markHeightBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHeightBMI);
*/

// strings and templates literals//
/*
const firstName = "jonas";
const job = "teacher";
const birthYear = 1998;
const year = 2034;

const jonas =
  "I'm " + firstName + ",a " + (year - birthYear) + " years old " + job + " ! ";
console.log(jonas);
*/

// template//
/*const jonasNew = `I'm ${firstName},a ${year - birthYear} year old ${job} !`;
 console.log(jonasNew);*/

// ########## control if else statement//

/*
let age = 17;
 let isOldEnough =
if (age >= 18) {
  console.log("vijay can start driveing licence 🚗🚗🚗");
} else {
  let yearleft = 18 - age;
  console.log(yearleft, "you are too young wait for another year");
}
*/

/*const birtYear = 2004;
let century;
if (birtYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

//############# challenge 2 #####//
/*
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
/*

let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;
*/
/*
let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("mark's BMI is higher than Jhon");
} else {
  console.log("jhon BMI is higher than Mark's");
}
*/

/*
 // Type conversion//
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(23));
//  Type coercion

console.log("I am " + 23 + " year  old");

console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("24" / "2");
console.log("24" % "2");

// geuss the output

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

/*
//Truthy and falsy value
// 5 falsy value 0 ," "(empty string),undefined,null,NaN

console.log(Boolean(0));
console.log(Boolean(" vijay"));
console.log(Boolean({}));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));

const money = 0;
if (money) {
  console.log("Dont't speand it all!");
} else {
  console.log("you should get a job");
}

let height;
if (height) {
  console.log("YaY! height is defined");
} else {
  console.log("height is undefined");
}
*/

/*
// == vs === Equality operators//

const age = "18";
if (age === 18) console.log("you just became an adult:D(strict)");
if (age == 18) console.log("you just became an adult:D(loosely)");

const favourite = Number(prompt("what's your favorite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 23 ===23
  //"23"=23
  console.log("cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("number is not 7 or 23 or 9");
}

if (favourite !== 23) {
  console.log("why not 23 ?");
}
*/

// AND OR and NOT BOOLEAN operator //
/*
const hasDriversLicense = true; //A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);
*/

/*const hasDriversLicense = true; //A
const hasGoodVision = false; // B
console.log(hasDriversLicense || hasGoodVision);*/

/*
const hasDriversLicense = true; //A
const hasGoodVision = true; // B
console.log(hasDriversLicense || hasGoodVision);
*/

// console.log(!hasDriversLicense);
// console.log(!hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;

/*if (shouldDrive) {
  console.log("vijay is able to drive");
} else {
  console.log("someone else should drive");
}*/

/*
// const isTired = false;
// console.log(hasDriversLicense || hasGoodVision || isTired);

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("vijay is able to drive ....!");
} else {
  console.log("someone else should drive");
}
*/

//coding challange3 //
/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy 👑");
} else if (scoreDolphins < scoreKoalas) {
  console.log("koalas win the trophy 👑");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
} else {
}
*/
//bonas 1 1and 2//
/*
const scoreDolphins = (97 + 110 + 101) / 3;
const scoreKoalas = (109 + 91 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 👑");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("koalas win the trophy 👑");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("no one wins the trophy😂");
}
*/

// switch statement####//
/*
const day = "monday";

switch (day) {
  case "monday": // day === monday
    console.log("plan course structure");
    console.log("go to coding meetup");
    break;
  case "tuesday":
    console.log(" prepare theory video");
    break;
  case "wednesday":
  // console.log("write code example");
  // break;
  case "thursday":
    console.log("watchng videos");
    break;
  case "friday":
    console.log("record video");
    break;
  case "saturday":
  // console.log("playing");
  // break;
  case "sunday":
    console.log("enjoy weekand");
    break;
  default:
    console.log("not a valid day!");
}

// let day = "monday";
if (day === "monday") {
  console.log("plan course structure");
  console.log("go to coding meetup");
} else if (day === "tuesday") {
  console.log(" prepare theory video");
} else if (day === "wednesday" || day === "thursday") {
  console.log("watchng videos");
} else if (day === friday) {
  console.log("record video");
} else if (day === "saturday" || day === "sunday") {
  console.log("enjoy weekand");
} else {
  console.log("not a valid day!");
}
*/


