exports.run = function(bot, message, args) {
          const discord = require('discord.js')
          const randHex = require('random-hex-color')
          const playJS = require('./play.js')
          const embed = new discord.RichEmbed()
              .setAuthor('S0ng L0g!', 'https://cdn.discordapp.com/attachments/220845173150711808/267256528656924672/eJwNylEOwiAMANC7cABKm1LS3aYrmc6oI4D-LLu7vu93hk9_hiXc52xjAfD6jnUffvRqrUU_XmBfm9YHkKSinLMQMrIiISQUlZQyymqG4oV4_TfVsm3spPHRbuH6AS3iHWM.jpg')
              .setTitle(playJS.songName)
  						.setColor(randHex())
              .setFooter('Bot by Zer0#3302', 'https://cdn.discordapp.com/attachments/223447405478150144/266919185764843520/avatar5.png')
              .setTimestamp()
          message.channel.sendEmbed(embed)
      }
