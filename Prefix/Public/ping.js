const { Client, ChatInputCommandInteraction } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'ping command',
    run: async(client, message) => {
        const channel = client.channels.cache.get(message.channel.id);
        channel.send(`Pong! ${client.ws.ping}ms`);
    }
}