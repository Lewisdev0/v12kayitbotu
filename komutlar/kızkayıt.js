const Discord = require("discord.js");
const db = require('wio.db');
exports.run = (client, message, args) => {
  const misafir = message.guild.roles.cache.find(r => r.id === "KAYITSIZ ID"); 
  const kızkayıt = message.guild.roles.cache.find(r => r.id === "KIZ ID"); 
  const log = message.guild.channels.cache.find(c => c.id === "LOG ID"); 
  const tag = "TAG"; //tagınız
  if(!message.member.roles.cache.array().filter(r => r.id === "KAYIT YETKILISI ID")[0]) { 
    return message.channel.send("YETKİN YOK MK APTALI");
  } else {
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const lewis = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("**Kayıt Edebilmem İçin Bir İsim Girmelisin.**")
      if(!yas) return message.channel.send("**Kayıt Edebilmem İçin Bir Yaş Girmelisin.**")
    lewis.roles.add(kızkayıt)
    lewis.roles.remove(misafir)
    lewis.setNickname(`${tag} ${nick} | ${yas}`)
        const lewisbey = new Discord.MessageEmbed()
    .setDescription(`
• Kaydı Yapılan Üye: **${lewis.user.tag}**
• Değiştirilen İsim: ${tag} ${nick} | ${yas}
• Verilen Rol: ${kızkayıt}
`)
         .setFooter('BOT ADI Kayıt Sistemi')
     message.channel.send(lewisbey)
    
    
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k","bayan","kadın"],
  permLevel: 0
};
exports.help = {
  name: "kız",
  description: "",
  usage: ""
};
