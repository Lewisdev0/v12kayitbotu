const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('BLUE') //renk yeri BLUE KISMINI PİNK,BLACK VEYA RANDOM YAPABİLİRSİNİZ :)
.setTitle('Kayıt Yardım Komutları')
.setTimestamp()
.addField(' .erkek', 'Erkek üye Kaydedersiniz')
.addField(' .kız', 'Kız üye Kaydedersiniz')
.addField(' .say', 'Üye sayısına bakarsınız')

.setFooter('BOT ADI KAYIT SİSTEMİ', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["kayıt-yardım], //komutun diger adları ile kullanışı.
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};//lewis
