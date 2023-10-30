const { Client, ChatInputCommandInteraction } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'ping command',
    run: async(client, id, tag) => {
        const channel = client.channels.cache.get(id);
        channel.send(`Pong! ${tag}ms`);
    }
}