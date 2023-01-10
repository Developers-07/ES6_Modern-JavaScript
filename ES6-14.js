// important Object Method

let x = 5;
let y = 6;
let z = x * y;
let myObject = {
    name: 'JavaScript',
    dis: '1995',
    inv: 'Brendan Eich',
    rank: 1,
    x,
    y,
    z,
}

let keys = Object.keys(myObject);
let values = Object.values(myObject);
let entries = Object.entries(myObject);

console.log(keys);
console.log(values);
console.log(entries);
