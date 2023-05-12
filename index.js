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
  "MTEwNjE1MTc3NjkwNzk2ODU2NQ.GOkRIv.Rs_979mCTHzKwgUCBbqV_toqhL-oa9mNHCzFRI"
);
