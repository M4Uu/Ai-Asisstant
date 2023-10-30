const { Client, ChatInputCommandInteraction, VoiceChannel } = require('discord.js');
const voiceDiscord = require('@discordjs/voice')

module.exports = {
    name: 'joinvc',
    description: 'Comando para unir bot al VC',
    run: async(client, message) => {
        const channel = message.member.voice.channel;
        if(!channel) return client.channels.cache.get(message.channel.id).send('No estás conectado a ningún canal!');

        const connection = voiceDiscord.joinVoiceChannel({
            channelId: channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })    
    }
}