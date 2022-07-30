let { Client, Message, MessageEmbed } = require("discord.js-selfbot-v13");
let puppy = require("random-puppy");
/**
 * @param {Client} client
 * @param {Message} msg
 * @param {String[]} args
 */
exports.run = async (client, msg, args) => {
  await puppy("memes").then((url) => {
    msg.channel.send(url);
  });
};
