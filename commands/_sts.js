/*CMD
  command: /sts
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📊 estadisticas, 📊 status
CMD*/

var idi = Libs.ResourcesLib.userRes("idioma")
let users = Libs.ResourcesLib.anotherChatRes("users", "global");
let dep = Libs.ResourcesLib.anotherChatRes("deposit", "global");
let rei = Libs.ResourcesLib.anotherChatRes("reinvest", "global");
let inv = Libs.ResourcesLib.anotherChatRes("invest", "global");
let ear = Libs.ResourcesLib.anotherChatRes("earning", "global");
let wit = Libs.ResourcesLib.anotherChatRes("withdraw", "global");

if(idi.value() == 1){
Bot.sendMessage("*👥 Usuarios totales:\n* `"+users.value()+"` *Usuarios\n\n⬇️ Total depositado:\n* `"+dep.value().toFixed(5)+"` *TRX\n\n🔄 Total reinvertido:\n* `"+rei.value().toFixed(5)+"` *TRX\n\n🔰 Invertido actualmente:\n* `"+inv.value().toFixed(5)+"` *TRX\n\n🎉 Total ganado:\n* `"+ear.value().toFixed(5)+"` *TRX\n\n⬆️ Total retirado:\n* `"+wit.value().toFixed(5)+"` *TRX*")
}else{
if(idi.value() == 0){
Bot.sendMessage("*👥 Total users:\n* `"+users.value()+"` *Users\n\n⬇️ Total deposit:\n* `"+dep.value().toFixed(5)+"` *TRX\n\n🔄 Total reinvest:\n* `"+rei.value().toFixed(5)+"` *TRX\n\n🔰 Currently inverted:\n* `"+inv.value().toFixed(5)+"` *TRX\n\n🎉 Total earning:\n* `"+ear.value().toFixed(5)+"` *TRX\n\n⬆️ Total withdraw:\n* `"+wit.value().toFixed(5)+"` *TRX*")
}
}
