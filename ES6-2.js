// truthy, falsy

// falsy value --> false, 0, null, NaN, "", undefined
// truthy vlaue --> rest of the things are truthy value

let v = NaN;
if (v) {
    console.log('I am truthy');
}
else {
    console.log('I am falsy');
}