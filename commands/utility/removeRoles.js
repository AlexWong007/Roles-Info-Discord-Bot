const { ButtonBuilder, ButtonStyle, SlashCommandBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {

    data: new SlashCommandBuilder().setName('removeroles').setDescription('Removes Buttons with Role Options.'),

    async execute(interaction) {
        //const target = interaction.options.getUser('target');

        // if (!target) {
        //     console.error('Target user not provided in options.');
        //     return;
        // }
        const adultRole = interaction.guild.roles.cache.get('1203360776996393011');
        const maleRole = interaction.guild.roles.cache.get('1203359334399090758');
        const femaleRole = interaction.guild.roles.cache.get('1203360468576632873');
        const contributerRole = interaction.guild.roles.cache.get('1203851751586013224');

        const adult = new ButtonBuilder().setCustomId('adult2').setLabel('18+').setStyle(ButtonStyle.Danger);
        const male = new ButtonBuilder().setCustomId('male2').setLabel('male').setStyle(ButtonStyle.Danger);
        const female = new ButtonBuilder().setCustomId('female2').setLabel('female').setStyle(ButtonStyle.Danger);
        const contributer = new ButtonBuilder().setCustomId('contributer2').setLabel('contributer').setStyle(ButtonStyle.Danger);

        if (!adultRole || !maleRole || !femaleRole || !contributerRole) {
            console.error('One or more roles are not defined.');
            return;
        }    
        
        const row = new ActionRowBuilder().addComponents(adult, male, female, contributer);

        await interaction.reply({content: `Choose a role you want to remove:`, components: [row]});
    },

    eventListener(client) {
        client.on('interactionCreate', async (interaction) => {
            if (!interaction.isButton()) return;
        
            const buttonId = interaction.customId;
        
            const adultRole = interaction.guild.roles.cache.get('1203360776996393011');
            const maleRole = interaction.guild.roles.cache.get('1203359334399090758');
            const femaleRole = interaction.guild.roles.cache.get('1203360468576632873');
            const contributerRole = interaction.guild.roles.cache.get('1203851751586013224');
        
            switch (buttonId) {
                case 'adult2':
                    await interaction.reply({ content: 'Role has been removed!!'});
                    interaction.member.roles.remove(adultRole);
                    break;
                case 'male2':
                    await interaction.reply({ content: 'Role has been removed!!'});
                    interaction.member.roles.remove(maleRole);
                    break;
                case 'female2':
                    await interaction.reply({ content: 'Role has been removed!!'});
                    interaction.member.roles.remove(femaleRole);
                    break;
                case 'contributer2':
                    await interaction.reply({ content: 'Role has been removed!!'});
                    interaction.member.roles.remove(contributerRole);
                    break;
            }
        });
            
    }
};

// client.on('interactionCreate', (interaction) => {
//     console.log("evenet working!!!");
//     if (!interaction.isButton()) return;

//     const buttonId = interaction.customId;

//     const adultRole = interaction.guild.roles.cache.get('1203360776996393011');
//     const maleRole = interaction.guild.roles.cache.get('1203359334399090758');
//     const femaleRole = interaction.guild.roles.cache.get('1203360468576632873');
//     const contributerRole = interaction.guild.roles.cache.get('1203851751586013224');

//     switch (buttonId) {
//         case 'adult':
//             interaction.member.roles.add(adultRole);
//             break;
//         case 'male':
//             interaction.member.roles.add(maleRole);
//             break;
//         case 'female':
//             interaction.member.roles.add(femaleRole);
//             break;
//         case 'contributer':
//             interaction.member.roles.add(contributerRole);
//             break;
//     }
// });
