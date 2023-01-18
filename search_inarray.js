// search element in array
/*
1.understand case and solution with whiteboard
2.make array.
3.use loop to search element.
4.search element with input  and button.
5.shortcut for search element (Default Function).
6.shortcut for delete element(Default function)
*/ /*
let data = [20, 40, 60, 5, 10, 70, 80, 99];
let item = 70;
let index = undefined;
for (let i = 0; i < data.length; i++) {
  // console.log(data[i]);
  if (data[i] === item) {
    index = i;
    break;
  }
}
console.warn(index);
*/
// by default function
// console.warn(data.indexOf(item));

function SearchElement() {
  let data = [20, 40, 60, 5, 10, 70, 80, 99];
  let item = document.getElementById("searchEl").value;
  let index = undefined;
  for (let i = 0; i <= data.length - 1; i++) {
    // console.log(data[i]);
    if (data[i] === parseInt(item)) {
      index = i;
      break;
    }
  }
  console.log(index);
}
