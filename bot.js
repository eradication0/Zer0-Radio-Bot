console.log('<== STARTING MODULAR BOT ==>');

// Loading Requirements
const discord = require('discord.js')
const settings = require('./settings.json')
const fs = require('fs')
const bot = new discord.Client()

console.log('Setup √')

bot.on('message', (message) => {
<<<<<<< HEAD
	if (message.author.id === bot.user.id) return
	if (!message.content.startsWith(settings.prefix)) return
	const args = message.content.split(' ')
	const command = args.shift().slice(settings.prefix.length)
		try {
			let cmdFile = require('./commands/' + command)
			cmdFile.run(bot, message, args)
		} catch (e) {
			console.log(e + '\n')
=======
	if (message.author.id === bot.user.id) return // Bot should not listen to himself
	if (!message.content.startsWith(cred.prefix)) return // Bot only executes command if the right prefix is used
	const args = message.content.split(' '); // Splits message parts into arguments
	const command = args.shift().slice(cred.prefix.length); // Deletes the prefix in the command variable
	try {
		let cmdFile = require('./commands/' + command); // requires all files in the commands folder
		cmdFile.run(bot, message, args); // Runs the command
	} catch (e) {
		console.log(e + '\n'); // Occuring errors will be stored in the log.txt
>>>>>>> origin/master
	}
})

console.log('Commands loaded √')

bot.on('ready', () => {
    console.log('<== BOT ONLINE ==>')
})

bot.login(settings.bottoken)
