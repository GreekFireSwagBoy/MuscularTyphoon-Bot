const _discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
    if (message.channel.type === "dm") return;  
    const economy = require("./economy.json")
    
    let sender = message.author.id;
    
    if (bot.user.id === message.author.id) { return }
    
    if (!economy[sender + message.guild.id].money) {
        const embed = new _discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Bank", message.author.avatarURL)
    .addField("Balance:", "No Money!", true)
    .setTimestamp();
    
    message.channel.send({embed: embed});
    }
    
    const embed = new _discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Bank", message.author.avatarURL)
    .addField("Balance:", economy[sender + message.guild.id].money, true)
    .setTimestamp();
    
    message.channel.send({embed: embed});
    
} 

module.exports.help = {
    name: "balance"
};
