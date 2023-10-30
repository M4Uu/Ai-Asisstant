const { SlashCommandBuilder, Client, ChatInputCommandInteraction } = require('discord.js')
const ms = require('ms')
module.exports = {
    Cooldown: ms('0s'),
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Comando ping pong'),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client){
        return interaction.reply({content:`Pong! ${interaction.user}`})
    }
};

