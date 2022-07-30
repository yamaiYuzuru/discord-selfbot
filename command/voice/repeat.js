let { Client, Message, MessageEmbed } = require("discord.js-selfbot-v13");
let { music } = require("../../main.js");

/**
 * @param {Client} client
 * @param {Message} msg
 * @param {String[]} args
 */
exports.run = async (client, msg, args) => {
  if (!msg.member.voice) return;

  let player = music.get(msg.guild.id);
  if (
    !player.queue.current ||
    player.state !== "CONNECTED" ||
    msg.member.voice.channel.id !== player.voiceChannel
  )
    if (
      !player.queue.current ||
      player.state !== "CONNECTED" ||
      msg.member.voice.channel !== player.voiceChannel
    )
      return msg.channel.send(
        "In der queue ist kein song, oder ich bin nicht in einem voice oder du bist nicht bei mir."
      );

  switch (args[0]) {
    case "queue":
      if (player.queueRepeat) {
        player.setQueueRepeat(false);
        await msg.channel.send("Warteschleife wird nicht mehr wiederholt.");
      } else {
        player.setQueueRepeat(true);
        await msg.channel.send("Warteschleife wird wiederholt.");
      }
      break;
    default:
      if (player.trackRepeat) {
        player.setTrackRepeat(false);
        await msg.channel.send("Stoppe die wiederholung des songs");
      } else {
        player.setTrackRepeat(true);
        await msg.channel.send("Wiederhole den jetztigen song.");
      }
      break;
  }
};
