const Discord = require("discord.js");
const db = require('wio.db');
exports.run = (client, message, args) => {
    const misafir = message.guild.roles.cache.find(r => r.id === "KAYITSIZ ID"); 
    const kayıterkek = message.guild.roles.cache.find(r => r.id === "ERKEK ID"); 
    const tag = "TAG";
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
    lewis.roles.add(kayıterkek)
    lewis.roles.remove(misafir)
    lewis.setNickname(`${tag} ${nick} , ${yas}`)
     const yolla = new Discord.MessageEmbed()
    .setDescription(`
Kaydı Yapılan Üye: **${lewis.user.tag}**
Değiştirilen İsim: ${tag} ${nick} | ${yas}
Verilen Rol: ${kayıterkek}
`)
         .setFooter('BOT ADI Erkek Kayıt Sistemi')
     message.channel.send(yolla)
     
  
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["e","bay"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "",
  usage: ""
};
