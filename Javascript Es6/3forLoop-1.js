// for(var i=0;i<5;i++){
//     console.log(i);
// }

// let obj = {name:"James",email: "james@gmail.com",mobile:23432423};
// for(let prop in obj){ //loop through object properties
//     console.log(obj[prop]);
// }

// let arr = ["james","vimal","suresh"];
// for(let val of arr){//loop through array of vallues
//     console.log(val);
// }

let arr = [{name:"James",email: "james@gmail.com",mobile:23432423},{name:"James",email: "james@gmail.com",mobile:23432423},{name:"James",email: "james@gmail.com",mobile:23432423}];
for(let val of arr){//loop through array of objects
    console.log(val.name + val.email+val.mobile);
}
