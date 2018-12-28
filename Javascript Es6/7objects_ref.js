// var val = 4;
// var val2 = val++;
//op: val = 5;
//op: val2 = 4;

var val = {i:4};
var val2 = Object.assign(val);
val2.i++;
console.log(val);
console.log(val2);