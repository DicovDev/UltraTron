/*CMD
  command: ref
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var sr = Libs.ResourcesLib.userRes("sr")
if(sr.value() == 0){return}
var ok = User.getProperty("res","no")
var user_link = Libs.commonLib.getLinkFor(user)
if (ok == "Hi"){return}
var referrer = Libs.ReferralLib.currentUser.attractedByUser()
var prim = Bot.getProperty("lv1")
if (referrer) {
var n1 = Libs.ResourcesLib.anotherUserRes("lv1",referrer.telegramid)
n1.add(1)
Bot.setProperty("refi"+user.telegramid,referrer.telegramid,"string")
Bot.sendMessageToChatWithId(referrer.telegramid, "*✪ New referral level: 1*")
var list = Bot.getProperty('List'+referrer.telegramid)
if(list){
var n = '\n'+user_link+''+list
Bot.setProperty('List'+referrer.telegramid,n,'string')
}else{
var n = '\n'+user_link+'\n'
Bot.setProperty('List'+referrer.telegramid,n,'string')
}
}
User.setProperty("res","Hi","string")
