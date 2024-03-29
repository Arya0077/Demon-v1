const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
  name: 'feedback',
  aliases: [],
  guildOnly: true,
  cooldown: { time: 30000 },
  clientPermissions: [ ],
  group: 'bot',
  description: 'Sends support message to the bots owner',
  parameters: ['Feedback Message'],
  get examples(){ return [ this.name, ...this.aliases ].map(x => x + ' ' + '[complaints, bugs, issues, feature requests, etc]'); },
  run: async function run(client, message, args ){

    if (!args.length){
      client.commands.cooldowns.get(this.name).users.delete(message.author.id);
      return message.channel.send(`<:Demon_Cross:829767735025467445>  | ${message.author}, Please add an issue to your message!`).then(()=>  message.react("💢"));
    };

    if (args.join(' ').length > 1000){
      client.commands.cooldowns.get(this.name).users.delete(message.author.id);
      return message.channel.send(`<:Demon_Cross:829767735025467445>  | ${message.author}, Please make your report brief and short! (MAX 1000 characters!)`).then(()=>  message.react("💢"));
    };

    const owner = await client.users.fetch('730424922639302693').catch(() => null);

    if (!owner){
      return message.channel.send(`Couldn't contact <username>`);
    };

    return owner.send(
      new MessageEmbed()
      .setColor('ORANGE')
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true }))
      .setTitle('Re: Feedback/Report')
      .setDescription([
        moment(new Date()).format('dddd, do MMMM YYYY'),
        `${message.guild.name}\u2000|\u2000#${message.channel.name}`,
        `Guild ID: ${message.guild.id}\u2000|\u2000Channel ID: ${message.channel.id}\u2000|\u2000User ID:${message.author.id}`,
        '\n',
        args.join(' ')
      ].filter(Boolean).join('\n'))
      .addFields({
        name: 'Please use the template below to reply',
        value: [
          '```js',
          '// REPLY TO USER',
          `Demon eval message.client.users.fetch('${message.author.id}').then(u => {`,
          `  u.send(\`YOUR MESSAGE HERE\`)`,
          `})`,
          '\n',
          '// REPLY TO CHANNEL',
          `Demon eval message.client.channels.cache.get('${message.channel.id}').send(\`YOUR MESSAGE HERE\`)`,
          '```'
        ].join('\n')
      })
    ).then(() => message.react('✅')).catch(() => message.channel.send('✅ Feedback Sent!'))
    .catch(err => message.channel.send(`<username> is currently not accepting any Feedbacks right now via DMs. You might to join my support server instead.`));
  }
};
