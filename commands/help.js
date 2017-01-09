exports.run = function(bot, message, args) {
    const fs = require('fs')
    var files = fs.readdirSync('./commands/')
    const discord = require('discord.js')
    const randHex = require('random-hex-color')
    const embed = new discord.RichEmbed()
    .setAuthor('Help!', 'https://cdn.discordapp.com/attachments/220845173150711808/267256528656924672/eJwNylEOwiAMANC7cABKm1LS3aYrmc6oI4D-LLu7vu93hk9_hiXc52xjAfD6jnUffvRqrUU_XmBfm9YHkKSinLMQMrIiISQUlZQyymqG4oV4_TfVsm3spPHRbuH6AS3iHWM.jpg')
    .setDescription('This is the auto generated help command!')
    .setColor(randHex())
    .setFooter('Bot by Zer0#3302', 'https://cdn.discordapp.com/attachments/223447405478150144/266919185764843520/avatar5.png')
    .setTimestamp()
    for (var i in files) {
        embed.addField('0' + files[i].slice(0, -3), '\u200b', true)
    }
    message.channel.sendEmbed(embed)
}
