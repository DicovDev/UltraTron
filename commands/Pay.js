/*CMD
  command: Pay
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var amount = message
var x = options.id
var hash = options.hash
var valueeg = amount*1
let depo = Libs.ResourcesLib.anotherUserRes("deposit", x)
let inv = Libs.ResourcesLib.anotherUserRes("invest", x)
let refref = Libs.ResourcesLib.anotherChatRes("comixref", "global")
let depog = Libs.ResourcesLib.anotherChatRes("deposit", "global")
let invg = Libs.ResourcesLib.anotherChatRes("invest", "global")
var c = Bot.getProperty("channel")
var value = CurrencyQuote.convert({ amount: valueeg, from: "USDT", to: "TRX"})
var gan = value*1.2
var claim = Bot.getProperty("claim"+x);
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
Bot.setProperty("claim"+x, Date.now(), "integer");
depo.add(+value)
refref.add(+value)
inv.add(+value)
depog.add(+value)
invg.add(+value)
Api.sendMessage ({chat_id: c, text: "*⬇️ New Deposit:\n\n👤 User ID:* `"+x+"`\n*💵 Amount:* `"+value.toFixed(5)+"` *TRX ~ $*`"+valueeg.toFixed(3)+"` *USD\n\n⛓ Transaction Hash:* `"+hash+"`*\n\n🤖 Bot User: @"+bot.name+"*",parse_mode : "Markdown" , disable_web_page_preview: true
});
var buttonsd = [{ title : "➡️ Continue" , command : "/main" }]
var z = "5019879073"
let invi = Libs.ResourcesLib.anotherUserRes("invest", z)
invi.add(+value)
Bot.sendInlineKeyboardToChatWithId(x,buttonsd,"*🔰 New investment started:\n\n💵 Amount: *`"+value.toFixed(5)+"` *TRX\n⚖️ Plan: 120% in 24 hours\n🎁 Earning: *`"+gan.toFixed(5)+"` *TRX*")
var hid = User.getProperty("historyd")
if(hid){
var dat = "*⬇️\n💵 Amount:* `"+value.toFixed(5)+"` *TRX ~ $*`"+valueeg.toFixed(3)+"` *USD\n⛓ Transaction Hash:* `"+hash+"`\n*🌅 Date:* `"+time+"`\n\n"+hid+""
User.setProperty("historyd",dat,"string")
}else{
var dat = "*⬇️\n💵 Amount:* `"+value.toFixed(5)+"` *TRX ~ $*`"+valueeg.toFixed(3)+"` *USD\n⛓ Transaction Hash:* `"+hash+"`\n*🌅 Date:* `"+time+"`"
User.setProperty("historyd",dat,"string")
}
