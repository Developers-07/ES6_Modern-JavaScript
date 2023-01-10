// rest operator

function myFunc(a, ...para) {
    console.log(a);
    console.log(para);
    console.log(arguments);
}
myFunc(1, 2, 3, 4, 5);

