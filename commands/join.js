exports.run = function(bot, message, args) {
	if (bot.channels.get(message.member.voiceChannelID)) {
		bot.channels.get(message.member.voiceChannelID).join()
	} else {
		message.channel.sendMessage('You are not in a voice channel. Join a voice channel and try ``0join`` again.');
	}
}
