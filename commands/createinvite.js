const Discord = require("discord.js");

module.exports.run = async (anko, message, args, color) => {
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setAuthor("Discord Permanent Invite Link")
    .setDescription(`**Permanent Invite Link**: ${invite}`);
    message.channel.send(embed);
  });
}

module.exports.help = {
  name: "createinvite"
}
