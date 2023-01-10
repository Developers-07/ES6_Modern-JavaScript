// array reduce()

let arr = [1, 2, 3, 4, 5];


let sum = arr.reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue+currentValue;
}, 10);

console.log(sum);