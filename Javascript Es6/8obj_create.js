var data = {name:"james", email:"james@gmail.com"};
// console.log(data.name);
data.name = "Kumar";
var data2 = Object.create(data);
data2.name = "james";
console.log(data.name);//kumar
console.log(data2.name);//james


