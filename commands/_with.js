/*CMD
  command: /with
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ⬆️ withdraw, ⬆️ retirar
CMD*/

var idi = Libs.ResourcesLib.userRes("idioma")
if(idi.value() == 0 ){
var dep = Libs.ResourcesLib.userRes("deposit")
if(dep.value() < 10 ){
Bot.sendMessage("*❌ To withdraw, you must make at least one deposit*")
}else{
var bal = Libs.ResourcesLib.userRes("balance")
if(bal.value() < 10 ){
Bot.sendMessage("*❌ You can't withdraw right now: You need at least 10 TRX to withdraw!*")
}else{
if(bal.value() > 9.99 ){
Bot.sendMessage("*✅ All withdrawals are processed instantly\n\n📤 Submit your TRX wallet for withdrawal*")
Bot.runCommand("wallet")
}else{
}
}
}
}else{
if(idi.value() == 1 ){
var dep = Libs.ResourcesLib.userRes("deposit")
if(dep.value() < 10 ){
Bot.sendMessage("*❌ Para retirar, debe hacer al menos un depósito*")
}else{
var bal = Libs.ResourcesLib.userRes("balance")
if(bal.value() < 10 ){
Bot.sendMessage("*❌ No puede retirar en este momento: ¡Necesita al menos 10 TRX para retirar!*")
}else{
if(bal.value() > 9.99 ){
Bot.sendMessage("*✅ Todos los retiros se procesan al instante\n\n📤 Envíe su billetera TRX para retiro*")
Bot.runCommand("wallet")
}else{
}
}
}
}else{
}
}
