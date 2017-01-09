exports.run = function(bot, message, args, status) {
    const audioFolder = './audio/';
    const rand = require('random-int')
    const fs = require('fs');
    const yt = require('ytdl-core');
    const req = require('../bot.js')

    function play(connection) {
        if (bot.channels.get(message.member.voiceChannelID)) { //is user in voice channel
            if (args.join()) { // is stream link provided
                if (args.join().startsWith('http')) { // is stream link a youtube link
                    if (req.status !== 'play') { // is there music already playing, if not then...
                        var ytLink = args.join().replace(",", " ");
                        var stream = yt(ytLink, {
                            audioonly: true
                        })
                        songName = 'custom YouTube Video ' + args.join()
                        exports.songName = songName
                        musicLog(songName)
                        bot.channels.get(message.member.voiceChannelID).join().then(connection => {
                          exConnection(connection)
                            dispatcher = connection.playStream(stream)
                                .once('start', () => {
                                  setStatus('play')
                                    exports.dispatcher = dispatcher
                                    dispatcher.setVolume(0.1);
                                })
                                .once('end', () => {
                                    if (req.status === 'play') {
                                        play(connection)
                                    }
                                })
                        })
                    } else { // there is a connection already
                        setStatus('stop')
                        const req = require('../bot.js')
                        dispatcher.end()
                        var ytLink = args.join().replace(",", " ");
                        var stream = yt(ytLink, {
                            audioonly: true
                        })
                        songName = 'custom YouTube Video ' + args.join()
                        exports.songName = songName
                        musicLog(songName)
                        dispatcher = req.connection.playStream(stream)
                            .once('start', () => {
                              setStatus('play')
                                exports.dispatcher = dispatcher
                                dispatcher.setVolume(0.1);
                            })
                            .once('end', () => {
                                if (req.status === 'play') {
                                    play(req.connection)
                                }
                            })
                    }
                } else { // bad link
                    message.channel.sendMessage('Could not find a valid stream. Be sure to provide a full youtube link');
                }
            } else { // normal play without stream
                if (req.status !== 'play') { // is there music already playing, if not then...
                    var audioFiles = fs.readdirSync(audioFolder)
                    var randomPlay = rand(0, audioFiles.length)
                    var songName = './audio/' + audioFiles[randomPlay]
                    bot.channels.get(message.member.voiceChannelID).join().then(connection => {
                        exConnection(connection)
                        exports.songName = songName.slice(8, -4)
                        musicLog(songName.slice(8, -4))
                        dispatcher = connection.playFile(songName)
                            .once('start', () => {
                              setStatus('play')
                                exports.dispatcher = dispatcher
                                dispatcher.setVolume(0.1)
                            })
                            .once('end', () => {
                                if (req.status === 'play') {
                                    play(connection)
                                }
                            })
                    })
                } else {
                    setStatus('stop')
                    const req = require('../bot.js')
                    dispatcher.end()
                    var audioFiles = fs.readdirSync(audioFolder)
                    var randomPlay = rand(0, audioFiles.length)
                    var songName = './audio/' + audioFiles[randomPlay]
                    exports.songName = songName.slice(8, -4)
                    musicLog(songName.slice(8, -4))
                    dispatcher = req.connection.playFile(songName)
                        .once('start', () => {
                          setStatus('play')
                            exports.dispatcher = dispatcher
                            dispatcher.setVolume(0.1);
                        })
                        .once('end', () => {
                            if (req.status === 'play') {
                                play(req.connection)
                            }
                        })
                }
            }
        } else { // not in voice channel
            message.channel.sendMessage('You are not in a voice channel. Join a voice channel and try ``0play`` again.');
        }
    }
    play()
}
