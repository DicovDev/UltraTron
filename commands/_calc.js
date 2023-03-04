/*CMD
  command: /calc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *💻 Enter the amount you plan to invest:*

  <<KEYBOARD

  KEYBOARD
  aliases: 💻 calculadora, 💻 calculator
CMD*/

var idi = Libs.ResourcesLib.userRes("idioma")

var amount = message*1
var day = amount*1.1

if(idi.value() == 1){
if (amount>= 10 && amount <=10000000000){
Bot.sendMessage("*💻 Calculadora de ganancias 💻\n\n📊 Plan:* `110%` *En 24 horas\n\n🔰 Inversión:* `"+amount.toFixed(5)+"` *TRX\n\n💹 Al final:* `"+day.toFixed(5)+"` *TRX*")
}else{
Bot.runCommand("/main")
}
}else{
if(idi.value() == 0){
if (amount>= 10 && amount <=10000000000){
Bot.sendMessage("*💻 Profit calculator 💻\n\n📊 Plan:* `110%` *In 24 hours\n\n🔰 Investment:* `"+amount.toFixed(5)+"` *TRX\n\n💹 A end:* `"+day.toFixed(5)+"` *TRX*")
}else{
Bot.runCommand("/main")
}
}
}
