//https://discordapp.com/api/oauth2/authorize?client_id=542488518560055309&permissions=0&scope=bot

exports.run = async (bot, message) => {
    message.channel.send({embed: {
      color: bot.color.main,
      description: `**Permanent bot invite link**\nhttps://discordapp.com/api/oauth2/authorize?client_id=542488518560055309&permissions=0&scope=bot`,
      author: {
        name: message.author.tag,
        icon_url: message.author.avatarURL
      }
    }}).then(m => m.delete(30000));
} 

module.exports.help = {
  name: "invite"
}
