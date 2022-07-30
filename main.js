let { Client, Collection } = require("discord.js-selfbot-v13");
let fs = require("fs");
require("dotenv").config();
let { Manager } = require("erela.js");

let client = new Client();

let command = (client.command = new Collection());
let aliases = (client.aliases = new Collection());

let Music = new Manager({
  nodes: [{ host: "localhost", port: 2334, password: "Y0urS3cr3tP4ssw0rd" }],
  send(id, payload) {
    let guild = client.guilds.cache.get(id);
    if (guild) guild.shard.send(payload);
  },
});

client.on("raw", (d) => Music.updateVoiceState(d));

Music.on("nodeConnect", (node) =>
  console.log(`Node "${node.options.identifier}" connected.`)
);

Music.on("nodeError", (node, error) =>
  console.log(
    `Node "${node.options.identifier}" encountered an error: ${error.message}.`
  )
);

Music.on("trackStart", (player, track) => {
  const channel = client.channels.cache.get(player.textChannel);
  channel.send(
    `Spiele nun: \`${track.title}\`, angefordert von \`${track.requester.tag}\`.`
  );
});

Music.on("queueEnd", (player) => {
  const channel = client.channels.cache.get(player.textChannel);
  channel.send("Warteschleife ist vorbei.");
  player.destroy();
});

client.on("ready", () => {
  console.log(`[Client] Online als ${client.user.tag}`);
  Music.init(client.user.id);
});

fs.readdir("./events", (err, files) => {
  if (err) return console.error(err);

  files.forEach((file) => {
    if (!file.endsWith(".js")) return;

    client.on(
      file.split(".")[0],
      require(`./events/${file}`).bind(null, client)
    );
  });
  console.log(
    `[EventHandler] Es wurden ${
      files.filter((f) => f.endsWith(".js")).length
    } events geladen.`
  );
});

fs.readdir("./command", (err, folders) => {
  if (err) return console.error(err);

  folders.forEach((folder) => {
    fs.readdir(`./command/${folder}`, (err, files) => {
      if (err) return console.error(err);

      files.forEach((file) => {
        if (!file.endsWith(".js")) return;

        let cmd = require(`./command/${folder}/${file}`);

        if (!cmd.info) cmd.info = {};

        cmd.info.category = folder;
        cmd.info.name = file.split(".")[0];

        command.set(cmd.info.name, cmd);
        if (cmd.info.aliases)
          cmd.info.aliases.forEach((a) => aliases.set(a, cmd));
      });
      console.log(
        `[CommandHandler] Es wurde die Kategorie ${folder} mit ${
          files.filter((f) => f.endsWith(".js")).length
        } commands geladen.`
      );
    });
  });
});

client.login(process.env.TOKEN);

exports.music = Music;
