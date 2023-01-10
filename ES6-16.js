// spread operator

// for array
let arr = [1, 2, 3];
let ar = [10, 20, 30];

let a = [...arr, 4, 5];
console.log(a);

let array = [...arr, ...ar];
console.log(array);


// for object
let myObj1 = {
    x: 1,
    y:2,
}
let myObj2 = {
    a: 3,
    b: 4,
}

let newObj = {
    ...myObj1,
    ...myObj2
}
console.log(newObj);