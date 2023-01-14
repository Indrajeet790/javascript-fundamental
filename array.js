// Array traversing and accessing
let data = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];
/*
// Traversing with loop
//for (let i = 0; i < data.length; i++) {
  console.log(` Array${i} is ${data[i]}`);
}

*/
// access element with text input and button
// let x = 1;
// console.log(data[x]);
// validation
function getElement() {
  let ele = document.getElementById("element").value;
  if (ele < data.length && typeof parseInt(ele) === "number") {
    alert(data[ele]);
  } else {
    alert("please enter valid input");
  }
}
