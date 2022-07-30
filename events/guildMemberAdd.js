let { Client, GuildMember } = require("discord.js-selfbot-v13");

/**
 * @param {Client} client
 * @param {GuildMember} member
 */
module.exports = async function (client, member) {
  let kamiChat = client.channels.cache.get("932763730121490453");
  let sakuratreeChat = client.channels.cache.get("932763730121490453");
  let ayakoChat = client.channels.cache.get("939881014442987540");

  if (
    kamiChat.type !== "GUILD_TEXT" ||
    sakuratreeChat.type !== "GUILD_TEXT" ||
    ayakoChat.type !== "GUILD_TEXT"
  )
    return;

  //Sakuratree
  if (member.guild.id === "932762898571358228") {
    sakuratreeChat.send(
      `Willkommen willkommen, <@${member.user.id}> in <#932763727000928286> findest du die selfroles und durch ein wenig aktives schreiben leveln und dafür kannst du dann höhre rollen bekommen. ^^`
    );
  }
  //Kami
  if (member.guild.id === "683383132266692736") {
    kamiChat.send(
      `Willkommen willkommen, <@${member.user.id}> in <#738113612559941742> findest du die selfroles und durch ein wenig aktives schreiben leveln und dafür kannst du dann höhre rollen bekommen, oder in <#794712391606075443> kannst du dir rollen kaufen. ^^`
    );
  }
  //Ayako
  if (member.guild.id === "886693651282014258") {
    ayakoChat.send(
      `Willkommen willkommen, <@${member.user.id}> in <#886711168092241970> findest du die selfroles und durch ein wenig aktives schreiben leveln und dafür kannst du dann höhre rollen bekommen. ^^`
    );
  }
};
