/*CMD
  command: /message
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📞 *Now you are in direct contact with our administrator *
You can send here any message you want to send, the administrator will receive it and send an answer directly here in the chat.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🆘 support, 🆘 soporte
CMD*/

var idi = Libs.ResourcesLib.userRes("idioma")
var admin_chat = Bot.getProperty("admin_chat")
let inf ="[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
var b = [[{title: "📝 Reply",command: "/reply" + user.telegramid}]]
Bot.sendInlineKeyboardToChatWithId(admin_chat,b,"*📩 New support message\n👤 User:* "+inf+"\n*✉️ Message:* "+message+"")

if(idi.value() == 1){
Bot.sendMessage("*✅ Mensaje enviado al administrador.*")
}else{
if(idi.value() == 0){
Bot.sendMessage("*✅ Message sent to the administrator.*")
}
}
