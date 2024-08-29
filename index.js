const { Client, RemoteAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

const { MongoStore } = require('wwebjs-mongo');
const mongoose = require('mongoose');
const { default: axios } = require('axios');

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// Listening to all incoming messages
client.on('message_create', message => {
	console.log(message.body);
});

client.on('message_create', message => {
	if (message.body === 'Good morning') {
		client.sendMessage(message.from, 'Very Good morning');
	}
    if(message.body === "Hii")
    {
        message.reply("Hello");
    }
    

    

    
    

});




client.initialize();


