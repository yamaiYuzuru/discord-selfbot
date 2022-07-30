let { Client, Message } = require("discord.js-selfbot-v13");

/**
 * @param {Client} client
 * @param {Message} msg
 * @param {String[]} args
 */
exports.run = async (client, msg, args) => {
  if (!args[0]) msg.channel.send("Bitte gebe mir einen invite code.");

  (await client.fetchInvite(args[0])).acceptInvite(true);
};
