const discord = require("discord.js");

module.exports = {
   name: "fdeafen",
   aliases: ['fdeafen','forcedeafen','fd','force deafen'],
   description: "Mutes everyone mic",
   run: async(client, message, args) => {
  var a = message.id;
  if (!message.member.hasPermission('MUTE_MEMBERS')) return message.reply("You do not have the permission to do that!");
  if (!message.member.voice.channel) return message.reply("You are not in a voice channel!");
  var user = message.mentions.members.first();

  if (!user) return message.reply("Whom do you wanna Deafen?");
  let channel = message.member.voice.channel;
  var found = 0;
  for (let memberi of channel.members) {
    if (memberi[1] == user) {
      found++;
    }
  }
  if (found == 1) {
    await user.voice.setDeaf(true);
    message.channel.send(`<:Demon_VcDeafen:829768372484571197> ${user} deafened by ${message.author}`);
    message.channel.messages.fetch(a).then(msg => msg.delete({ timeout: 1000 }));
  }
  else {
    message.channel.send("You are not in the same channel!!");
    message.channel.messages.fetch(a).then(msg => msg.delete({ timeout: 1000}));
  }
}
}