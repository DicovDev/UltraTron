/*CMD
  command: /add
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send User ID:*
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("add");
}else{
return
}
