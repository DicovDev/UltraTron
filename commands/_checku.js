/*CMD
  command: /checku
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send User ID:*
  keyboard: 
  aliases: 
CMD*/

let msg = message
var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let bal = Libs.ResourcesLib.anotherUserRes("balance", msg)
let rei = Libs.ResourcesLib.anotherUserRes("reinvest", msg)
let dep = Libs.ResourcesLib.anotherUserRes("deposit", msg)
let inv = Libs.ResourcesLib.anotherUserRes("invest", msg)
let wit = Libs.ResourcesLib.anotherUserRes("withdraw", msg)
let ear = Libs.ResourcesLib.anotherUserRes("earning", msg)
Bot.sendMessage("*🏦 Account status:\n\n⬇️ Total deposit:\n* `"+dep.value().toFixed(5)+"` *TRX\n\n🔄 Total reinvest:\n* `"+rei.value().toFixed(5)+"` *TRX\n\n🔰 Currently inverted:\n* `"+inv.value().toFixed(5)+"` *TRX\n\n💵 Available balance:\n* `"+bal.value().toFixed(5)+"` *TRX\n\n🎉 Total earning:\n* `"+ear.value().toFixed(5)+"` *TRX\n\n⬆️ Total withdraw:\n* `"+wit.value().toFixed(5)+"` *TRX*");
}else{
return
}
