var arr = ["james","vimal","kumar"];
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

var arr = new Array("james","vimal","kumar");
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.forEach(function(val,ind,array){
    console.log(val);
})