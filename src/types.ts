import {
  Client,
  ClientEvents,
  Collection,
  Message,
  Sticker,
} from "discord.js-selfbot-v13";

export interface Command {
  data: {
    name: string;
    aliases: Array<string>;
    category: string;
  };
  execute: (
    client: Client,
    msg: Message,
    args: Array<string>
  ) => any | Promise<any>;
}

export interface Event<T extends keyof ClientEvents = keyof ClientEvents> {
  name: T;
  once?: boolean;
  execute: (
    client: Client,
    ...parameters: ClientEvents[T]
  ) => any | Promise<any>;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TOKEN: string;
    }
  }
}

declare module "discord.js-selfbot-v13" {
  export interface Client {
    commands: Collection<string, Command>;
    status: string;
  }
}
