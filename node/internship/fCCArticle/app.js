
try {
  // __dirname Global Variable
  console.log(__dirname);

  // __filename Global Variable
  console.log(__filename);
} catch (ex) {
  console.log(ex);
}

// Define  a global variable in NodeJS
global.myVariable = 'Hello World';
// Access the global variable
console.log(myVariable);

// importing module
const sayHello = require('./hello.js');
// sayHello function is definded in hello.js
sayHello('john');
sayHello('Peter');
sayHello('Rohit');


