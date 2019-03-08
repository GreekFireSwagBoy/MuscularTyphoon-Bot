const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colours = require("..coulors.json");


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to run this command!")

    let bannedMember = await bot.fetchUser(args[0])
        if(!bannedMember) return message.channel.send("Please provide a username id to unban someone.")

    let reason = args.slice(1).join(" ")
        if(!reason) reason =  "No reason given!"

    if(message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I do not have permission to perform that certain command!")
    message.delete()
    try {
        message.guild.unban(bannedMember, {reason: reason})
        message.channel.send(`${bannedMember.tag} has been unbanned from the guild!`)
    }

}

module.exports.help = {
    name: "unban"
}
