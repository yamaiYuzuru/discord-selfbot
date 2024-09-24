import { Command } from "../types";

export default {
  data: {
    name: "mudae",
    aliases: ["mu", "m"],
    category: "default",
  },
  execute: async (client, msg) => {
    for (let i = 0; i < 8; i++) {
      setTimeout(() => msg.channel.send("$wa"), 1000 * i);
    }
  },
} satisfies Command;
