const discord = require("discord.js");

module.exports = {
  name: "serverinfo",
  category: "info",
  description: "Get the info of any server",
  run: async (client, message, args) => {
    if (message.guild.premiumTier === "Level 0") message.guild.premiumTier = "<:GC_boost0:810007221610086431> 0"
    if (message.guild.premiumTier === "Level 1") message.guild.premiumTier = "<:GC_boost1:810006261968928769> 1"
    if (message.guild.premiumTier === "Level 2") message.guild.premiumTier = "<:GC_boost2:810006422690725888> 2"
    if (message.guild.premiumTier === "Level 3") message.guild.premiumTier = "<:GC_boost3:810006478702247937> 3"
    
    if (message.guild.region === "india") message.guild.region = "🇮🇳 India"
    if (message.guild.region === "brazil") message.guild.region = "🇧🇷 Brazil"
    if (message.guild.region === "japan") message.guild.region = "🇯🇵 Japan"
    if (message.guild.region === "russia") message.guild.region = "🇷🇺 Russia"
    if (message.guild.region === "europe") message.guild.region = "🇪🇺 Europe"
    if (message.guild.region === "sydney") message.guild.region = "🇦🇺 Sydney"
    if (message.guild.region === "singapore") message.guild.region = "🇸🇬 Singapore"
    if (message.guild.region === "hongkong") message.guild.region = "🇭🇰 Hong Kong"
    if (message.guild.region === "southafrica") message.guild.region = "🇿🇦 South Africa"
    if (message.guild.region === "us-east") message.guild.region = "🇺🇸 US East" 
    if (message.guild.region === "us-west") message.guild.region = "🇺🇸 US West"
    if (message.guild.region === "us-central") message.guild.region = "🇺🇸US Central"
    if (message.guild.region === "us-south") message.guild.region = "🇺🇸 US South"
    
      let boostlevel = message.guild.premiumTier
    
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });

    let sicon = message.guild.iconURL({ dynamic: true, size: 2048 });
    
    let embed = new discord.MessageEmbed()
      .setTitle(message.guild)
      .setDescription(
        `
**OWNER**
${message.guild.owner.user.tag}

**SERVER ID**
${message.guild.id}

**REGION**
${message.guild.region}

**TOTAL MEMBERS**
${message.guild.memberCount}

**TOTAL CHANNELS **
${message.guild.channels.cache.size}

**TOTAL ROLES**
${message.guild.roles.cache.size}

**TOTAL EMOJI **
${message.guild.emojis.cache.size}

**SERVER CREATED AT**
${message.guild.createdAt}

**SERVER BOOST**
${message.guild.premiumSubscriptionCount}

**BOOST LEVEL**
${boostlevel}

**Security** 
${message.guild.verificationLevel}
`)
      .setThumbnail(message.guild.iconURL())
      .setImage(message.guild.iconURL({dynamic: true, size: 1024}))
      .setColor("RANDOM")
      .setFooter(message.guild)

    message.channel.send(embed);
  }
};