/*CMD
  command: check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var userid= options.result.status;
User.setProperty("status" , userid, "string");
if (userid=="member" | userid =="administrator" | userid=="creator"){
Bot.runCommand("/idi")
User.addToGroup("user")
}

if (userid=="left"){
var button = [{ title : "⬅️ Return" , command : "/start" }]
Bot.sendInlineKeyboard(button,"*⛔ You must join all channels.*")
}
