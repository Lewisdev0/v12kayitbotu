const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] Komutlar Yüklendi. Botumuz aktif`
  );
  client.user.setStatus("online"); //botun durumu online = çevrimiçi,idle = boşta,dnd = rahatsız etmeyin
  var oyun = [
    "YAZI 1",
    "YAZI 2"//buraları doldurun hareketli oynuyor moruk :D

  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};