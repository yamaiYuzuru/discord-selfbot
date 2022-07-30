let booru = require("booru");
let { Client, Message } = require("discord.js-selfbot-v13");

/**
 * @param {Client} client
 * @param {Message} msg
 * @param {String[]} args
 */
exports.run = async (client, msg, args) => {
  if (!isNaN(args[0])) {
    let endnings = ["animated_gif", "sound", "video"];
    let index = Math.floor(Math.random() * endnings.length);
    let end = endnings[index];
    booru
      .search("danbooru", ["rating:explict", "futanari", end], {
        limit: args[0],
      })
      .then((results) => {
        let posts = results.posts;

        for (let i = 0; i < posts.length; i++) {
          msg.channel.send(posts[i].fileUrl + "\n<" + posts[i].postView + ">");
        }
      });
  } else {
    let endnings = ["animated_gif", "sound", "video"];
    let index = Math.floor(Math.random() * endnings.length);
    let end = endnings[index];
    booru
      .search("danbooru", ["futanari", end], { limit: 1 })
      .then((results) => {
        for (let post of results.posts) {
          msg.channel.send(`${post.fileUrl}\n<${post.postView}>`);
        }
      });
  }
};
