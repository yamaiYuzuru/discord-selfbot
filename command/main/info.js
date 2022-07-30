let { Client, Message, MessageEmbed } = require("discord.js-selfbot-v13");

/**
 * @param {Client} client
 * @param {Message} msg
 * @param {String[]} args
 */
exports.run = async (client, msg, args) => {
  let embed = new MessageEmbed().setTitle(
    "Informationen über %user%".replace("%user%", client.user.username)
  );

  msg.channel.send("Lade alle Daten...").then((m) => {
    embed.addField("Username", client.user.username);
    embed.addField();
  });
};
