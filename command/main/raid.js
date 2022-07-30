let { Client, Message } = require("discord.js-selfbot-v13");

/**
 * @param {Client} client
 * @param {Message} msg
 */
exports.run = async (client, msg) => {
  let i = setInterval(() => {
    msg.channel.send("@everyone @here https://discord.gg/sakuratree");
  }, 10);

  setTimeout(() => {
    clearInterval(i);
  }, 300000);
};
