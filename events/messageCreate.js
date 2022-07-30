let { Client, Message, MessageEmbed } = require("discord.js-selfbot-v13");

/**
 *
 * @param {Client} client
 * @param {Message} msg
 */
module.exports = async (client, msg) => {
  let allowedUsers = ["428835662310146049", "885227453927268372"];

  if (!allowedUsers.includes(msg.author.id)) return;

  let prefixes = [`<@!${msg.author.id}>`, "yuyu."];
  if (prefixes.length === 0) return;
  let prefix = prefixes.find((p) =>
    msg.content.startsWith(p.toLocaleLowerCase())
  );

  if (!prefix) return;

  let args = msg.content.slice(prefix.length).trim().split(" ");
  let command = args.shift().toLocaleLowerCase();
  let cmd = client.command.get(command) || client.aliases.get(command);

  try {
    await cmd.run(client, msg, args);
  } catch (error) {
    let embed = new MessageEmbed();
    embed.setTitle("Irgendwas lief schief.");
    embed.setDescription(String(error.message));
    client.users.cache.get("428835662310146049");
  }
};
