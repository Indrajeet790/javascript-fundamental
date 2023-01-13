// FUNCTION IN JAVASCRIPT //

/*  function functionName(){
   //body}
*/

/*function looger() {
  console.log("my name is vijay");
}
// calling /running/invoking function
looger();

looger();

looger();
*/
// ########fruitprocesssor####### //
/*
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
/*
// ###########calculate age#########//

//function declaration
const age3 = calcAge3(1998);
function calcAge3(birthYear) {
  return 2037 - birthYear;
}

//function with name
function calcAge1(birthYear) {
  // const age = 2037-birthYear;
  return 2037 - birthYear;
}
const age1 = calcAge1(1998);
console.log(age1);

// function without name is called Anonymous function
//function expression // expresssion produce value
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1998); // expression
console.log(age2, age2);

// ########Arrow function ###########//
// one liner function
const calcAge4 = (birthYear) => 2037 - birthYear;
const age4 = calcAge3(1990);
console.log(age4);

// calculate retirement age
const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} year`;
};

console.log(yearUntilRetirement(1991, "vijay"));
console.log(yearUntilRetirement(1998, "sam"));
*/

//FUNCTION CALLING OTHER FUNCTION//
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
//revewing function//
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearUntilRetirement = function (birthYear, firstName) {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} year`);
    return retirement;
  } else {
    console.log(`${firstName} has already retire🎉`);
    return -1;
  }
};

console.log(yearUntilRetirement(1991, "jonas"));
console.log(yearUntilRetirement(1970, "mike"));
*/

/*
//  function chellange//

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//test case1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphin win 🏆(${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆(${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("no teams wins....");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(566, 123);

//Test 2//
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

/*
//####### Arrays using javascript ######//

// creating array
const friends1 = "Michel";
const friends2 = "Steven";
const friends3 = "peter";

const friends = ["Michel", "Steven", "Peter"];
console.log(friends);

//declaring an array
const year = new Array(1991, 1992, 1993, 2008);

// accessing an array
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

//replacing an array
friends[2] = "vijay";
console.log(friends);

//  An array which can hold all kinds of information

const firstName = "vijay";
const vijay = [firstName, "Gupta", 2023 - 1998, "teacher"];
console.log(vijay);
*/

/*
// Array exersize //

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

/*
// ###push function #####//
// add elements
const friends = ["michael", "stevan", "peter"];
const newLength = friends.push("jay");
console.log(friends);
console.log(newLength);

friends.unshift("jhon");
console.log(friends);

// Remove elements
friends.pop(); // no need of argument/
const popped = friends.pop(); // no need of argument/
// by default last element remove
console.log(popped);
console.log(friends);

friends.shift(); //first element remove in array
console.log(friends);

console.log(friends.indexOf("stevan"));
console.log(friends.indexOf("bob"));
// when element are not present in array
// then output is -1

//includes function
console.log(friends.includes("stevan"));
console.log(friends.includes("bob"));

if (friends.includes("stevan")) {
  console.log("yu have a friend called stevan");
}
*/

// coding challenge function //
/*
Stevan is still building his tip calculator,using the same rules as before:Tip 15% of the bill if the bill value is between 50 and 300,and if the value is different,the tip is 20%.

1.Write a function"calcTip" that takes any bill value as an input and returns the corresponding tip,calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). use the function type you like the Moost. Test the fuction using a bill value of 100.
2. And now let's use array! so create an array 'bills' containing the test data below.
3.create an array 'tips' containing the tip value for each bill,calculated from the function you created before.
4.Bonus:Create an array'totol' conating the total value, so the bill+tip.

Test Data:125 555 and 44



Hint:Reamber that  an array needs a value in each position and that value can actually be the returened value of a function so you can just call a function as array values(so don't store the tip values in sepprate variable first,but right in the new array);
*/
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = (bill) >=bill >= 50 && bill <= 300 ? bill * 0.15 * 0.2;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip([2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + bills[2]];

console.log(bills, tips, totals);
*/
/*
/////######object######////
const jonasArray = [
  "jonas",
  "gupta",
  2037 - 1998,
  "teacher",
  ["Michael", "peter", "stevan"],
];
*/
/*
//object is defined key vale parseInt
//(key:value)
const vijay = {
  firstName: "vijay",
  lastName: "gupta",
  age: 2023 - 1998,
  job: "student",
  firends: ["Michael", "Peter", "Steavan"],
};*/

// how to change javascript object with the help of  Dot Vs Bracket Notation
/*
const vijay = {
  firstName: "vijay",
  lastName: "gupta",
  age: 2023 - 1998,
  job: "student",
  friends: ["Michael", "Peter", "Steavan"],
};
console.log(vijay);

console.log(vijay.lastName);
console.log(vijay["lastName"]);

const nameKey = "Name";
console.log(vijay["first" + nameKey]);
console.log(vijay["last" + nameKey]);

// prompt function

const interestedIn = prompt(
  "What do you want to know about jonas? Choose between firstName,lastName,age,job,and friends"
);
console.log(vijay[interestedIn]);

if (vijay[interestedIn]) {
  console.log(vijay[interestedIn]);
} else {
  console.log(
    "wrong request!Choose between firstName,lastName,age,job,and friends"
  );
}
vijay.location = "gujrat";
vijay["facbook"] = "@indrajeet gupta";
console.log(vijay);

//challenge (dynamically)
//jonas has 3 friends and has best friend is called michael
console.log(
  `${vijay.firstName} has ${vijay.friends.length}, and his best friends is called ${vijay.friends[0]}`
);
*/

// ########object method/####/
/*
const vijay = {
  firstName: "vijay",
  lastName: "gupta",
  birthyear: 1998,
  job: "student",
  friends: ["Michael", "Peter", "Steavan"],
  hasDriverLicense: true,
*/
/* calcAge: function (birthyear) {
     return 2037 - birthyear;
   },*/
// calcAge: function () {
//   console.log(this);
//   return 2037 - this.birthyear;
// },
/*
  //create new property using (this)
  calcAge: function () {
    this.age = 2037 - this.birthyear;
    return this.age;
  },
};
*/

//console.log(vijay.calcAge()); //dot
//console.log(vijay.age);
//console.log(vijay["calcAge"](1998)); //bracket

//challenge
/* "jonas is a 46-year old teacher,abd he has a driver's
license"*/
/*
const vijay = {
  firstName: "vijay",
  lastName: "gupta",
  birthyear: 1998,
  job: "student",
  friends: ["Michael", "Peter", "Steavan"],
  hasDriverLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthyear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      vijay.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"},driver's license.`;
  },
};

console.log(vijay.calcAge()); //dot
console.log(vijay.age);

console.log(vijay.getSummary());
*/

//####challange#####//
/*
let's go back to mark and jhon comparing therir BMIS! This time,let's use objects to implements the calculations! remember:BMI=mass/height**2 =mass/(height*height).(mass in kg and height in meter)
1.for each of them,create an object with properties for their full name,mass, and height (Mark Miller and jhon smith)
2.Create a'calcBMI(the same method on both objects).
store the BMI value to a property,and also return it from the method.
3.Log to the console who has the higher BMI,together with the full name and the respective BMI.example:"jhon's BMI(28.3)" is higher than Mark's(23.9);
 
TEST DATA: Marks weight 78 kg and is 1.69m tall jhon weight 92kg and 1.95m tall.
*/
/*
 //solution of this challenge
const mark = {
  fullName: "Mark miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const smith = {
  fullName: "Jhon Smith",
  height: 1.95,
  mass: 92,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calcBMI();
smith.calcBMI();

console.log(mark.bmi, smith.bmi);

//"jhon's BMI(28.3)" is higher than Mark's(23.9);
if (mark.bmi > smith.bmi) {
  console.log(`${mark.fullName}'s BMI(${mark.bmi}) is higher than
  ${smith.fullName}'s BMI(${smith.bmi})`);
} else if (smith.bmi > mark.bmi) {
  console.log(`${smith.fullName}'s BMI(${smith.bmi}) is higher than
  ${mark.fullName}'s BMI(${mark.bmi})`);
}
*/

//#####iteration :The  for loop#######//

// console.log("Lifting weight repeition 1");
// // for loop keeps running while condtion is TRUE
// for(initial value;logical ConditionRule;increement/decrement);
/*for (let rep = 3; rep <= 10; rep = rep + 1) {
  console.log(`lifting weight  repetion ${rep}`);
}
*/

/*
//looping Array,Breaking and Countinuing
const vijay = [
  "vijay",
  "gupta",
  2023 - 1998,
  "student",
  ["Michael", "Peter", "Steavan"],
  true,
];


const types = [];
// console.log(vijay[0]);
// console.log(vijay[1]);
// ....
// console.log(vijay[4]);
// vijay 5 is not exit

for (let i = 0; i < vijay.length; i++) {
  //here reading from vijay array
  console.log(vijay[i], typeof vijay[i]);
  // fillng type array
  types[i] = typeof vijay[i];
  // another way to add
  types.push(typeof vijay[i]);
}

console.log(types);
*/
/*
//age problem
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
*/

//###continuing## Breaking//
/*
const vijay = [
  "vijay",
  "gupta",
  2023 - 1998,
  "student",
  ["Michael", "Peter", "Steavan"],
  true,
];
console.log("----ONLY STRING----");
for (let i = 0; i < vijay.length; i++) {
  if (typeof vijay[i] !== "string") continue;
  console.log(vijay[i], typeof vijay[i]);
}
console.log("----Break WITH NUMBER----");
for (let i = 0; i < vijay.length; i++) {
  if (typeof vijay[i] === "number") break;
  console.log(vijay[i], typeof vijay[i]);
}
*/

// Looping Backwards and Loops in Loops
/*
const vijay = [
  "vijay",
  "gupta",
  2023 - 1998,
  "student",
  ["Michael", "Peter", "Steavan"],
];
// 0,1,....4
//4,3,...0
for (let i = vijay.length - 1; i >= 0; i--) {
  console.log(vijay[i]);
}

//loop inside loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------starting exercise
  ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(` Exercise${exercise}  lifting weight repetaion ${rep}`);
  }
}
*/

//The while loop
//syntax
/*
initilize first
while(condition){
  console.log)();
}
*/
/*
let rep = 1;
while (rep < 10) {
  console.log(`Lfting weight repetation ${rep}`);
  rep++;
}
*/
//dice random number
//let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
/*
while (dice !== 6) {
  console.log(`You rooled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("loop is about end....");
  }
}
*/

// ##### DOM
