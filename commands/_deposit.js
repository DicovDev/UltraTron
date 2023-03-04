/*CMD
  command: /deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ⬇️ deposit, ⬇️ depositar
CMD*/

var idi = Libs.ResourcesLib.userRes("idioma")
if(idi.value() == 1){
Bot.sendInlineKeyboard([[{title:'USDT',command:'/depoo' },{title:'TRX',command:'/depo' }]],'*💱 Selecciona tu método de pago:*')
}
if(idi.value() == 0){
Bot.sendInlineKeyboard([[{title:'USDT',command:'/depoo' },{title:'TRX',command:'/depo' }]],'*💱 Select your payment method:*')
}
