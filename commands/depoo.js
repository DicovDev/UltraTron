/*CMD
  command: depoo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let idi = Libs.ResourcesLib.userRes("idioma");
var admin = Bot.getProperty("admin_chat")
var button = [[{title:'Accept deposit', command:'/Pay '+user.telegramid+' '+message}]]
Bot.sendInlineKeyboardToChatWithId(admin,button,"*⬇️ New deposit:\n\n🤵 User:* `"+user.first_name+"`\n*🆔 User ID:* `"+user.telegramid+"`\n*⛓ Transaction hash*: `"+message+"`")
if(idi.value() == 0){
Bot.sendMessage("*⬇️ Deposit in process. This process takes from 5 minutes to 6 hours, if it takes longer please contact an administrator.*")
Bot.runCommand("/main")
}
if(idi.value() == 1){
Bot.sendMessage("*⬇️ Deposito en proceso. Este proceso tarde de 5 minutos a 6 horas, si tarda mas por favor comuníquese con un administrador.*")
Bot.runCommand("/main")
}
