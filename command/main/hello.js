let { Client, Message } = require("discord.js-selfbot-v13");

exports.run = async (client, msg, args) => {
  msg.channel.send("Hallo!");
};

exports.info = {
  aliases: ["hallo", "hi"],
};
