const Discord = require("discord.js");
const PREFIX = bot.prefix

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
      message.delete(1)

      if(args[0] == "1"){
        message.reply("please check your dms for the commands!");
            message.author.send({embed: {
                  color: 1339135,
                  thumbnail: {
                      url: (message.author.displayAvatarURL)
                    },
                  fields: [
                    {
                        name: ";8ball",
                        value: "Usage: ;8ball [question]",
                    },
                    {
                        name: ";doggo",
                        value: "Will generate a random dog picture.",
                    },
                    {
                        name: ";botinfo",
                        value: "Will display who made the bot and along with the developer of it.",
                    },
                    {
                        name: ";level",
                        value: "Usage: ;level [@yourself]",
                    },
                    {
                        name: ";coins",
                        value: "Usage: ;coins [@yourself]",
                    },
                    {
                        name: ";warn",
                        value: "Usage: ;warn [@user] [reason]",
                    },
                    {
                        name: ";status",
                        value: ";status [on, off, idle]",
                    },
                    {
                        name: ";kick",
                        value: "Usage: ;kick [@user] [reason]",
                    },
                    {
                        name: ";report",
                        value: "Usage: ;report [@mention] [description]",
                    },
                    {
                        name: ";serverinfo",
                        value: "Will show you the server information, members, and when it was created as well as name.",
                    },
              ],
                  timestamp: new Date(),
                  footer: {
                    icon_url: bot.user.displayAvatarURL ,
                    text: "MuscularTyphoon Bot",
                  },
                  author: {
                      icon_url: message.guild.iconURL,
                      name: "MuscularTyphoon | Help Page: 1",
                    }
              }});
            return;
        };

        if(args[0] == "2"){
            message.reply("please check your dms for the commands!");
            message.author.send({embed: {
                  color: 1339135,
                  thumbnail: {
                      url: (message.author.displayAvatarURL)
                    },
                  fields: [
                        {
                              name: ";prefix",
                              value: "Usage: ;prefix [prefix you want]",
                          },
                          {
                              name: "!say",
                              value: "Makes the bot say anything.",
                          },
                          {
                              name: ";poll",
                              value: "Usuage: ;poll [question]",
                          },
                          {
                              name: ";addrole",
                              value: "Usuage: ;addrole [@user] [role]",
                          },
                          {
                              name: ";removerole",
                              value: "Usage: ;removerole [@user] [role]",
                          },
                          {
                              name: ";clear",
                              value: "Usage: ;clear[number of messages]",
                          },
                          {
                              name: ";pay",
                              value: "Usage: ;pay [@user] [amount]",
                          },
                          {
                              name: ";tempmute",
                              value: "Usage: ;tempmute [@user] [seconds]",
                          },
              ],
                  timestamp: new Date(),
                  footer: {
                    icon_url: bot.user.displayAvatarURL ,
                    text: "© MuscularTyphoon Bot",
                  },
                  author: {
                      icon_url: message.guild.iconURL,
                      name: "MuscularTyphoon | Help Page: 2",
                    }

        }});
      return;
}

module.exports.conf = {
    aliases: ['h', 'halp']
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "help"

}
