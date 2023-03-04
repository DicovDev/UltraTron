/*CMD
  command: /history
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var hid = User.getProperty("historyd")
var hii = User.getProperty("historyi")
var hiw = Bot.getProperty('historyw'+user.telegramid)
let idi = Libs.ResourcesLib.userRes("idioma");
let invest = Libs.ResourcesLib.userRes("reinvest");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
let deposit = Libs.ResourcesLib.userRes("deposit");
var buttones = [{ title : "⬅️ Regresar" , command : "/history" }]
var buttonen = [{ title : "⬅️ Return" , command : "/history" }]

if(idi.value() == 1){
if(params){
if(params=="d"){
if(hid == undefined){
Bot.sendInlineKeyboard(buttones,"*⬇️ Historial de depositos:\n\nNada 🤷🏻‍♂️*")
}else{
Bot.sendInlineKeyboard(buttones,"*⬇️ Historial de depositos:*\n\n"+hid)
}
} else {
if(params=="i"){
if(hii == undefined){
Bot.sendInlineKeyboard(buttones,"*🔄 Historial de reinversiones:\n\nNada 🤷🏻‍♂️*")
}else{
Bot.sendInlineKeyboard(buttones,"*🔄 Historial de reinversiones:*\n\n"+hii)
}
} else {
if(params=="w"){
if(hiw == undefined){
Bot.sendInlineKeyboard(buttones,"*⬆️ Historial de retiros:\n\nNada 🤷🏻‍♂️*")
}else{
Bot.sendInlineKeyboard(buttones,"*⬆️ Historial de retiros:*\n\n"+hiw)
}
}
}
}
}else{
Bot.sendInlineKeyboard([[{title:'⬇️ Historial de depositos', command:'/history d'},{title:'⬆️ Historial de retiros', command:'/history w'}],[{title:'🔄 Historial de reinversiones',command:'/history i'}],[{title:'⬅️ Regresar', command:'/balance' }]],"*👤 Información de la cuenta:\n- - - - - - - - - - - - - - - - - - - - - - - - - -\n🤵 Nombre:* `"+user.first_name+"`\n*- - - - - - - - - - - - - - - - - - - - - - - - - -\n🆔 Tu ID:* `"+user.telegramid+"`\n*- - - - - - - - - - - - - - - - - - - - - - - - - -\n⬇️ *`"+deposit.value().toFixed(5)+"` *TRX Depositados\n\n🔄 *`"+invest.value().toFixed(5)+"` *TRX Reinvertidos\n\n⬆️ *`"+withdraw.value().toFixed(5)+"` *TRX Retirados*")
}
}else{
if(idi.value() == 0){
if(params){
if(params=="d"){
if(hid == undefined){
Bot.sendInlineKeyboard(buttonen,"*⬇️ Deposit history:\n\nNone 🤷🏻‍♂️*")
}else{
Bot.sendInlineKeyboard(buttonen,"*⬇️ Deposit history:*\n\n"+hid)
}
} else {
if(params=="i"){
if(hii == undefined){
Bot.sendInlineKeyboard(buttonen,"*🔄 Reinvestment history:\n\nNone 🤷🏻‍♂️*")
}else{
Bot.sendInlineKeyboard(buttonen,"*🔄 Reinvestment history:*\n\n"+hii)
}
} else {
if(params=="w"){
if(hiw == undefined){
Bot.sendInlineKeyboard(buttonen,"*⬆️ Withdraw history:\n\nNone 🤷🏻‍♂️*")
}else{
Bot.sendInlineKeyboard(buttonen,"*⬆️ Withdraw history:*\n\n"+hiw)
}
}
}
}
}else{
Bot.sendInlineKeyboard([[{title:'⬇️ Deposit history', command:'/history d'},{title:'⬆️ Withdraw history', command:'/history w'}],[{title:'🔄 Reinvestment history',command:'/history i'}],[{title:'⬅️ Return', command:'/balance' }]],"*👤 Account information:\n- - - - - - - - - - - - - - - - - - - - - - - - - -\n🤵 Name:* `"+user.first_name+"`\n*- - - - - - - - - - - - - - - - - - - - - - - - - -\n🆔 Your ID:* `"+user.telegramid+"`\n*- - - - - - - - - - - - - - - - - - - - - - - - - -\n⬇️ *`"+deposit.value().toFixed(5)+"` *TRX Deposit\n\n🔄 *`"+invest.value().toFixed(5)+"` *TRX Reinvested\n\n⬆️ *`"+withdraw.value().toFixed(5)+"` *TRX Withdrawn*")
}
}
}
