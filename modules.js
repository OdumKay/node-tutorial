// Modules
const names = require('./modules-example2');
const sayHi = require('./modules-example1');
const data = require('./modules-example4')
require('./modules-example3');
console.log(data)


sayHi('mary')
sayHi(names.john);
sayHi(names.peter);

// TYPES OF MODULES
// OS
// PATH
// FS
// HTTP
