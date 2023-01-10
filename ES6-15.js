// function default parameter value

function defaultParameter(x = 10) {
    return x;
}

console.log(defaultParameter());
console.log(defaultParameter(undefined));
console.log(defaultParameter(null));