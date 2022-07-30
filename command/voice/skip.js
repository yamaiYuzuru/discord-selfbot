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
      "Hier ist kein player vorhanden, starte musik zu spielen."
    );

  if (
    !msg.member.voice.channel ||
    msg.member.voice.channel.id !== player.voiceChannel
  )
    return msg.channel.send(
      "Du bist in keinem voice channel, oder du bist nicht im selben mit mir."
    );

  let { title } = player.queue.current;

  player.stop();
  msg.channel.send(`${title} wurde übersprungen.`);
};
