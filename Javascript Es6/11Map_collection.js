let map = new Map();
// var arr = new Array("james","vimal","kishore");

map.set('a','james');
map.set('b','vimal');
map.set('c','kishore');

console.log(map.get('a')); // to get the value using key
console.log(map.has('a')); //to test key available or not
console.log(map.delete('a')); // to delete value of key a
console.log(map.get('a'));//no key 'a' so it is undefined
map.set('a','Patrik');
console.log(map.size); // to find the number of values
console.log(map.get('a'));
map.clear();//to clear the entire map
console.log(map.size);

