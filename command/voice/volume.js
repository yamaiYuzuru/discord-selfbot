let { Client, Message } = require("discord.js-selfbot-v13");
let { music } = require("../../main");

/**
 * @param {Client} client
 * @param {Message} msg
 * @param {String[]} args
 */
exports.run = async (client, msg, args) => {
  let player = music.get(msg.guild.id);

  if (!player)
    return msg.channel.send(
      "Hier ist kein player für diesen server, starte und spiele ein paar songs."
    );
  if (!args[0])
    return msg.channel.send(
      `Die jetztige lautstärke liegt bei ${player.volume}%.`
    );

  if (
    !msg.member.voice.channel ||
    msg.activity.voice.channel.id !== player.voiceChannel
  )
    return msg.channel.send(
      "Du bist in keinem voice channel, oder wir sind nicht im selben voice."
    );

  let volume = Number(args[0]);

  if (!volume || volume < 1 || volume > 100)
    return msg.channel.send("Du musst mir eine Zahl zwischen 1 und 100 geben.");

  player.setVolume(volume);
  msg.reply(`Die lautstärke beträgt nun ${volume}%.`);
};
