const Discord = require("discord.js");
const urban = require("urban");

module.exports.run = async (bot, message, args) => {
    if(args.length < 1) return message.channel.send("Please enter a word.");
    let str = args.join(" ");

    urban(str).first(json => {
        if(!json) return message.channel.send("No results found.");

        let embed = new Discord.RichEmbed()
        .setTitle(json.word)
        .setDescription(json.definition)
        .addField("Upvotes 👍", json.thumbs_up, true)
        .addField("Downvotes 👎", json.thumbs_down, true)
        .setFooter(`Written by ${json.author}`);

    message.channel.send({embed});
    });
}

module.exports.help = {
    name: "urban"
}
