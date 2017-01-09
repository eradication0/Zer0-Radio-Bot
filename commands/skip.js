exports.run = function(bot, message, args) {
  const playJS = require('./play.js')
  playJS.dispatcher.end()
}
