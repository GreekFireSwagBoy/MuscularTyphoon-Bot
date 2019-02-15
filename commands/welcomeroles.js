const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

    /*
        1) Use the messageReactionAdd and messageReactionRemove events to add/remove users roles
        2) Remove the awaitReactions() function as we won't need that anymore
        3) Customize the message a bit more to fit a general welcome channel
    */

    await message.delete().catch(O_o => {});

    const a = message.guild.roles.get('491402247821983749'); // Moderator
    const b = message.guild.roles.get('491402534418644993'); // Administrator
    const c = message.guild.roles.get('491357023024447488'); // Developer

    const embed = new RichEmbed()
        .setTitle('Available Roles')
        .setDescription(`
       
        Welcome to **${message.guild.name}**! You may choose from our list of roles you can join/leave from:
       🇦 ${a.toString()}
       🇧 ${b.toString()}
       🇨 ${c.toString()}
       `)
        .setColor(0xdd9323)
        .setFooter(`Guild ID: ${message.guild.id}`);

    message.channel.send(embed).then(async msg => {

        await msg.react('🇦');
        await msg.react('🇧');
        await msg.react('🇨');
    });
};

exports.help = {
    name: 'welcomeroles'
};
