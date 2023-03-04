/*CMD
  command: /list
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var list = Bot.getProperty('List'+user.telegramid)

if(list){
Bot.sendMessage('Users List:\n'+list)
}else{
Bot.sendMessage('♻️ It has no affiliates')
}

