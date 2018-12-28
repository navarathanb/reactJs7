var name = "James is my friend";
var link = ["http://www.google.com","test.html"];
var str = "James";
console.log(name.slice(2,6));
console.log(name.length);


console.log(name.startsWith('James',0));
console.log(name.endsWith('friend'));

for(i=0;i<link.length;i++){
   if(link[i].endsWith('.html')){
       console.log(i);
   }
}

console.log(name.includes('is',10));
//templates
console.log(name);
console.log(`<h2>My name is str</h2>`);