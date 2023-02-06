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
*/
// ###################################################//

// 1.coding challenge
/*
 WE're building a football⚽ betting app🏆.

 Suppose we got data from a web service about a certain game(below).In this challenge we're gonna work with the data.So here are your tasks;

 1.Create one player for each team(variables players1,players2).
 2.The first player in any player array is the goalkeeper and the others are field players.For Bayern Munich(team 1) create one variable('gk')with the goalkeeper's name,and one array('fieldPlayer') with all the remaining 10 field players.
 3.Create an array'allPlayers' containing all players of both teams (22 players).
 4.During the game,Bayern Munich(team 1) used 3 substitute players.So create a new array('players1Final') containing all the original team1 players plus 'Thiago', 'coutinho and 'perisic'.
 5. Based on the game.odds objects,create one variable for each odd(called 'team1','draw' and 'team2')
 6. Write a function('printGoals') that receives an arbitrary number of player names(NOT an array) and prints each of them to the console,along with the number of goals that were scored in total (number of player names passed in) 
 7. The team with the lower odd is more likely to win.Print to the console which teams is more likely to win, WITHOUT using an if/else statement or the ternary operators.

 TEST DATA for 6 Use players 'Davies,'Muller',
 'Lewandowski' and 'Kimmich'. Then call the function again with players from game ,scored

 */
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Feb 1st,2023",
  odds: {
    teams1: 11.33,
    x: 3.25,
    teams2: 6.5,
  },
};
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const Players1Final = [...players1, "Thiago", "Countinho", "Periscic"];

// 5.
const {
  odds: { teams1, x, teams2 },
} = game;
console.log(teams1, x, teams2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller");
printGoals(...game.scored);

// 7.
teams1 < teams2 && console.log("Team 1 is more likely to win");
teams1 > teams2 && console.log("Team 2 is more likely to win");

*/
// #######################################################//
//  Looping Array:The for-of loop
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
const menu = [...restaurant.staterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}
for (const [i, ele] of menu.entries()) {
  console.log(`${i + 1}: ${ele}`);
  // for (const item of menu.entries()) {
  //   console.log(`${item[0] + 1}: ${item[1]}`);
}

// console.log(...menu.entries());
*/

// ###########################################//
// Enhanced objects literals
/*
const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHour = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    // open: 0,open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "classico Italianno",
  location: "via angelo Tavanti 23,Firenze,Italy",
  categories: ["Italian", "Bruschetta", "vegetarian", "organic"],
  staterMenu: ["facaccia", "Bruschetta", "Garlic Bread", "caprese Salad"],
  mainMenu: ["pizza", "pasta", "Risotto"],

  // ES6 enhanced objects literals
  openingHour,

  order(staterIndex, mainIndex) {
    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ staterIndex = 1, mainIndex = 0, time = 20.0, address }) {
    console.log(
      `order received! ${this.staterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
*/

// #####################################################//
// Optional chaining
/*
const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHour = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0,
    // open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "classico Italianno",
  location: "via angelo Tavanti 23,Firenze,Italy",
  categories: ["Italian", "Bruschetta", "vegetarian", "organic"],
  staterMenu: ["facaccia", "Bruschetta", "Garlic Bread", "caprese Salad"],
  mainMenu: ["pizza", "pasta", "Risotto"],

  // ES6 enhanced objects literals
  openingHour,

  order(staterIndex, mainIndex) {
    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ staterIndex = 1, mainIndex = 0, time = 20.0, address }) {
    console.log(
      `order received! ${this.staterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
if (restaurant.openingHour && restaurant.openingHour.mon) {
  console.log(restaurant.openingHour.mon.open);
}
// With optional chaining
console.log(restaurant.openingHour.mon?.open);
console.log(restaurant.openingHour?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHour[day]?.open ?? "closed";
  console.log(` on ${day},we open at ${open}`);
}
// method
console.log(restaurant.order?.(0, 1) ?? "method does not exit");
1;
console.log(restaurant.orderRISOTTO?.(0, 1) ?? "method does not exit");

// Arrays//

const Users = [{ name: "jonas", email: "helloe@jonas.io" }];
// optional chaining method
// const Users = [];
console.log(Users[0]?.name ?? "user array empty");

// other method we  can get same output using this method
if (Users.length > 0) {
  console.log(Users[0]?.name);
} else {
  console.log("user array empty");
}
*/

// ####################################//
//Looping objects: object key, value, and Entries
/*
const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHour = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0,
    // open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "classico Italianno",
  location: "via angelo Tavanti 23,Firenze,Italy",
  categories: ["Italian", "Bruschetta", "vegetarian", "organic"],
  staterMenu: ["facaccia", "Bruschetta", "Garlic Bread", "caprese Salad"],
  mainMenu: ["pizza", "pasta", "Risotto"],

  // ES6 enhanced objects literals
  openingHour,

  order(staterIndex, mainIndex) {
    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ staterIndex = 1, mainIndex = 0, time = 20.0, address }) {
    console.log(
      `order received! ${this.staterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// Property Name( we can  print the keys value of object)
const properties = Object.keys(openingHour);
// {
console.log(properties);
// console.log(`we are open on ${properties.length} days`);
// for (const day of Object.keys(openingHour)) {
//   console.log(day);
// }
let openStore = `we are open on ${properties.length} days:`;
for (const day of properties) {
  openStore += `${day},`;
}
console.log(openStore);
// }

// Property Values(Here we can print the value of object)
const values = Object.values(openingHour);
console.log(values);

// Entires Object(Here  you can print keys and values both simultaneously)
const entries = Object.entries(openingHour);
// console.log(entries);

// [key,value]
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}
*/

// #################################################//
// coding challenge #2
/*
let's continue with our football batting app!
1. Loop over the game,scored array and print each player name to the console,along with the goal number(Example:Goal 1:Lewandowski)
2. Use a loop to calculate the average odd and log it to the console(we already studied how to calculate average,you can check if you don't remember)
3. Print the 3 odds to the console,but in a nice formatted way, exactly like this:
    Odd of victory Bayern Munich:1.33
    odd of draw:3.25;
    odd of victory Borrussia Dortmund:.6.5

Get the  team names directly from the game objects, don't hardcode them(except for "draw") 
HINT:Note how the odds and the game objects have the same property names 😊.

Bonus:Create an objects called "scorers" which contains the names of the players who scored as properties, and the numbers of goals as the value. in this game, it will look like this:
{
  Gnarby:1,
  Hummels:1,
  Lewandowiski:2

}

*/
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Feb 1st,2023",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}:${player}`);
}
// 2 calculate average part
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
// console.log(average);
average /= odds.length;
console.log(average);

// 3
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}
*/

// ################################################//
// Sets
/*
1.A JavaScript Set is a collection of unique values.
2.Each value can only occur once in a Set.
3.A Set can hold any value of any data type.

// How to Create a Set
  (A) You can create a JavaScript Set by:

1.Passing an Array to new Set()
2.Create a new Set and use add() to add values
3Create a new Set and use add() to add variables
(B)The new Set() Method
Pass an Array to the new Set() constructor:
// Create a Set
const letters = new Set(["a","b","c"]);

*/
/*
const orderSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "Risotto",
  "pasta",
  "pizza",
]);
console.log(orderSet);

//  you can iterate string also
console.log(new Set("jonas"));

// find size of set = size()
console.log(orderSet.size);

// has():-Return true value if value exits
console.log(orderSet.has("pizza"));
console.log(orderSet.has("Bread"));

// add():- add new element
orderSet.add("garlic bread");
console.log(orderSet);

// delete():delete element from array
orderSet.delete("Risotto");
console.log(orderSet);

//  clear():when you can delete all element from array
// orderSet.clear();

for (const order of orderSet) {
  console.log(order);
}

// Example
const staff = ["waiter", "chef", "waiter", "Manager", "chef", "waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// find size
console.log(
  new Set(["waiter", "chef", "waiter", "Manager", "chef", "waiter"]).size
);

console.log(new Set("indrajeet").size);



*/
// ##################################//
// Maps
/*
1.A Map holds key-value pairs where the keys can be any datatype.
2.A Map remembers the original insertion order of the keys.
3.A Map has a property that represents the size of the map.
*/

// create map
// maps fundamental
/*
const restaurant = new Map();
restaurant.set("name", "Classico Italiano");
restaurant.set(1, "bokaro,jharkhand");
console.log(restaurant.set(2, "Lisbon, pourtgal"));

restaurant
  .set("categories", ["Italian", "Pizzeria", "vegetarian", "organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open:D")
  .set(false, "we are closed:C");
console.log(restaurant.get("name"));
console.log(restaurant.get(true));
console.log(restaurant.get(1));
// console.log(restaurant.get(2));

const time = 8;
console.log(
  restaurant.get(
    time > restaurant.get("open") && time < restaurant.get("close")
  )
);

console.log(restaurant.has("categories"));
restaurant.delete(2);
console.log(restaurant);
// console.log(restaurant.size);
// console.log(restaurant.clear);

const arr = [1, 2];
restaurant.set(arr, "Test");
restaurant.set(document.querySelector("h1"), "Heading");
console.log(restaurant);
console.log(restaurant.size);

console.log(restaurant.get(arr));
*/
// maps iteration
/*
const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHour = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0,
    // open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "classico Italianno",
  location: "via angelo Tavanti 23,Firenze,Italy",
  categories: ["Italian", "Bruschetta", "vegetarian", "organic"],
  staterMenu: ["facaccia", "Bruschetta", "Garlic Bread", "caprese Salad"],
  mainMenu: ["pizza", "pasta", "Risotto"],

  // ES6 enhanced objects literals
  openingHour,

  order(staterIndex, mainIndex) {
    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ staterIndex = 1, mainIndex = 0, time = 20.0, address }) {
    console.log(
      `order received! ${this.staterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Python"],
  [4, "JavaScript"],
  ["correct", 4],
  [true, "correct🎉"],
  [false, "Try again!"],
]);
console.log(question);

// convert object to map
console.log(Object.entries(openingHour));
const hourMap = new Map(Object.entries(openingHour));

console.log(hourMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer${key}:${value}`);
}
// const answer = Number(prompt("Your answer"));
const answer = 4;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// convert maps to array
console.log([...question]);
// console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());
*/

// coding challenge#3

/*
let's continue with our football betting app! This time, we have a map with a log of the events that happened  during the game.The values are the events themselves,and the keys are the minute in which each event happened(a football game has 90 minutes plus some extra time).

1. Create an array'events' of the different game events that happened(no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair, so remove this event from the game events log.
3. print the following String to the console: "An event happened, an average, every 9 minute"(keep in mind that a game has 90 minute)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half(after 45 min) of the game, like this:
[FIRST HALF] 17:⚽ GOAL
*/
/*
const gameEvents = new Map([
  [17, "⚽GOAL"],
  [36, "🔃Substitution"],
  [47, "⚽GOAL"],
  [61, "🔃Substitution"],
  [64, "🟨Yellow Card"],
  [69, "🟥Red card"],
  [70, "🔃Substitution"],
  [72, "🔃Substitution"],
  [76, "⚽GOAL"],
  [80, "⚽GOAL"],
  [92, "🟨Yellow Card"],
]);

// 1
// console.log(gameEvents.values());

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
gameEvents.delete(64);

// 3
console.log(
  `An event happened, an average, every ${90 / gameEvents.size} minute`
);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, an average, every ${time / gameEvents.size} minute`
);

// 4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "First" : "Second";
  console.log(`[${half} Half] $(min:${event})`);
}
*/
// #######################################################
//
// Working with String part-1
/*
const airline = "Tap Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

// slice method
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("you got the middle seat😍");
  } else {
    console.log("you got lucky 🎉");
  }
};
// B and C are middle seats
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));

console.log(typeof new String("jonas").slice(1));
*/

// Working with String part2 //
/*
const airline = "Tap Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix Capitalization in name
const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// check email,or comparing emails
const email = "hello@vijay.in";
const loginEmail = " Hello@vijay.in \n";

// converted into lowercase
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceUS = "288,97$";
const priceIn = priceUS.replace("$", "R").replace(",", ".");
console.log(priceIn);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23! ";
console.log(announcement.replace("door", "gate"));

// Regular expression
console.log(announcement.replace(/door/g, "gate"));

//Three simple method that return booleans
// These methods are includes start with and ends with

const plane = " Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Aib"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log("part of the new air bus");
// }

//practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  // const baggage = items;
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("you are NOT allowed on board");
  } else {
    console.log("Welcome aboard");
  }
};
checkBaggage("I have a laptop,so food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
*/

//  Working with string part3

// spilt method
console.log("a+very+nice+string".split("+"));
console.log("Indrajeet kumar nayak".split(" "));

const [firstName, lastName] = "indrajeet kumar".split(" ");
// console.log(firstName, lastName);

//join method
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

// capitalized name
const capitalizedName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // approach1
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // approach 2
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalizedName("jessica and smith davis");
capitalizedName("indrajeet kumar");

// padding  String
const message = "Go to gate 23";
console.log(message.padStart(25, "*").padEnd(30, "+"));
console.log("vijay".padStart(25, "+"));

// atm card
const maskCreditCard = function (number) {
  const str = number + " ";
  const last = str.slice(-5);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(12456790234567));
console.log(maskCreditCard("987654320987564312345"));

// Repeat method
const message2 = "Bad weather ... All Departures Delayed... ";
console.log(message2.repeat(5));
const planeInline = function (n) {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
};
planeInline(5);
planeInline(3);
planeInline(12);
