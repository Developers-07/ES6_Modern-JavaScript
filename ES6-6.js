// array filter()

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let result = arr.filter((value, index, array) => {
    return value > 3;
}, this);
console.log(result); // it will return an array