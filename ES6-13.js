// for, for in, for of

let arr = [1, 2, 3, 4, 5];

// for loop
for (let i = 0; i < arr.length; i++) {
    console.log(i + " => " + arr[i]);
}

console.log();

// for in loop
for (let num in arr) {
    console.log(num + " --> " + arr[num]);
}

console.log();

// for of loop
for (let val of arr) {
    console.log("Value = "+ val);
}