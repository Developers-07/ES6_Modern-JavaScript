// fat arrow function

// simple function

function add() {
    return 10;
}
console.log(add());

// arrow function
var add = () => {
    return 10;
};
console.log(add());

// no need to write 'return'
var add = (a, b) => a+b;
console.log(add(10, 5));


// object and this keyword
let javascript = {
    name: 'javascript',
    lrb: ['react', 'vue', 'angular'],
    fun: function () {
        this.lrb.forEach((a) => {
            console.log(this.name + ' loves ' + a);
        });
    }
}
javascript.fun();

