/*CMD
  command: /main
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ⬅️ regresar, ⬅️ return
CMD*/

var bal = Libs.ResourcesLib.userRes("balance")
var idi = Libs.ResourcesLib.userRes("idioma")

if (idi.value() == 1) {
Bot.sendKeyboard("🏦 "+bal.value().toFixed(5)+" TRX\n⬇️ Depositar, 🔄 Reinvertir, ⬆️ Retirar\n🆘 Soporte, 💻 Calculadora, 👥 Invitar\n📊 Estadisticas","🔝 Menú principal.")
}
if(idi.value() == 0){
Bot.sendKeyboard("🏦 "+bal.value().toFixed(5)+" TRX\n⬇️ Deposit, 🔄 Reinvest, ⬆️ Withdraw\n🆘 Support, 💻 Calculator, 👥 Invite\n📊 Status","🔝 Main menu.")
}
var his = User.getProperty('ref1')
if(!his){
Bot.runCommand('ref')
User.setProperty('ref1','1','string')
}
