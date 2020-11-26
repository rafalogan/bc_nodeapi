const EventEmmiter = require('events');

class MyEmmiter extends EventEmmiter {

}

const myEmmiter  = new MyEmmiter();
const eventName = 'user:click';

myEmmiter.on(eventName, click => {
	console.log('um usuário clicou', click);
})

// myEmmiter.emit(eventName, 'na barra de rolagem');
// myEmmiter.emit(eventName, 'no ok');
//
// let count = 0;
// setInterval(() => myEmmiter.emit(eventName, 'no ok ' + count++), 1000);

const stdin = process.openStdin();
stdin.addListener('data', value => console.log(`Você digitou: ${value.toString().trim()}`))
