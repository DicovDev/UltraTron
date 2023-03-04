/*CMD
  command: /adminkey
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send your private key of tronlink*
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_chat")
if(user.telegramid == admin){
Bot.setProperty("privateadminkey",message,"string")
Bot.sendMessage("✅ Private key established: "+message+"")
}else{
return}
