let { Client, Message } = require("discord.js-selfbot-v13");

/**
 *
 * @param {Client} client The discord client
 * @param {Message} msg
 * @param {String[]} args
 */
exports.run = async (client, msg, args) => {
  msg.channel.send("Guten Morgen!");
};
