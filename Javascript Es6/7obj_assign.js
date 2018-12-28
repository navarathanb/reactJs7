var data = {
    name : "james",
    email : "james@gmail.com"
}
var data2  = {
    mobile : 324342,
    id : 234
}

var obj = Object.assign(data,data2);
console.log(obj);
for(var val in obj){
    console.log(obj[val]);
}