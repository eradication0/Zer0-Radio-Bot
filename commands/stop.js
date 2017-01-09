exports.run = function(bot, message, args, status) {
    const playJS = require('./play.js')
    if (status === 'play') {
            setStatus('stop')
          playJS.dispatcher.end()
    } else {
      message.channel.sendMessage('Current status: ' + status)
    }
    bot.channels.get(message.member.voiceChannelID).leave()
}
