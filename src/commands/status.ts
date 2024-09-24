import { Command } from "../types";

export default {
  data: {
    name: "status",
    aliases: ["s"],
    category: "default",
  },
  execute: async (client, msg, args) => {
    switch (args[0]) {
      case "online": {
        client.status = "online";
        msg.edit("Status auf Online");
        break;
      }
      case "arbeit": {
        client.status = "arbeit";
        msg.edit("Status auf Arbeit");
        break;
      }
      case "afk": {
        client.status = "afk";
        msg.edit("Status auf AFK");
        break;
      }
      case "offline": {
        client.status = "offline";
        msg.edit("Status auf Offline");
        break;
      }
      case "schlafen": {
        client.status = "schlafen";
        msg.edit("Status auf Schlafen");
        break;
      }
    }
  },
} satisfies Command;
