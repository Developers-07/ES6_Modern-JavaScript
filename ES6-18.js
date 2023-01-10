// destructuring

// for object

let user = {
    id: 449,
    name: 'Zishan',
    age: 23,
    education: {
        dept: 'CSE',
        inst: 'DIU',
        addr: {
            city: 'Satkhira',
        }
    },
};

let { name } = user;
console.log(name);

let { age: old } = user;
console.log(old);

const { education : {dept} } = user;
console.log(dept);

const { education: { addr: { city: x} } } = user;
console.log(x);


// for array

let arr = [1, 2, 3, [10, 20, 30], 4, 5];

const [, a, , [,c,],] = arr;
console.log(a, c);


// swap using destructuring

let p = 2;
let q = 3;

[q, p] = [p, q];
console.log(p, q);