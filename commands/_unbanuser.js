/*CMD
  command: /unbanuser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🔓 Send the ID of the User to whom you want to remove the ban status ⤵️
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let amount = parseFloat(message)
let tgid = message
let res = Libs.ResourcesLib.anotherUserRes("userbam", tgid)
res.set(0)
Bot.sendMessage("*✅ User "+message+" The User can enjoy the benefits of the bot again *");
}else{
return
}

