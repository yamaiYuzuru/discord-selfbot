import { Client } from "discord.js-selfbot-v13";
import Event from "./handlers/Event";
import Command from "./handlers/Command";

let client = new Client();

client.login(process.env.TOKEN);
Event(client);
Command(client);

client.status = "online";
