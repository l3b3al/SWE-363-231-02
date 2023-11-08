const EventEmitter = require('events');
class CustomEventEmitter extends EventEmitter {}
const customEmitter = new CustomEventEmitter();
module.exports = customEmitter;

function simulateUserLogin(userId) {
  const randomDelay = Math.random() * 1.9 + 0.1;
  setTimeout(() => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${timestamp}: USER_${userId} logged in`);
    customEmitter.emit('userLoggedIn', userId);
  }, randomDelay * 1000);
}

function simulateUserLogout(userId) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp}: USER_${userId} logged out`);
  customEmitter.emit('userLoggedOut', userId);
}

customEmitter.on('userLoggedIn', (userId) => {
  console.log(`Welcome, USER_${userId}!`);
});

customEmitter.on('userLoggedOut', (userId) => {
  console.log(`Goodbye, USER_${userId}!`);
});

setInterval(() => {
  const userId = Math.floor(Math.random() * 10000);
  simulateUserLogin(userId);
}, 10000);

setTimeout(() => {
  setInterval(() => {
    const userId = Math.floor(Math.random() * 1000);
    simulateUserLogout(userId);
  }, 10000);
}, 15000);
