let set = new Set(['james','vimal','kishore','james']);
for( let data of set){
    console.log(data);
}

let arr = [...set];
console.log(arr);

let arr2 = [1,2,3,4,5,6,3,4,7,8,9];
let uniqArr = [...new Set(arr2)];
console.log(uniqArr);