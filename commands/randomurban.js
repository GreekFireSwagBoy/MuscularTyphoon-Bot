const Discord = module.require("discord.js");
const urban = module.exports.require("urban");

module.exports.run = async (bot, message, args) => {
    urban.random().first(json => {
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
    name: "randomurban"
}
