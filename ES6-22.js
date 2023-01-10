//  copyWithin(target, start, end) --> by default target required & start = 0, end = array.length


let a = ['C', 'C++', 'Java', 'Python', 'JavaScript', 'Php'];

a.copyWithin(5, 2, 3);
console.log(a);



let arr = ['A', 'B', 'C', 'X', 'Y', 'Z'];
arr.copyWithin(3, 2);
console.log(arr);

arr.copyWithin(6, 2, 3);
console.log(arr);


arr.copyWithin(3);
console.log(arr);

arr.copyWithin(-3, -1, -2);
console.log(arr);


let arr1 = ['A', 'B', 'C', 'X', 'Y', 'Z'];
arr1.copyWithin(-3, -2, -1);
console.log(arr1);



