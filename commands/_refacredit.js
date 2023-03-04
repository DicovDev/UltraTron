/*CMD
  command: /refacredit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let refref = Libs.ResourcesLib.userRes("comixref");
var idi = Libs.ResourcesLib.userRes("idioma")
let earn = Libs.ResourcesLib.anotherChatRes("earning", "global")
var sr = Libs.ResourcesLib.userRes("sr")
var lv1 = Bot.getProperty("lv1"+user.telegramid)

if(sr.value() == 0){return}
if (lv1) {
var res1 = Libs.ResourcesLib.anotherUserRes("balance",lv1)
var ref1 = Libs.ResourcesLib.anotherUserRes("refcom",lv1)
var earn1 = Libs.ResourcesLib.anotherUserRes("earning",lv1)
earn.add(refref.value()*0.06)
earn1.add(refref.value()*0.06)
res1.add(refref.value()*0.06)
ref1.add(refref.value()*0.06)
Bot.sendMessageToChatWithId(lv1, "🎉 *You've received* `"+refref.value()*0.06+"` *TRX For level 1 referral commissions*")
}
refref.add(-refref.value())
