let { Client, Message } = require("discord.js-selfbot-v13");

/**
 * @param {Client} client
 * @param {Message} msg
 * @param {String[]} args
 */
exports.run = async (client, msg, args) => {
  switch (args[0]) {
    case "169":
      msg.channel.send("https://tenor.com/view/bills-rule-gif-23720828");
  }
};
