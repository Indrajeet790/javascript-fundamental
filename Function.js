"use strict";
//  default parameters
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 299 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 299;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
createBooking("LH123", 3, 1000);
createBooking("LH123", 5);
*/

// How passing Argument works:value vs. Reference
/*
const flight = "LH123";
const vijay = {
  name: "vijay Gupta",
  passport: 23452345,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;
  if (passenger.passport === 23452345) {
    alert("Check in");
  } else {
    alert("!wrong passport!");
  }
};
// checkIn(flight, vijay);
// console.log(flight);
// console.log(vijay);

// Is the same as doing
// const flightNum = flight;
// const passenger = vijay;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(vijay);
checkIn(flight, vijay);

// javascript does not have passing by reference only passing by value
*/

// ###########################################//
// First-Class and Higher-Order function
/*
=>first-Class Functions
1.javascript treats function as first-class-citizens
2.This means that function are simply values
3.Function are just another"type" of object

*/

// function A() {
//   return (function () {
//     console.log("hello");
//   })();
// }

// A(3, 5);

// function A(B) {
//   return B;
// }
// A();

// function B() {
//   console.log("Hello");
// }
// B();

// Higher-order-functions
// A function that receives another function as an argument that return a new function,or both
// This is only possible because pf first-class functions

// Function that receive another function
// const greet = () => console.log("hey vijay");
// btnClose.addEventListener("click", greet);

// 2.function that returns new function
// function count() {
//   let counter = 0;
//   return function () {
//     counter++;
//   };
// }

// #################//
// Higher-order function
/*
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join("");
};
// Higher-order functions
const transformer = function (str, fn) {
  console.log(`Original string:${str}`);
  console.log(`Transformed string:${fn(str)}`);
  console.log(`Transformed by:${fn.name}`);
};
transformer("javascript is the best!", upperFirstWord);

// js uses callback all the time
const high5 = function () {
  console.log("✋");
};
// document.body.addEventListener("click", high5);
["jonas", "vijay", "adam"].forEach(high5);
*/

// #################################################//
//Functions Returning Function//
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet("Hey");
greeterHey("vijay");
greeterHey("sam");

// call greet function
greet("Hello")("vijay");

// same code with  written arrow function
// One arrow function returning another arrow function
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("hey")("sam");
