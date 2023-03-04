/*CMD
  command: /reinvest
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🔄 reinvertir, 🔄 reinvest
CMD*/

let idi = Libs.ResourcesLib.userRes("idioma")
let balance = Libs.ResourcesLib.userRes("balance")

if(idi.value() == 1){
if(balance.value() < 10){
Bot.sendMessage("*❌ Mínimo de reinversión:* `10.00000` *TRX*")
}else{
Bot.sendMessage("*🔄 ¿Cuanto desea reinvertir?\n\n➖ Mínimo:* `10.00000` *TRX\n\n➕ Máximo:* `"+balance.value().toFixed(5)+"` *TRX*")
Bot.runCommand("reinvest")
}
}else{
if(idi.value() == 0){
if(balance.value() < 10){
Bot.sendMessage("*❌ Minimum reinvestment:* `10.00000` *TRX*")
}else{
Bot.sendMessage("*🔄 How much you want to reinvest?\n\n➖ Minimum:* `10.00000` *TRX\n\n➕ Maximum:* `"+balance.value().toFixed(5)+"` *TRX*")
Bot.runCommand("reinvest")
}
}
}
