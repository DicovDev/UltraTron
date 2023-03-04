/*CMD
  command: /adminwallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send your Wallet Trx where you will receive the deposits:*
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_chat")
if(user.telegramid == admin){
Bot.setProperty("adminwallet",message,"string")
Bot.sendMessage("✅ Wallet TRX established: "+message+"")
}else{
return}
