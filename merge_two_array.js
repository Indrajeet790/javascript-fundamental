//
/* understand case and solution with whiteboard
1.make three array
 2.use 2 Different loop to merge element
3.shortcut for reverse array element (Default Function)
4.shortcut for merge array(Default Function)
*/

let data = [3, 7, 12, 34, 56, 90];
let data2 = [20, 30, 40, 50];
let data3 = [];
for (i = 0; i < data.length; i++) {
  // data3.push()
  data3[i] = data[i];
}
for (i = 0; i < data2.length; i++) {
  data3[data.length + i] = data2[i];
}
console.log(data3);

/*
// reverse shortcut
let dummy = [10, 20, 30, 40];
// dummy.reverse()
*/

// merge two array shortcut
/*
let dummy = [10, 20, 30, 40];
let dummy2 = [200, 300, 400];
let dummy3 = [...dummy, ...dummy2];
dummy3();
*/
