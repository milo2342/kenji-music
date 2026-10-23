const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();
const client = new Client({ intents:[GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]});
const OWNER_ID="939620924213309451";
client.once("ready",()=>console.log(`Logged in as ${client.user.tag}`));
client.login(process.env.DISCORD_TOKEN);
