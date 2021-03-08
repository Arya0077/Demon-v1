const db = require("quick.db");

const { prefix } = require("../../config.json");

const { msg } = require("../../server.js");

const discord = require("discord.js");

module.exports = {
  name: "setmessage",

  aliases: ["setwmessage", "setwmsg", "setmessage"],

  category: "moderation",

  usage: `${prefix}setmessage <message>`,

  description: "Change the guild prefix",

  run: async (client, message, args) => {
    //PERMISSION

    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You don't have enough powers");
    }

    if (!args[0]) {
      return message.channel.send("Please give the message to set");
    }

    let msg = args.slice(0).join(" ");

    db.set(`msg_${message.guild.id}`, `${msg}`);

    let embed = new discord.MessageEmbed()

      .setAuthor(
        message.author.username,

        message.author.avatarURL({ dynamic: true, size: 2048 })
      )

      //    .setThumbnail(

      //      message.author.displayAvatarURL({ dynamic: true, size: 2048 })

      //   )

      .setColor("RANDOM")

      .addField(
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━",

        `

:cetick: **MEMBER USERNAME :-** __**${message.author.tag}**__

:cetick: **MEMBER COUNT :-** **__${message.guild.memberCount}__**

`
      )

      .addField(
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━",

        `

:emoji_24: **THANKS FOR JOINING ${message.guild}** :emoji_24:`
      )

      .setAuthor(message.guild)

      .setTitle("━━━━━━━━━━━━━━━━━━━━━━━━━━━━")

      // .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))

      .setColor("RANDOM")

      //   .setImage(url)

      .setTimestamp()

      .setDescription(msg)

      .setFooter(message.author.tag, message.author.displayAvatarURL());

    message.channel.send(embed);
  }
};