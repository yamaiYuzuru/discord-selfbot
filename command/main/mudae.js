let { Client, Message } = require("discord.js-selfbot-v13");

/**
 * @param {Client} client
 * @param {Message} msg
 */
exports.run = async (client, msg) => {
  for (let i = 0; i < 8; i++) {
    msg.channel.send("$wa");
  }
};
