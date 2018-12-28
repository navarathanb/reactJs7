class gParent { 
    constructor(val){
        this.property = val;
    }
    dispGparent(){
        console.log("grand parent property "+ this.property);
    }
}
class parent extends gParent{
    dispParent(){
        console.log("father property "+this.property);
    }
}
class child extends parent{
    dispChild(){
        console.log("My property "+this.property);
    }
}

var obj = new child('2000$');
obj.dispGparent();
obj.dispParent();
obj.dispChild();