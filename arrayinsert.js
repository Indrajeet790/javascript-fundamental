/* 1.understand issue and solution with whiteboard.
2.make array,define the position
3.use loop to insert new element
4.insert element with text input and button
5.insert  element with by default function
*/
/*
let data = [60, 30, 10, 67, 40];
let newEl = 70;
let position = 2;
console.warn(data);
for (let i = data.length - 1; i >= 0; i--) {
  // console.log(data[i]);
  if (i >= position) {
    data[i + 1] = data[i];
    if (i === position) {
      data[i] = newEl;
    }
  }
}
console.warn(data);
*/
// dynamic program
function insertEl() {
  let data = [60, 30, 10, 67, 40];
  let newEl = document.getElementById("newEl").value;
  newEl = parseInt(newEl);
  let position = document.getElementById("position").value;
  console.warn(data);
  for (let i = data.length - 1; i >= 0; i--) {
    // console.log(data[i]);
    if (i >= position) {
      data[i + 1] = data[i];
      if (i == position) {
        data[i] = newEl;
      }
    }
  }
  console.warn(data);
}
