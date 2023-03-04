/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var sr = Libs.ResourcesLib.userRes("sr")
Bot.setProperty('name'+user.telegramid,user.first_name,'string')
var button = [{ title : "✅ Done" , command : "/joined" }]
var key = Bot.getProperty("channel")
let tota = Libs.ResourcesLib.anotherChatRes("users", "global")
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
var his = Bot.getProperty("st"+user.telegramid)
if(!his){
Bot.setProperty("st"+user.telegramid,time,"string")
tota.add(1)
}
function hello(message) {
  var greetings = ""
 //Bot.sendMessage(message)
  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
//
}

function doAttracted(channel) {
  //hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
//Bot.sendMessage(refUser)
Bot.setProperty("lv1"+user.telegramid,refUser.telegramid,"string")
sr.set(1)
}

function doAlreadyAttracted(){}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}
Libs.ReferralLib.currentUser.track(trackOptions);
if(!user.username){
Bot.sendMessage('You need to have a username')
return}
Bot.sendInlineKeyboard(button,"*✅ To use this bot you must join this channel:\n\n📢 Oficial channel:* *"+key+"*",{disable_web_page_preview: true
});
