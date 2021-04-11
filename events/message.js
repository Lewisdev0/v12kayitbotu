const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require('megadb')
let server = new db.crearDB('server')


module.exports = async message => {
  let prefix = await server.get(`prefix.${message.guild.id}`) || ayarlar.prefix 
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command); 
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
   if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip2.includes(message.author.id) && !ayarlar.sahip2.includes(message.author.id)) {
        const embed = new Discord.MessageEmbed()
                    .setDescription(`**${cmd.help.name}** BU KOMUT KULLANIMA KAPALIDIR.`)
                    .setColor("BLUE")
                message.channel.send({embed})
                return
      
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
   } } 
};