let { Client, Message } = require("discord.js-selfbot-v13");
let { music } = require("../../main");

/**
 * @param {Client} client
 * @param {Message} msg
 */
exports.run = async (client, msg) => {
  let player = music.get(msg.guild.id);

  if (!player)
    return msg.channel.send(
      "Hier ist kein player für diesen server, starte ein wenig musik zu spielen."
    );

  if (
    !msg.member.voice.channel ||
    msg.member.voice.channel.id !== player.voiceChannel
  )
    return msg.channel.send(
      "Du bist in keinem voice channel, oder wir sind nicht im selben voice."
    );

  player.destroy();
  msg.channel.send(
    "Vielen Dank fürs hören mit Yuyu. :D\n See ya next time. c:"
  );
};
