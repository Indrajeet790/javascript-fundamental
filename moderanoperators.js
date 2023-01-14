
// destructuring array
"use strict";

const restaurant = {
  name: "classico Italianno",
  location: "via angelo Tavanti 23,Firenze,Italy",
  categories: ["Italian", "Bruschetta", "vegetarian", "organic"],
  staterMenu: ["facaccia", "Bruschetta", "Garlic Bread", "caprese Salad"],
  mainMenu: ["pizza", "pasta", "Risotto"],
  order: function (staterIndex, mainIndex) {
    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring array
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, , second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
/*
//swaping method 1
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
*/

//method2
[main, secondary] = [secondary, main];
console.log(main, secondary);

// RECIEVE 2 return values from a function

const [starter, mainCource] = restaurant.order(2, 0);
console.log(starter, mainCource);

const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

