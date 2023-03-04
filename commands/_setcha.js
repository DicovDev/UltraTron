/*CMD
  command: /setcha
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ⛔ *Select the transaction channel Example: @NotiPagos*
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_chat")
if(user.telegramid == admin){
Bot.setProperty("channel",message,"string")
Bot.sendMessage("✅ Transaction channel established: "+message+"")
}else{
return}
