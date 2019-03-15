const snek = require('snekfetch');
const Discord = require('discord.js');
const api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

module.exports.run = (bot, message, args) => {

    let jsicon = "https://discord.js.org/static/logo-square.png";

    snek.get(api).then(r => {
        let embed = new Discord.RichEmbed()
        .setTitle('Trump Quote Generator')
        .setDescription(r.body.message)
        .setColor('#f79036')
        .setTimestamp()
        .setFooter("MuscularTyphoon Bot", jsicon);

        message.channel.send(embed)
    })
}
module.exports.help = {
    name: "trump"
}
