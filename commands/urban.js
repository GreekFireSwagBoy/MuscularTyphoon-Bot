const Discord = module.require("discord.js");
const urban = module.exports.require("urban");

module.exports.run = async (bot, message, args) => {
if(args.length < 1) return message.channel.send("Please enter something.");
  Let str = args.join(" ");

  urban(str).first(json => {
      if (!json) return message.channel.send("No results found.");
      console.log(json);

      Let embed = new Discord.RichEmbed()
          .setTitle(json.word)
          .setDescription(json.definition)
          .addField("Upvotes", json.thumbs_up, true)
          .addField("Downvotes", json.thumbs_down, true);
          .setFooter(`Written by ${json.author}`")

      message.channel.send({embed});
  });
}

module.exports.help = {
    name: "urban"
}
