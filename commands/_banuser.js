/*CMD
  command: /banuser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🔒 Send the ID of the User you want to ban ⤵️
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let amount = parseFloat(message)
let tgid = message
let res = Libs.ResourcesLib.anotherUserRes("userbam", tgid)
res.set(1)
Bot.sendMessage("*✅ User "+message+" has been banned *");
}else{
return
}

//You need to send amount after

