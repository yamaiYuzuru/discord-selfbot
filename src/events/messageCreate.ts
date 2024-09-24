import exp from "constants";
import { Event } from "../types";

export default {
  name: "messageCreate",
  once: false,
  execute: async (client, msg) => {
    let allowed = ["428835662310146049"];
    let statusCodes = ["arbeit", "afk", "offline", "schlafen"];
    if (!allowed.includes(msg.author.id)) return;
    if (
      msg.mentions.users.find((u) => u.id === "428835662310146049") ||
      msg.channel.type === "DM"
    ) {
      if (msg.author.id === "1122060005273767966") return;
      if (statusCodes.includes(client.status)) {
        switch (client.status) {
          case "arbeit":
            msg.reply(
              "Automatische Antwort:\nYuzuru ist zur Zeit auf Arbeit. Er wird sich so schnell wie möglich melden."
            );
            client.users.cache
              .get("406797773401358337")
              ?.send(`${msg.author.username} hat sich gemeldet.`);
            break;
          case "afk":
            msg.reply(
              "Automatische Antwort:\nYuzuru ist zur Zeit AFK. Er wird sich so schnell wie möglich melden."
            );
            client.users.cache
              .get("406797773401358337")
              ?.send(`${msg.author.username} hat sich gemeldet.`);
            break;
          case "offline":
            msg.reply(
              "Automatische Antwort:\nYuzuru ist zur Zeit Offline. Er wird sich so schnell wie möglich melden."
            );
            client.users.cache
              .get("406797773401358337")
              ?.send(`${msg.author.username} hat sich gemeldet.`);
            break;
          case "schlafen":
            msg.reply(
              "Automatische Antwort:\nYuzuru schläft zur Zeit. Er wird sich so schnell wie möglich melden."
            );
            client.users.cache
              .get("406797773401358337")
              ?.send(`${msg.author.username} hat sich gemeldet.`);
            break;
        }
      }
    }
    if (!msg.content.startsWith("yuyu.")) return;
    let args = msg.content.slice("yuyu.".length).trim().split(/ +/g);
    let command = args.shift()!.toLowerCase();
    let cmd = client.commands.get(command);

    try {
      if (cmd) {
        cmd.execute(client, msg, args);
      }
    } catch (error) {
      console.error(error);
    }
  },
} as Event<"messageCreate">;
