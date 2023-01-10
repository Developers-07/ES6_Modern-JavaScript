// set ---> add(), has(), delete(), clear(), size

let mySet = new Set();

mySet.add(5);
mySet.add('Zishan');
mySet.add('Bangladesh');

console.log(mySet);
console.log(mySet.has('Zishan'));
console.log(mySet.has(7));

console.log(mySet.size);
mySet.delete('Zishan');
console.log(mySet.size);
console.log(mySet);
mySet.clear();
console.log(mySet);


// Another trick

let mySet1 = new Set();
mySet1.add('Zishan').add(97).add('Abir').add(90).add('Razib').delete('Razib');
console.log(mySet1);


// Array to set. In set we can pass any iterable. and set is also an iterable

let arr = [1, 2, 3, 4, 5];
let set = new Set(arr);
let set1 = new Set('Bangladesh');
console.log(set1);
console.log(set);

for (let value of set) {
    console.log(value);
}


// set to array

let setToArray = [...set];
console.log(setToArray);


// print unique value

let a = [1, 2, 3, 3, 3, 5, 5, 4];
console.log(new Set(a)); // array to set
console.log([...new Set(a)]); // set to array


// find out Union set

let s1 = new Set([1, 2, 3]);
let s2 = new Set([4, 3, 2]);

let unions = new Set([...s1, ...s2]);
console.log(unions);


// find out intersection set


let intersection = new Set([...s1].filter((x) => s2.has(x)));
console.log(intersection);



// find out difference set

// for s1 to s2
let difference = new Set([...s1].filter((x) => !s2.has(x)));
console.log(difference);

// for s2 to s1

let difference1 = new Set([...s2].filter((x) => !s1.has(x)));
console.log(difference1);



// Weak Set

let wc = new WeakSet([{ x: 7 }, { y: 5 }, { z: 9 }]);
console.log(wc);
wc.add({ a: 3 }); // it will take only object
wc.add({ b: 2 });
wc.add({ c: 1 });
console.log(wc);




