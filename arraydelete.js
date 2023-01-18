/*
1.understand issue and solution with whiteboard.
2.make array,define the position.
3.use loop to delete element
4.Delete element with text input and button.
*/
/* javascript code
let data = [30, 20, 45, 76, 20, 80];
let position = 3;
for (let i = position; i < data.length - 1; i++) {
  // console.log(data[i]);
  data[i] = data[i + 1];
}
data.length = data.length - 1;
console.log(data);
*/

// dynamic code

function removeEl() {
  let data = [30, 20, 45, 76, 20, 80];
  let position = document.getElementById("position").value;
  // convert integer
  position = parseInt(position);
  for (let i = position; i < data.length - 1; i++) {
    // console.log(data[i]);
    data[i] = data[i + 1];
  }
  data.length = data.length - 1;
  console.log(data);
}
