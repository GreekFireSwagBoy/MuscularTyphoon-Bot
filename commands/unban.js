const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let jsicon = "https://discord.js.org/static/logo-square.png"

    message.delete();

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to unban someone!");
    let reason = args.slice(1).join(' ');

    let user = args[0];
    if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
    if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);

    let unbanEmbed = new Discord.RichEmbed()
    .setDescription("Unban")
    .setColor("#ffffff")
    .addField("Unbanned User", `${user}`)
    .addField("Unbanned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Unbanned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason)
    .setTimestamp()
    .setFooter("MuscularTyphoon Bot", jsicon);

    let incidentchannel = message.guild.channels.find(`name`, "logs");
    if(!incidentchannel) return message.channel.send("Can't find logs channel.");

    message.guild.unban(user);
    incidentchannel.send(unbanEmbed);
}

module.exports.help = {
    name: "unban"

}
