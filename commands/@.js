/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ Te han baneado*");
return
}
let bott = Libs.ResourcesLib.anotherChatRes("botbotbot", "global")
if (bott.value() == 1){
var admin = Bot.getProperty("admin_chat")
if(user.telegramid == admin){
}else{
Bot.sendMessage("*⛔️ Bot OFF*");
return
}
}
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
