const discord = require("discord.js");
module.exports = {
  name: "invite",
  category: "botinfo",
  description: "INVITE BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`HERE INVITE LINK OF BOT `)
      .setDescription(
        `[INVITE BOT](https://discord.com/oauth2/authorize?client_id=795487199197528095&scope=bot&permissions=2146958591)`
      )
      .setColor("#7cfff5")
      .setFooter("Requested By :-" + message.author.tag,
        message.author.displayAvatarURL())
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
    message.react("<a:GC_right:810000945562910761>");
  }
};
