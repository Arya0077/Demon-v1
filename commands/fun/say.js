const { MessageFlags } = require("discord.js");

module.exports = {
    name: "say",
    desciption: "say command",
    category: "fun",
    usage: "reply <message>",

    async run (client, message, args) {
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
}