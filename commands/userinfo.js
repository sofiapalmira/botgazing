module.exports.run = (bot, message, args) => {
    var userMember;

    if (message.mentions.users.size === 0) {
        userMember = message.author;
        memberUser = message.member;
    }
    else {
        userMember = message.mentions.users.first();
        memberUser = message.mentions.members.first();
    }
    
    message.channel.send({embed: {
        color: memberUser.displayColor,
        author: {
          name: `${userMember.tag} (${userMember.id})`,
          icon_url: userMember.avatarURL
        },
        title: "Display Name",
        description: memberUser.displayName,
        fields: [
            {
                name: "Bot User",
                value: userMember.bot
            },
            {
                name: "Presence",
                value: memberUser.presence.status
            },
            {
                name: "Account Created",
                value: new Date(userMember.createdTimestamp).getTimezoneOffset()
            },
            {
                name: "Server Joined",
                value: new Date(memberUser.joinedTimestamp).getTimezoneOffset()
            },
            {
                name: `Roles (${memberUser.roles.size})`,
                value: memberUser.roles.map(role => role.name).join(", ")
            }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: `I'm ${bot.user.tag}!`
        }
      }
    });
    };