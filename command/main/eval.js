let { Client, Message } = require("discord.js-selfbot-v13");

/**
 * @param {Client} client The discord client
 * @param {Message} msg The message which came from the MessageCreate Event
 * @param {String[]} args Arguments which came after the command
 */
exports.run = async (client, msg, args) => {
  try {
    let evaluated = eval(args.join(" "));
    msg.channel.send(
      `\`\`\`js\n**Input**:\n${args.join(" ")}\n**Output**:${String(
        evaluated
      )}\`\`\``
    );
  } catch (error) {
    msg.channel.send(
      `\`\`\`js\n**Input**:\n${args.join(" ")}\n**Output**:${String(
        error
      )}\`\`\``
    );
  }
};
