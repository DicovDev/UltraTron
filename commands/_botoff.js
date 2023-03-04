/*CMD
  command: /botoff
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
bot.add(+1)
Bot.sendMessage("*⛔️ Bot OFF*")
}else{
return}
