// array findIndex()

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let res = arr.findIndex(function (value, index, array) {
    return value % 4 === 0;
});
console.log(res); // it will return the index number


// find out an specific value is in this array or not

let a = [2, 4, 6, 7, 9];
let value = 9;
let ans = a.findIndex(function (v, i, ar) {
    return v === value;
});
if (ans === -1) {
    console.log('NO');
}
else {
    console.log('YES');
}

