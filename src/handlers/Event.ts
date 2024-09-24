import { Event } from "../types";
import { Client } from "discord.js-selfbot-v13";
import { join } from "path";
import { readdirSync } from "fs";

export default function (client: Client) {
  let eventDir = join(__dirname, "../events");
  let events: Event[] = [];
  readdirSync(eventDir).forEach(async (file) => {
    if (!file.endsWith(".js")) return;

    let event: Event = require(`${eventDir}/${file}`).default;
    events.push(event);
    client[event.once ? "once" : "on"](event.name, (...args) =>
      event.execute(client, ...args)
    );
  });
  console.log(`[System > Events] Es wurden ${events.length} Events geladen.`);
}
