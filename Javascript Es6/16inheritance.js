class parent{
    constructor(name){
        this.name = name;
    }
    getRec(){
        console.log("This is parent");
    }
}

class child extends parent {
  disp(){
    console.log("my name is "+this.name); 
  }
}

var obj = new child('james');

obj.disp();
obj.getRec();