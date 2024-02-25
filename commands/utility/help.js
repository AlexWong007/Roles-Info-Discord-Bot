const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('help').setDescription('shows a list of commands this bot has'),

    async execute(interaction) {
        await interaction.reply({content: "here are a list of commands that are avaiable with this bot: \n /help  /information /user /server /addroles /removeroles"});
    }
}