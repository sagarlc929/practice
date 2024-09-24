// module.js

function myFunction(){
  console.log('Hello from myFunction!');
}

function myFunction(){
  console.log('Hello from myFunction2!);
}
/*
// First Export
module.exports = myFunction;

// Second Export
module.exports = myFunction2;
*/
// module.exports to an object which contains all the functions we
// want to export

module.exports = {
  foo: 'bar',
  myFunction1: myFunction1,
  myFunction2: myFunction2
};
