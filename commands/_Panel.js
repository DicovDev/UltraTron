/*CMD
  command: /Panel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
var key2 = [[{title:"🏦 Check Balance",command:"/checku"}],[{title:"🔄 Change Balance",command:"/add"},{title:"🎙 Broadcast",command:"/okas"}],[{title:"🛑 Ban User",command:"/banuser"},{title:"✅ Unban User",command:"/unbanuser"}],[{title:"⛔ Bot Off",command:"/botoff"},{title:"✅ Bot On",command:"/boton"}],[{title:"🔕 Set Channel",command:"/setcha"}],[{title:"💳 Set wallet",command:"/adminwallet"},{title:"⛓ Private tronlink key ",command:"/adminkey"}],[{title:"✴️ Clone This Bot",command:"Clone This Bot"}]]

Bot.sendInlineKeyboard(key2,"*Hey* " +user.first_name+ "\nWelcome To the admin panel" + "\nWarning when using this panel please don't send any other command it may spoil your work")
}else{
return
}
