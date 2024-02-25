const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('information').setDescription('Replies with saying hi'),

    async execute(interaction) {
        await interaction.reply('Hello!! I am a roles bot with the addition to provide slash commands that will have infomation about the server and also the users within.');
    },
};