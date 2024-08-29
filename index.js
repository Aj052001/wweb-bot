const { Client, RemoteAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

const { MongoStore } = require('wwebjs-mongo');
const mongoose = require('mongoose');

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// Listening to all incoming messages
client.on('message_create', message => {
	console.log(message.body);
});

client.on('message_create', message => {
	if (message.body === '!ping') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'pong');
	}
    if (message.body === 'hii') {
		// send back "pong" to the chat the message was sent in
		message.reply("hello");
	}

});




client.initialize();

