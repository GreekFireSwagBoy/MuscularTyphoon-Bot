const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../warnings.json");

module.exports.run = async (bot, message, args) => {
   //!add @User <amount>
   if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("Missing Permission.");
   let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

   let pCoins = coins[pUser.id].coins;

   coins[pUser.id] = {
       coins: pCoins - parseInt(args[1])
   };

   message.channel.send(`${args[1]} warning have been removed from ${pUser}'s warnings.`);

   fs.writeFile("./warnings.json", JSON.stringify(coins), (err) => {
       if(err) console.log(err)
   });
  
}

module.exports.help = {
   name: "removewarns"
}


