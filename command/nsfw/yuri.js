let { Client, Message, MessageEmbed } = require("discord.js");
let booru = require("booru");
/**
 * @param {Client} client
 * @param {Message} msg
 * @param {String[]} args
 */
exports.run = async (client, msg, args) => {
  let endnings = ["animated_gif", "sound", "video"];
  let index = Math.floor(Math.random() * endnings.length);
  let end = endnings[index];

  booru
    .search("rule34", [`yuri`, "rating:explict" /*end*/], {
      random: true,
      limit: 1,
    })
    .then((result) => {
      for (let post of result.posts) {
        msg.channel.send(`${post.fileUrl}\n<${post.postView}>`);
      }
    });
};
