/*CMD
  command: /onwith
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var git = JSON.parse(content) 
var txn_id = git.response.txid
let amo = User.getProperty("amo","")
var amount = amo*1
var c = Bot.getProperty("channel")
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
var id = user.telegramid
var his = Bot.getProperty("historyw"+id)
var value = CurrencyQuote.convert({ amount: amount, from: "TRX", to: "USD"})
Api.sendMessage ({chat_id: c, text: "*⬆️ New Withdrawal:\n\n👤 User ID:* `"+user.telegramid+"`\n*💵 Amount:* `"+amount.toFixed(5)+"` *TRX ~ $*`"+value.toFixed(3)+"` *USD\n\n⛓ Transaction Hash:* `"+txn_id+"`*\n\n🤖 Bot User:* *@"+bot.name+"*",parse_mode : "Markdown" , disable_web_page_preview: true
});
if(his){
var dat = "*⬆️\n\n💵 Amount:* `"+amount.toFixed(5)+"` *TRX ~ $*`"+value.toFixed(3)+"` *USD\n\n⛓ Transaction Hash:* `"+txn_id+"`\n*🌅 Date:* `"+time+"`\n\n\n"+his+""
Bot.setProperty('historyw'+id,dat,'string')
}else{
var dat = "*⬆️\n\n💵 Amount:* `"+amount.toFixed(5)+"` *TRX ~ $*`"+value.toFixed(3)+"` *USD\n\n⛓ Transaction Hash:* `"+txn_id+"`\n*🌅 Date:* `"+time+"`"
Bot.setProperty('historyw'+id,dat,'string')
}
Bot.sendMessage("*✅ Withdrawal processed successfully\n\n💵 Amount:* `"+amount.toFixed(5)+"` *TRX ~ $*`"+value.toFixed(3)+"` *USD\n\n⛓ Transaction Hash:* `"+txn_id+"`")
