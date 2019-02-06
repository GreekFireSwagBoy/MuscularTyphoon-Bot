const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("MASTER HAS NOT AUTHORIZED YOU THOSE PERMISSIONS.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them please clarify better.");
  let warnlevel = warns[wUser.id].warns;

  message.reply(`<@${wUser.id}> has ${warnlevel} warnings.`);

}

module.exports.help = {
  name: "warnlevel"
}
