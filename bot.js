console.log('<== STARTING MODULAR BOT ==>');

// Loading Requirements
const discord = require('discord.js')
const settings = require('./settings.json')
const fs = require('fs')
const randHex = require('random-hex-color')
const yt = require('ytdl-core');
const bot = new discord.Client()
var connection = '';

// Global Vars
var dispatcher = ''
var status = '' //stop, play, pause

// Functions
setStatus = (e, connection) => {
    status = e
    exports.status = status
    console.log('i m status: ' + status)
}

exConnection = (connection) => {
  exports.connection = connection
}

musicLog = (songName) => {
        const discord = require('discord.js')
        const embed = new discord.RichEmbed()
            .setAuthor('S0ng L0g!', 'https://cdn.discordapp.com/attachments/220845173150711808/267256528656924672/eJwNylEOwiAMANC7cABKm1LS3aYrmc6oI4D-LLu7vu93hk9_hiXc52xjAfD6jnUffvRqrUU_XmBfm9YHkKSinLMQMrIiISQUlZQyymqG4oV4_TfVsm3spPHRbuH6AS3iHWM.jpg')
            .setTitle(songName)
						.setColor(randHex())
        bot.channels.get('267389276927295509').sendEmbed(embed)
        bot.user.setGame(songName)
    }

console.log('Setup √')

// Listeners
bot.on('message', (message) => {
    if (message.author.id === bot.user.id) return
		const args = message.content.split(' ')
		const command = args.shift().slice(settings.prefix.length)
    if (message.isMentioned(bot.user.id)) {
        message.channel.sendMessage('You mentioned me, try the ``0help`` command for all commands')
    }
    if (message.content.startsWith('0eval') && message.author.id === '64438454750031872') {
        try {
            const com = eval(message.content.split(" ").slice(1).join(" "))
            message.channel.sendMessage('```\n' + com + '```')
        } catch (e) {
            message.channel.sendMessage('```\n' + e + '```')
        }
    }
    if (!message.content.startsWith(settings.prefix)) return

    try {
        let cmdFile = require('./commands/' + command)
        cmdFile.run(bot, message, args, status)
        return
    } catch (e) {
        console.log(e + '\n')
    }
})

bot.on('ready', () => {
    console.log('<== BOT ONLINE ==>')
    bot.user.setGame("ESWING")
})

//Export Variables
exports.dispatcher = dispatcher
exports.connection = connection

console.log('Commands loaded √')

//Login
bot.login(settings.bottoken)
