import { Command } from "../types";

export default {
  data: {
    name: "eval",
    aliases: ["e"],
    category: "default",
  },
  execute: async (client, msg, args) => {
    try {
      let code = args.join(" ");
      let evaled = eval(code);
      msg.edit(`\`\`\`js\nInput: ${code}\nOutput: ${evaled}\`\`\``);
    } catch (e) {
      msg.edit(`\`\`\`js\nInput: ${args.join(" ")}\nOutput: ${e}\`\`\``);
    }
  },
} satisfies Command;
