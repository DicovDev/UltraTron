/*CMD
  command: /depo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var idi = Libs.ResourcesLib.userRes("idioma")
var depr = Bot.getProperty("depr"+user.telegramid)
var wallset = User.getProperty("wallset")
var tyes = [{ title: "🔁 Refrescar", command: "rgbregerhgrthr" }]
var tyen = [{ title: "🔁 Refresh", command: "rgbregerhgrthr" }]

if(idi.value() == 1){
if (depr == undefined) {
  Bot.sendMessage("*✋ Espere... Estamos generando su dirección de deposito de TRX...*")
  Bot.runCommand("depo")
} else {
Bot.sendMessage("*💵 Recuerde enviar mínimo* `10.00000` *TRX a la siguiente dirección:*")
Bot.sendMessage("`"+wallset+"`")
Bot.sendInlineKeyboard(tyes,"*✅ Luego de hacer su deposito presione el botón de abajo para que el bot detecte su deposito.*")
}
}else{
if(idi.value() == 0){
if (depr == undefined) {
  Bot.sendMessage("*✋ Wait... We are generating your trx deposit address...*")
  Bot.runCommand("depo")
} else {
Bot.sendMessage("*💵 Remember to send a minimum* `10.00000` *TRX to the following address:*")
Bot.sendMessage("`"+wallset+"`")
Bot.sendInlineKeyboard(tyen,"*✅ After making your deposit, press the bottom button so that the Bot detects its deposit.*")
}
}
}
