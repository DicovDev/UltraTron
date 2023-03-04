/*CMD
  command: /completedepo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var gt = JSON.parse(content)
var amount = gt.Amount
let idi = Libs.ResourcesLib.userRes("idioma");

if(idi.value() == 1){
if (amount == undefined) {
  Bot.sendMessage("*❌ Deposito no encontrado..*")
}else{
var amodepo = Libs.ResourcesLib.userRes("amountdepo")
var valuee = amodepo.value()+amount
var value7 = 10-valuee
if(valuee < 10){
var button = [{ title : "⬅️ Regresar" , command : "/depo" }]
Bot.sendInlineKeyboard(button,"*❌ Minimo de deposito:* `10.00000` *TRX, su deposito es menor al minimo, deposite* `"+value7.toFixed(5)+"` *TRX mas para validar su deposito.*")
amodepo.add(+amount)
}else{
var amodepo = Libs.ResourcesLib.userRes("amountdepo")
var valueeg = amodepo.value()+amount
let depo = Libs.ResourcesLib.userRes("deposit");
let inv = Libs.ResourcesLib.userRes("invest");
let refref = Libs.ResourcesLib.userRes("comixref");
let depog = Libs.ResourcesLib.anotherChatRes("deposit", "global")
let invg = Libs.ResourcesLib.anotherChatRes("invest", "global")
let txn_id = gt.response.transaction.txID
var c = Bot.getProperty("channel")
var value = CurrencyQuote.convert({ amount: valueeg, from: "TRX", to: "USD"})
var gan = valueeg*1.2
var claim = Bot.getProperty("claim"+user.telegramid);
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
Bot.setProperty("claim"+user.telegramid, Date.now(), "integer");
depo.add(+valueeg)
refref.add(+valueeg)
inv.add(+valueeg)
depog.add(+valueeg)
invg.add(+valueeg)
Bot.runCommand("/refacredit")
Api.sendMessage ({chat_id: c, text: "*⬇️ New Deposit:\n\n👤 User ID:* `"+user.telegramid+"`\n*💵 Amount:* `"+valueeg.toFixed(5)+"` *TRX ~ $*`"+value.toFixed(3)+"` *USD\n\n⛓ Transaction Hash:* `"+txn_id+"`*\n\n🤖 Bot User:* *@"+bot.name+"*",parse_mode : "Markdown" , disable_web_page_preview: true
});
var buttonsd = [{ title : "➡️ Continuar" , command : "/main" }]
Bot.sendInlineKeyboard(buttonsd,"*🔰 Nueva inversion iniciada:\n\n💵 Monto: *`"+valueeg.toFixed(5)+"` *TRX\n⚖️ Plan: 120% en 24 horas\n🎁 beneficio: *`"+gan.toFixed(5)+"` *TRX\n\n⛓ Hash de la transaccion:* `"+txn_id+"`")
var hid = User.getProperty("historyd")
if(hid){
var dat = "*⬇️\n\n💵 Monto:* `"+valueeg.toFixed(5)+"` *TRX ~ $*`"+value.toFixed(3)+"` *USD\n⛓ Hash de la transacción:* `"+txn_id+"`\n*🌅 Fecha:* `"+time+"`\n\n\n"+hid+""
User.setProperty("historyd",dat,"string")
}else{
var dat = "*⬇️\n\n💵 Monto:* `"+valueeg.toFixed(5)+"` *TRX ~ $*`"+value.toFixed(3)+"` *USD\n⛓ Hash de la transacción:* `"+txn_id+"`\n*🌅 Fecha:* `"+time+"`"
User.setProperty("historyd",dat,"string")
}
amodepo.add(-amodepo.value())
}
}
}else{
if(idi.value() == 0){
if (amount == undefined) {
  Bot.sendMessage("*❌ Your deposit has not been found.*")
}else{
var amodepo = Libs.ResourcesLib.userRes("amountdepo")
var valuee = amodepo.value()+amount
var value7 = 10-valuee
if(valuee < 10){
var button = [{ title : "⬅️ Return" , command : "/depo" }]
Bot.sendInlineKeyboard(button,"*❌ Deposit Minimum:* `10.00000` *TRX, your deposit has not been lost, but deposit* `"+value7.toFixed(5)+"` *TRX more to be able to validate your deposit.*")
amodepo.add(+amount)
}else{
var amodepo = Libs.ResourcesLib.userRes("amountdepo")
var valueeg = amodepo.value()+amount
let depo = Libs.ResourcesLib.userRes("deposit");
let inv = Libs.ResourcesLib.userRes("invest");
let refref = Libs.ResourcesLib.userRes("comixref");
let depog = Libs.ResourcesLib.anotherChatRes("deposit", "global")
let invg = Libs.ResourcesLib.anotherChatRes("invest", "global")
let txn_id = gt.response.transaction.txID
var c = Bot.getProperty("channel")
var value = CurrencyQuote.convert({ amount: valueeg, from: "TRX", to: "USD"})
var gan = valueeg*1.2
var claim = User.getProperty("claim");
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
User.setProperty("claim", Date.now(), "integer");
depo.add(+valueeg)
refref.add(+valueeg)
inv.add(+valueeg)
depog.add(+valueeg)
invg.add(+valueeg)
Bot.runCommand("/refacredit")
Api.sendMessage ({chat_id: c, text: "*⬇️ New Deposit:\n\n👤 User ID:* `"+user.telegramid+"`\n*💵 Amount:* `"+valueeg.toFixed(5)+"` *TRX ~ $*`"+value.toFixed(3)+"` *USD\n\n⛓ Transaction Hash:* `"+txn_id+"`*\n\n🤖 Bot User:* *@"+bot.name+"*",parse_mode : "Markdown" , disable_web_page_preview: true
});
var buttonsd = [{ title : "➡️ Continue" , command : "/main" }]
Bot.sendInlineKeyboard(buttonsd,"*🔰 New investment started:\n\n💵 Amount: *`"+valueeg.toFixed(5)+"` *TRX\n⚖️ Plan: 120% In 24 hours\n🎁 Profits: *`"+gan.toFixed(5)+"` *TRX\n\n⛓ Transaction hash:* `"+txn_id+"`")
var hid = User.getProperty("historyd")
if(hid){
var dat = "*⬇️\n\n💵 Amount:* `"+valueeg.toFixed(5)+"` *TRX ~ $*`"+value.toFixed(3)+"` *USD\n⛓ Transaction Hash:* `"+txn_id+"`\n*🌅 Date:* `"+time+"`\n\n\n"+hid+""
User.setProperty("historyd",dat,"string")
}else{
var dat = "*⬇️\n\n💵 Amount:* `"+valueeg.toFixed(5)+"` *TRX ~ $*`"+value.toFixed(3)+"` *USD\n⛓ Transaction Hash:* `"+txn_id+"`\n*🌅 Date:* `"+time+"`"
User.setProperty("historyd",dat,"string")
}
amodepo.add(-amodepo.value())
}
}
}
}
