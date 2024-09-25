const EventEmitter = require('events');
const myEvent = new EventEmitter();

// Listener Function

const greetBirthday = (name, newAge) => {
  // name = john
  // newAge = 24
  console.log(`Happy Birthday ${name}. You are now ${newAge}!`);
}

//Listening for the birthdayEvent
myEvent.on('birthdayEvent', greetBirthday);

// Emitting the birthdayEvent with some extra parameters
myEvent.emit('birthdayEvent', 'John', '24');
