exports.run = function(bot, message, args) {
  var currentVoice = bot.channels.get("260885677066027019")
  currentVoice.join()
  .then(connection => {
   const dispatcher = connection.playFile('C:/Users/Dominator/Documents/GitHub/zero-radio/audio/sanic.mp3');
  })
}
