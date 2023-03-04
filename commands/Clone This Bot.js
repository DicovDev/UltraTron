/*CMD
  command: Clone This Bot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send mail Bot business*
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin")
if(user.telegramid == admin){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done!!")
}else{
Bot.sendMessage("👻😲")
}
