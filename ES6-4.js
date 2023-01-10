// array find()

// let arr = [1, 2, 3, 4, 5];
// let res = arr.find( function(value, index, array) {
//     return value === 3;
// }, this);
// console.log(res); // it will return the value 

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log('Hello Zishan');
    }
    exampleFunction() {
        let ar = [1, 2, 3];
        ar.find((value, index, array) => { 
            this.test();
        });
    }

}
let firstPerson = new Person("Zishan", 23);
console.log(firstPerson.name);

firstPerson.exampleFunction();