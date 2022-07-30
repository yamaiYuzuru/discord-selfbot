let { Client, Message } = require("discord.js-selfbot-v13");
let { music } = require("../../main.js");

/**
 * @param {Client} client
 * @param {Message} msg
 */
exports.run = async (client, msg) => {
  if (!msg.member.voice) return;

  let player = music.get(msg.guild.id);
  if (
    !player.queue.current ||
    player.state !== "CONNECTED" ||
    msg.member.voice.channel !== player.voiceChannel
  )
    return msg.channel.send(
      "In der queue ist kein song, oder ich bin nicht in einem voice oder du bist nicht bei mir."
    );

  if (player.paused) {
    player.pause(false);
    await msg.channel.send(`Fortführe ${player.queue[0].title}`);
  } else {
    player.pause(true);
    await msg.channel.send("Angehalten.");
  }
};
