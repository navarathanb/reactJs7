class parent{
    disp(){
        console.log("This is parent");
    }
}

class child extends parent{
    
    disp(){
        super.disp();
        console.log("This is child");
    }
}

var obj = new child();
obj.disp();