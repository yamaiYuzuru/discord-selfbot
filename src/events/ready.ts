import { Event } from "../types";

export default {
  name: "ready",
  once: true,
  execute: (client) => {
    console.log(
      `[System > Ready] ${client.user?.username} ist mit Discord verbunden.`
    );
  },
} as Event;
