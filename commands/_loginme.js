/*CMD
  command: /loginme
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let msg = "Access denied. Password is: `Incorrect`"

if(message=="192837465"){
  Bot.setProperty("admin_chat", chat.chatid, "string")
Bot.setProperty("admin", chat.chatid, "string")
  msg = "You admin now. Please wait messages from users";
}

Bot.sendMessage(msg);

