let { Client, Message } = require("discord.js-selfbot-v13");
let { music } = require("../../main.js");

/**
 * @param {Client} client
 * @param {Message} msg
 * @param {String[]} args
 */
exports.run = async (client, msg, args) => {
  if (!msg.member.voice || !args[0])
    return msg.channel.send(
      "Du musst mir einen Such begriff geben oder eine URL."
    );

  let player = music.create({
    guild: msg.guild.id,
    voiceChannel: msg.member.voice.channel.id,
    textChannel: msg.channel.id,
  });

  if (player.state !== "CONNECTED") player.connect();

  let res;

  try {
    res = await player.search(args.join(" "), msg.author);
    if (res.loadType === "LOAD_FAILED") {
      if (!player.queue.length) player.disconnect();
      throw res.exception;
    }
  } catch (error) {
    await msg.channel.send(
      `Irgendwas lief schief während des suchens: ${error.message}`
    );
  }

  switch (res.loadType) {
    case "NO_MATCHES":
      if (!player.queue.current) player.destroy();
      return msg.channel.send("Ich habe nichts gefunden.");
    case "TRACK_LOADED":
      player.queue.add(res.tracks[0]);

      if (!player.playing && !player.paused && !player.queue.size)
        player.play();
      return msg.channel.send(`Hinzufüge \`${res.tracks[0].title}\`.`);
    case "PLAYLIST_LOADED":
      player.queue.add(res.tracks);

      if (
        !player.playing &&
        !player.paused &&
        player.queue.totalSize === res.tracks.length
      )
        player.play();
      return msg.channel.send(
        `Hinzufüge playlist \`${res.playlist.name}\` mit ${res.tracks.length} songs.`
      );
    case "SEARCH_RESULT":
      let max = 5,
        collected,
        filter = (m) =>
          m.author.id === msg.author.id && /^(\d+|end)$/i.test(m.content);
      if (res.tracks.length < max) max = res.tracks.length;

      const results = res.tracks
        .slice(0, max)
        .map((track, index) => `${++index} - \`${track.title}\``)
        .join("\n");

      msg.channel.send(results + "\n\nBitte wähle ein der oberen songs.");

      try {
        collected = await msg.channel.awaitMessages({
          filter: filter,
          max: 1,
          time: 30e3,
          errors: ["time"],
        });
      } catch (e) {
        if (!player.queue.current) player.destroy();
        return msg.channel.send("Du hast mir nicht gesagt welcher song.");
      }

      const first = collected.first().content;

      if (first.toLowerCase() === "end") {
        if (!player.queue.current) player.destroy();
        return msg.channel.send("Auswahl abgebrochen.");
      }

      const index = Number(first) - 1;
      if (index < 0 || index > max - 1)
        return msg.channel.send(
          `Die Zahl die du mir gegeben hattest, ist zu klein oder zu groß (1-${max}).`
        );

      const track = res.tracks[index];
      player.queue.add(track);

      if (!player.playing && !player.paused && !player.queue.size)
        player.play();
      return msg.channel.send(`Hinzufüge \`${track.title}\`.`);
  }
};
