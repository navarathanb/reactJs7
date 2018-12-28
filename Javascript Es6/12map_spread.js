let map = new Map([
    [1, 'james'],
    [2, 'vimal'],
    [3, 'kishore']
]);

let arr = [...map.keys()];//...obj => spread operator
console.log(arr);
