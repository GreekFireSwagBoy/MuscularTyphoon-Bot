exports.run = async (bot, msg) => {
    const user = msg.mentions.users.first();
    if (!user) {
        throw 'Please mention the user who you want the avatar from.';
    }

    if (!user.avatarURL) {
        throw 'That user does not have an avatar.';
    }

    msg.delete();
    (await msg.channel.send({
        embed: bot.utils.embed(`${user.username}'s Avatar`, `[Download](${user.avatarURL})`, [], { image: user.avatarURL })
    })).delete(30000);
};

module.exports.help = {
  name: "8ball"
};
