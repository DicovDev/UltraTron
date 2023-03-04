/*CMD
  command: /idi
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var idi = Libs.ResourcesLib.userRes("idioma")
if(params){
idi.set(params *1)
Bot.runCommand('/main')
return}
Bot.sendInlineKeyboard([[{title:'🇪🇸 Español', command:'/idi '+1}],[{title:'🇺🇸 English',command:'/idi '+0}]],"*🗣 Choose your language:*")
