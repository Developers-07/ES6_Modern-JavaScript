// import & export


import { pi, a as val } from './home.js'; // named import
console.log(pi, val);

import * as test from './home.js';
console.log(test);
console.log(test.a);



import zishan, {c} from './home.js'; // default import, default will be only one
console.log(zishan, c);

// function import

import { myFunc } from './home.js'; 
myFunc();