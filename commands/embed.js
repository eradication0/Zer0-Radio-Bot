exports.run = function(bot, message, args) {
    const discord = require('discord.js')
    const embed = new discord.RichEmbed()
	.setThumbnail('https://cdn.discordapp.com/attachments/217945572487856128/250657572447715328/Overswiss.png')
	.setAuthor('OverSwissBot', 'https://cdn.discordapp.com/attachments/223447405478150144/266918526818713600/avatar3.png')
	.setTitle('Very Nice Title')
	.setDescription('The text of the body, essentially')
	.setURL('https://discord.js.org/#/docs/main/indev/class/RichEmbed')
	.setColor('#CA4746')

	.addField('Titel', 'Feld')
	.addField('Titel2', 'Feld2')
	.addField(':thinking:', ':thinking:')

	//.setImage('https://goo.gl/D3uKk2')
	.setFooter('Bot by Zer0', 'https://cdn.discordapp.com/attachments/223447405478150144/266919185764843520/avatar5.png')
	.setTimestamp()
	message.channel.sendEmbed(embed)
}
