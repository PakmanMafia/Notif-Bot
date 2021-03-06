const { token } = require('./config.json')
const { Client, Intents } = require('discord.js')

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MEMBERS],
});

client.once('ready', () => {
    console.log("Ready!");
})

client.login(token);