const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setDescription("Created By: MuscularPoseidon")
    .setColor("#5315f1")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)



    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
