import 'dotenv/config';
import { Client, Events, GatewayIntentBits } from 'discord.js';

const token = process.env.DISCORD_TOKEN;

if (!token) {
  throw new Error('DISCORD_TOKEN não foi definido. Configure apps/bot/.env.');
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, (readyClient) => {
  console.info(`[bot] Conectado como ${readyClient.user.tag}`);
});

client.on(Events.Error, (error) => {
  console.error('[bot] Erro na conexão com o Discord:', error);
});

await client.login(token);
