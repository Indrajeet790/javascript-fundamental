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
/*
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
*/

// ###################################################//
// The "call" and "apply" method
/*

const indigo = {
  airline: "indigo",
  iataCode: "IN",
  bookings: [],
  // book:function(){ }
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: ` ${this.iataCode}${flightNum}`, name });
  },
};
indigo.book(234, "vijay gupta");
indigo.book(567, "Nikita");
console.log(indigo);

// example2

const euroWings = {
  airline: "EuroWings",
  iataCode: "EW",
  bookings: [],
};
const book = indigo.book;

book.call(euroWings, 236, "sarah willams");
console.log(euroWings);

book.call(indigo, 456, "priya");
console.log(indigo);

// example3
const swiss = {
  airline: "Swiss Air Line",
  iataCode: "SW",
  bookings: [],
};
book.call(swiss, 432, "Anil");
console.log(swiss);

// apply method
const flightData = [583, "gupta"];
// book.apply(swiss, flightData);
console.log(swiss);

//new way to use
book.call(swiss, ...flightData);

// #########################################
// Bind method
const bookEW = book.bind(euroWings);
const bookIN = book.bind(indigo);
const bookSW = book.bind(swiss);

bookEW(436, "Monika");

const bookEw23 = book.bind(euroWings, 23);
bookEw23("Sweta");
bookEw23("Rani");

// example:with EventListeners
/*indigo.planes = 300;
indigo.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document.querySelector(".buy").addEventListener("click", indigo.buyPlane.bind(indigo));
*/

// partial application
/*
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT=value => value+value*0.23
console.log(addVAT(100));
console.log(addVAT(23));

// challenge :one function return another function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

// #######################3
// Immediately invoked function expression(iife)
/*
const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// immediately invoked function
(function () {
  console.log("This will never run again");
})();

//2nd way
(() => console.log("This will  also never run again"))();
*/

// closure in javascript
// example 1
const userName = "vijay";
function login() {
  const password = "secret";
  console.log(`${userName} is loging in us ${password}`);
}
login();

// example 2
function callApi(method) {
  return function (url) {
    // api call
    console.log(`Fetching data from ${url} using ${method}`);
  };
}
const url = "http://example.com/api";
callApi("GET")(url);

// example3
function updateWrapper() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const updateCount = updateWrapper();
updateCount();
updateCount();
updateCount();

// example 4:ECommerce:WEbsite(Cart-counter)
function CartCounter() {
  let _count = 0;
  function _updateCount(val) {
    _count = _count + val;
  }
  return {
    increment() {
      _updateCount(1);
    },
    decrement() {
      _updateCount(-1);
    },
    value() {
      return _count;
    },
  };
}
const cartCounter = CartCounter();
cartCounter.increment();
cartCounter.increment();
cartCounter.decrement();
console.log(cartCounter.value());

// useState :hook clone

function useState(initial) {
  let _state = initial;
  function setState(value) {
    _state = value;
  }
  function getState() {
    return _state;
  }
  return [getState, setState];
}

function Counter() {
  const [count, setCount] = useState(0);
  return {
    click() {
      setCount(count() + 1);
    },

    Render() {
      console.log("value:", count());
    },
  };
}
const counter = Counter();
counter.click();
counter.Render();
counter.click();
counter.Render();
