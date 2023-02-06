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
