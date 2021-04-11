const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz.');

 
    const say = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayColor)
    .setTitle(message.guild.name)
        .addField("Sunucudaki Üye Sayısı", message.guild.memberCount)
        .addField("Sunucudaki Bot Sayısı", message.guild.members.cache.filter(m => m.user.bot).size)
        .addField("Çevrimiçi Üye Sayısı", message.guild.members.cache.filter(m => m.user.presence.status !== "online").size)
        .addField("Boşta Üye Sayısı", message.guild.members.cache.filter(m => m.user.presence.status !== "idle").size)
        .addField("Rahatsız Etmeyindeki Üye Sayısı", message.guild.members.cache.filter(m => m.user.presence.status !== "dnd").size)
        .addField("Çevrimdışı Üye Sayısı", message.guild.members.cache.filter(m => m.user.presence.status == "offline").size)

    message.channel.send(say);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say'],
    permLevel: 0
};

exports.help = {
    name: 'gelişmiş-say',
    description: 'Say',
 }