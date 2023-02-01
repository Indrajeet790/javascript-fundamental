// destructuring array
"use strict";
/*
// const restaurant = {
//   name: "classico Italianno",
//   location: "via angelo Tavanti 23,Firenze,Italy",
//   categories: ["Italian", "Bruschetta", "vegetarian", "organic"],
//   staterMenu: ["facaccia", "Bruschetta", "Garlic Bread", "caprese Salad"],
//   mainMenu: ["pizza", "pasta", "Risotto"],

//   order: function (staterIndex, mainIndex) {
//     return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
//   },
// };
*/
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// destructuring assignment
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// const [first, , second] = restaurant.categories;
// console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// /*
//swapping(switching) method 1
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// */

// //method2
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // RECEIVE 2 return values from a function

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // working with nested destructing array
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.warn(i, j);

// //if we want to print all element of array
// const [i, j, [k, l]] = nested;
// console.warn(i, j, k, l);

// // default value
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

// ######################################################//
// New topic destructing  Object
/*"use strict";

const restaurant = {
  name: "classico Italianno",
  location: "via angelo Tavanti 23,Firenze,Italy",
  categories: ["Italian", "Bruschetta", "vegetarian", "organic"],
  staterMenu: ["facaccia", "Bruschetta", "Garlic Bread", "caprese Salad"],
  mainMenu: ["pizza", "pasta", "Risotto"],

  openingHour: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (staterIndex, mainIndex) {
    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    staterIndex = 1,
    mainIndex = 0,
    time = 20.0,
    address,
  }) {
    console.log(
      `order received! ${this.staterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
restaurant.orderDelivery({
  staterIndex: 2,
  mainIndex: 2,
  time: 22.3,
  address: "bokaro steel city",
});
restaurant.orderDelivery({ address: "bokaro steel city", staterIndex: 1 });
*/

// destructing object
// const { name, openingHour, categories } = restaurant;
// console.log(name, openingHour, categories);

// const {
//   name: restaurantName,
//   openingHour: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

//destructuring the menu
// // default value
// const { menu = [], staterMenu: staters = [] } = restaurant;
// console.log(menu, staters);

// mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 33, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested objects
// const {
//   fri: { open, close },
// } = hours;
// console.log(open, close);

// ####################################################//
//
/* The Spread Operators
"use strict";

const restaurant = {
  name: "classico Italianno",
  location: "via angelo Tavanti 23,Firenze,Italy",
  categories: ["Italian", "Bruschetta", "vegetarian", "organic"],
  staterMenu: ["facaccia", "Bruschetta", "Garlic Bread", "caprese Salad"],
  mainMenu: ["pizza", "pasta", "Risotto"],

  openingHour: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (staterIndex, mainIndex) {
    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    staterIndex = 1,
    mainIndex = 0,
    time = 20.0,
    address,
  }) {
    console.log(
      `order received! ${this.staterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
};
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "gnocci"];
console.log(newMenu);


// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 array
const menu = [...restaurant.staterMenu, ...restaurant.mainMenu];
console.log(menu);

//  iterables:array,string,maps,sets, Not objects
// real-world example
const str = "jonas";
const letter = [...str, "", "s."];
console.log(letter);
console.log(...str);
*/

// const ingredient = [
//   prompt("Let's make pasta! Ingredient"),
//   prompt("Ingredient2?"),
//   prompt("Ingredient3?"),
// ];
// console.log(ingredient);

// restaurant.orderPasta(ingredient[0], ingredient[1], ingredient[2]);
// restaurant.orderPasta(...ingredient);

// objects
/*
const newRestaurant = { foundation: 1998, ...restaurant, founder: "ram" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "second wife";
console.log(restaurantCopy.name);
console.log(restaurant.name);*/

// ########################################//
// Rest pattern and parameter
/*
const restaurant = {
  name: "classico Italianno",
  location: "via angelo Tavanti 23,Firenze,Italy",
  categories: ["Italian", "Bruschetta", "vegetarian", "organic"],
  staterMenu: ["facaccia", "Bruschetta", "Garlic Bread", "caprese Salad"],
  mainMenu: ["pizza", "pasta", "Risotto"],

  openingHour: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (staterIndex, mainIndex) {
    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    staterIndex = 1,
    mainIndex = 0,
    time = 20.0,
    address,
  }) {
    console.log(
      `order received! ${this.staterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// 1).destructuring part
// Spread, because on right of =
const arr = [1, 2, ...[3, 4]];
// Rest, because on left side =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.staterMenu,
];
console.log(pizza, risotto, otherFoods);

// objects
const { sat, ...weekdays } = restaurant.openingHour;
console.log(weekdays);

//2).functions

const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};
add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);

// orderPizza

restaurant.orderPizza("mushroom", "onion", "olives", "spinach");
restaurant.orderPizza("mushroom");
*/

// ########################//
// short Circuiting(&& and ||)
/*
const restaurant = {
  name: "classico Italianno",
  location: "via angelo Tavanti 23,Firenze,Italy",
  categories: ["Italian", "Bruschetta", "vegetarian", "organic"],
  staterMenu: ["facaccia", "Bruschetta", "Garlic Bread", "caprese Salad"],
  mainMenu: ["pizza", "pasta", "Risotto"],

  openingHour: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (staterIndex, mainIndex) {
    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    staterIndex = 1,
    mainIndex = 0,
    time = 20.0,
    address,
  }) {
    console.log(
      `order received! ${this.staterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

console.log("---Or---");
//  Use any data type, return any data type, short-circuiting
console.log(1 || "jonas");
console.log("" || "jonas");
console.log(undefined || null);
console.log(true || 0);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuest = 34;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

// AND operator  only true when all  value will be true
console.log("---AND---");
console.log(0 && "jonas");
console.log(7 && "jonas");

console.log("Hello" && 23 && null && "jonas");

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "spinach");
}
restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");
*/

// ###############################//
//The Nullish Coalescing Operator (??)
/*
// The Nullish Coalescing Operator (??) concept
// restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;
console.log(guest);

// Nullish: null and undefined(NOT 0 or '')
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);
*/

// ##########################//
//Logical  assignment operator
const restaurant = {
  name: "classico Italianno",
  location: "via angelo Tavanti 23,Firenze,Italy",
  categories: ["Italian", "Bruschetta", "vegetarian", "organic"],
  staterMenu: ["facaccia", "Bruschetta", "Garlic Bread", "caprese Salad"],
  mainMenu: ["pizza", "pasta", "Risotto"],

  openingHour: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (staterIndex, mainIndex) {
    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    staterIndex = 1,
    mainIndex = 0,
    time = 20.0,
    address,
  }) {
    console.log(
      `order received! ${this.staterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

//
const rest1 = {
  name: "Capri",
  numGuest: 0,
  // owner: "vijay",
};
const rest2 = {
  name: "la pizza",
  owner: "raj",
};
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// OR assignment operator
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// nullish assignment operator
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";
console.log(rest1);
console.log(rest2);
