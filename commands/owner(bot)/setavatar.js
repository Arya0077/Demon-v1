//const { default_prefix, token } = require('../config.json');
const Discord = require('discord.js');
const { owners } = require("../../config.json")
const { prefix, owner } = require("../../config.json");

  module.exports = {
 name: 'setavatar',
    category: "owner",
  description: 'Sets new avatar for bot.',
    enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
    run: async  (client, message, args) => {
    if (!client.config.owner.includes(message.author.id)) return;
    const sayMessage = args.join(` `);
    client.user.setAvatar(sayMessage);
  const avatarEmbedOther = new Discord.MessageEmbed()
  .setTitle(`New avatar`)
  .setURL(sayMessage)
  .setImage(sayMessage)
  .setColor("#ff00b5")
  message.channel.send(avatarEmbedOther);
  return;
      
  //}

//exports.perms = {
  
},

//exports.help = {
 
usage: 'setavatar <new avatar url>' 
}
 //   }