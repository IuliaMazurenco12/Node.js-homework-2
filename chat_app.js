
const EventEmitter = require('events');
const chat = new EventEmitter();

function sendMessage(username, message, emitter) {
  emitter.emit('message', username, message);
}

chat.on('message', (username, message) => {
  console.log(`${username}: ${message}`);
});


sendMessage('Анна', 'Привет всем!', chat);
sendMessage('Иван', 'Привет, Анна! Как дела?', chat);
