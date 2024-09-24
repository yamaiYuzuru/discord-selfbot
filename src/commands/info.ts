import { Command } from "../types";

export default {
  data: {
    name: "info",
    aliases: ["i"],
    category: "default",
  },
  execute: (client, msg, args) => {
    msg.edit("Lade alle Daten...").then((m) => {
      m.edit(
        `- **Username:** ${client.user!.username}\n- **Status:** ${
          client.status
        }\n- **ID:** ${client.user!.id}\n- **Uptime:** <t:${
          client.uptime
        }:R>\n- **Serveranzahl:** ${client.guilds.cache.size}`
      );
    });
  },
} satisfies Command;
