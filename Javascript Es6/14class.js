// class : Blue print of an object
class parent {
    constructor(name2, id){
        this.name = name2;
        this.id = id;
    }
    disp(){
        console.log("My name is "+this.name);
        console.log("My id is "+this.id);
    }
}

var obj = new parent('james',100);
obj.disp();


// function parent(id){
//     this.name = "james";
//     this.id = id;
//     this.disp = function(){
//         console.log("my name"+this.name)
// }
// }
// var obj = new parent(100);
// obj.name;
// obj.id;