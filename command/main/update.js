let { Client, Message } = require("discord.js-selfbot-v13");

/**
 * @param {Client} client
 * @param {Message} msg
 * @param {String[]} args
 */
exports.run = async (client, msg, args) => {
  switch (args[0]) {
    case "username":
      if (!args[1])
        return msg.channel.send(
          "Och mensch yuyu, du vergisst wohl mir den neuen Username zu geben."
        );
      client.user.setUsername(args[1], "J17.10.03p!@.");
      msg.channel.send("Der Username wurde aktualliesiert.");
      break;
    case "email":
      if (!args[1])
        return msg.channel.send(
          "Och mensch yuyu, du vergisst wohl mir die neue email zu geben."
        );
      client.user.setEmail(args[1], "J17.10.03p!@.");
      msg.channel.send("Die Email wurde aktualliesiert.");
      break;
    case "password":
      if (!args[1] || !args[2])
        return msg.channel.send(
          "Och mensch yuyu, du vergisst wohl mir das alte Passwort zu geben oder das neue passwort zu geben."
        );
      client.user.setPassword(args[1], args[2]);
      msg.channel.send("Passwort wurde geändert.");
      break;
    case "pfp":
      client.user.setAvatar(args[1]);
      msg.channel.send("Profilbild wurde geändert.");
      break;
    case "bio":
      client.user.setAboutMe(args.slice(1).join(" "));
      msg.channel.send("Bio aktuallisiert.");
      break;
    case "nickname":
      msg.guild.me.setNickname(args.slice(1).join(" "));
      msg.channel.send("Nickname wurde aktualliesiert.");
  }
};
