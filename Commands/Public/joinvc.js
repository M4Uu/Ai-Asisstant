const { SlashCommandBuilder, Client, ChatInputCommandInteraction, ChannelType, Message } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('joinvc')
    .setDescription('Comando para meter al bot en un vc')
    .addChannelOption(option =>
        option
            .setName('canal')
            .setDescription('Canal ingresar')
            .setRequired(true)
            .addChannelTypes(ChannelType.GuildVoice)
    ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client){
        
    }
};

