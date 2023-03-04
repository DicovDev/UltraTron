/*CMD
  command: 🏦
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var idi = Libs.ResourcesLib.userRes("idioma")
let dep = Libs.ResourcesLib.userRes("deposit");
let rei = Libs.ResourcesLib.userRes("reinvest");
let inv = Libs.ResourcesLib.userRes("invest");
let bal = Libs.ResourcesLib.userRes("balance");
let wit = Libs.ResourcesLib.userRes("withdraw");
let ear = Libs.ResourcesLib.userRes("earning");
var tyes = [[{ title: "🎁 Reclamar", command: "/claim" }],[{ title: "🗃 Historial", command: "/history" }]]
var tyen = [[{ title: "🎁 Claim", command: "/claim" }],[{ title: "🗃 History", command: "/history" }]]

if(idi.value() == 1){
Bot.sendInlineKeyboard(tyes,"*🏦 Estado de cuenta:\n\n⬇️ Total depositado:\n* `"+dep.value().toFixed(5)+"` *TRX\n\n🔄 Total reinvertido:\n* `"+rei.value().toFixed(5)+"` *TRX\n\n🔰 Invertido actualmente:\n* `"+inv.value().toFixed(5)+"` *TRX\n\n💵 Saldo disponible:\n* `"+bal.value().toFixed(5)+"` *TRX\n\n🎉 Total ganado:\n* `"+ear.value().toFixed(5)+"` *TRX\n\n⬆️ Total retirado:\n* `"+wit.value().toFixed(5)+"` *TRX*");
}else{
if(idi.value() == 0){
Bot.sendInlineKeyboard(tyen,"*🏦 Account status:\n\n⬇️ Total deposit:\n* `"+dep.value().toFixed(5)+"` *TRX\n\n🔄 Total reinvest:\n* `"+rei.value().toFixed(5)+"` *TRX\n\n🔰 Currently inverted:\n* `"+inv.value().toFixed(5)+"` *TRX\n\n💵 Available balance:\n* `"+bal.value().toFixed(5)+"` *TRX\n\n🎉 Total earning:\n* `"+ear.value().toFixed(5)+"` *TRX\n\n⬆️ Total withdraw:\n* `"+wit.value().toFixed(5)+"` *TRX*");
}
}
