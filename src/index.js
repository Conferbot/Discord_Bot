import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  console.log(message.content);
  if (message.author.bot) return;
  message.reply({
    content: "Hi from bot",
  });
});

client.login(
  "MTEwNjE1MTc3NjkwNzk2ODU2NQ.GWqG38.7zRjK3LXBm6QrsP3pA2QT2BqZz96rIh0LJ8MTQ"
);
