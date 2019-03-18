const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    const DMatron = args.join(" ")
    if (!DMatron) return message.channel.send("**ERROR**\nYou did not include something you would like to DM me, please do!")
    message.author.send(DMatron)
}

module.exports.help = {
    name: "dm"
}
