let map1 = new Map([
    [1,'james'],
    [2, 'kumar'],
    [3, 'vimal'],
    [4, 'patrik']
]);

for(let key of map1.keys()){
    console.log(key);
}
for(let val of map1.values()){
    console.log(val);
}

for(let data of map1.entries()){
    console.log(data[0]+' , '+data[1]);
}
for(let [key,val] of map1.entries()){
    console.log(key + ' - ' + val);
}
for(let [key, value] of map1){
    console.log(key,value);
}