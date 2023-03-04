/*CMD
  command: /boton
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_chat")
if(user.telegramid == admin){
let bot = Libs.ResourcesLib.anotherChatRes("botbotbot", "global")
bot.add(-bot.value())
Bot.sendMessage("*✅ Bot ON*")
}else{
return}
