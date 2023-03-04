/*CMD
  command: reinvest
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("channel")
var rei = Libs.ResourcesLib.userRes("reinvest")
var inv = Libs.ResourcesLib.userRes("invest")
var bal = Libs.ResourcesLib.userRes("balance")
let reig = Libs.ResourcesLib.anotherChatRes("reinvest", "global")
let invg = Libs.ResourcesLib.anotherChatRes("invest", "global")
var hii = User.getProperty("historyi")
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
var amount = message*1
var gan = amount*1.2

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
if(!isNumeric(amount)){
Bot.sendMessage("*❌ Enter only numerical values.*",{is_reply:true})
return}
if(amount < 10 ){
Bot.sendMessage("*❌ Minimum reinvestment:* `10.00000` *TRX*")
return}
if(amount > bal.value()){
Bot.sendMessage("*❌ Insufficient balance for this reinvestment.*")
return}

if(amount>= 10 && amount <=100000000){
Bot.sendMessage("*✅ Investment initiated successfully.*");
Api.sendMessage ({chat_id: key, text: "*🔄 New reinvestment:\n\n👤 User ID:* `"+user.first_name+"` *~* `"+user.telegramid+"`\n*💵 Amount:* `"+amount.toFixed(5)+"` *TRX\n\n🤖 User bot: @"+bot.name+"*",parse_mode : "Markdown" , disable_web_page_preview: true
});
if(hii){
var dat = "*🔄\n\n💵 Amount:* `"+amount.toFixed(5)+"` *TRX\n🎁 Profits:* `"+gan.toFixed(5)+"` *TRX\n⏱ Duration:* `24` *Hours\n🌅 Start date:* `"+time+"`\n\n\n"+hii+""
User.setProperty("historyi",dat,"string")
}else{
var dat = "*🔄\n\n💵 Amount:* `"+amount.toFixed(5)+"` *TRX\n🎁 Profits:* `"+gan.toFixed(5)+"` *TRX\n⏱ Duration:* `24` *Hours\n🌅 Start date:* `"+time+"`"
User.setProperty("historyi",dat,"string")
}
rei.add(+amount)
inv.add(+amount)
bal.add(-amount)
reig.add(+amount)
invg.add(+amount)
var claim = Bot.getProperty("claim"+user.telegramid);
Bot.setProperty("claim"+user.telegramid, Date.now(), "integer");
}else{
Bot.sendMessage("*❌ Monto incorrecto.*")
}
