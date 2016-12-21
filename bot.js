console.log('<== STARTING MODULAR BOT ==>');

// Loading Requirements
const discord = require('discord.js')
const settings = require('./settings.json')
const fs = require('fs')
const bot = new discord.Client()

console.log('Setup √')

bot.on('message', (message) => {
	if (message.author.id === bot.user.id) return
	if (!message.content.startsWith(settings.prefix)) return
	const args = message.content.split(' ')
	const command = args.shift().slice(settings.prefix.length)
		try {
			let cmdFile = require('./commands/' + command)
			cmdFile.run(bot, message, args)
		} catch (e) {
			console.log(e + '\n')
	}

	if (message.content.startsWith('0eval') && message.author.id === '64438454750031872') {
		try {
			const com = eval(message.content.split(" ").slice(1).join(" "))
			message.channel.sendMessage('```\n' + com + '```')
		} catch (e) {
			message.channel.sendMessage('```\n' + e + '```')
		}
	}
})

console.log('Commands loaded √')

bot.on('ready', () => {
    console.log('<== BOT ONLINE ==>')
})

bot.login(settings.bottoken)
