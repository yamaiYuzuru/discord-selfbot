import { Client } from "discord.js-selfbot-v13";
import { join } from "path";
import { readdirSync } from "fs";
import { Command } from "../types";

export default async function (client: Client) {
  let commands: Command[] = [];
  let tcmdPath = join(__dirname, "../commands");
  readdirSync(tcmdPath).forEach(async (file) => {
    if (!file.endsWith(".js")) return;
    let cmd: Command = require(`${tcmdPath}/${file}`).default;
    commands.push(cmd);
    client.commands.set(cmd.data.name, cmd);
  });
  console.log(
    `[System > TextCommands] Es wurden ${client.commands.size} Text Commands geladen`
  );
}
