const EventEmitter = require('events');
const myEmitter = new EventEmitter();

//Listener Function 1 - sayHi
const sayHi = () => {
  console.log('Hi User');
}

// Listener Function 2 - sayHello
const sayHello = () => {
  console.log('Hello User');
}

// Registering sayHi function as listener
myEmitter.on('userJoined', sayHi);

// Emitting the event
myEmitter.emit('userJoined');

// Registering sayHello function as listener
 myEmitter.on('userJoined', sayHello);
