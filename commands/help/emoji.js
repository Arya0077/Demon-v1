const { RichEmbed } = require("discord.js");

module.exports = {
  name: "emoji",
  category: "info",
  description: "INVITE PARAS BOT",
  run: async (client, message, args) => {
  
    try {
        let notAnimated = [];
        let animated = [];
        message.guild.emojis.cache.forEach(async emoji => {
          if (emoji.animated) animated.push(emoji.toString());
          else notAnimated.push(emoji.toString());
        });
        if (!animated[0]) animated = ['None'];
        if (!notAnimated[0]) notAnimated = ['None'];
        message.channel.send('**__ANIMATED  :__**\n' + animated.join(' ') + '\n**__NORMAL:__**\n' + notAnimated.join(' '), {split:true});
      message.react("<a:GC_right:810000945562910761>");
      } catch (err) {
        message.channel.send('Their was an error!\n' + err).catch();
      }
      
}
};