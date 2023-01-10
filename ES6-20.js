// tagged template literals


function modifier(strings, ...values) {

    console.log(strings);
    console.log(values);
    
    const m = strings.reduce((preValue, currentValue) => {
        return preValue + currentValue + (values.length ? "Mr. " + values.shift() : '');
    }, "");

    return m;
}

let player1 = "Summya Sarkar";
let player2 = "Mustafizur Rahman";
console.log(modifier`We have ${player1} and ${player2} in our cricket team`);



console.log("***********************************************************************");
// Another Example for practice

function modifier(s, ...v) {
    console.log(s);
    console.log(v);

    const ans = s.reduce((p, c) => {
        return p + c + (v.length ? v.shift()+" years old" : "");
    }, '');
    
    return ans;
}
let a = 5;
let b = 6;

console.log(modifier`I am ${a} and I am ${b}`);