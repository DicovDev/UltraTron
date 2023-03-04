/*CMD
  command: /claim
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var idi = Libs.ResourcesLib.userRes("idioma")
let invest = Libs.ResourcesLib.userRes("invest");
if(idi.value() == 0){
if(invest.value() > 9){
var claim = Bot.getProperty("claim"+user.telegramid);
var dat = Date.now()
var res = dat-claim
var resss = res/1000
var ress = resss/60
var ressss = ress/60
var minutes = Math.floor(ress)
var min = 1440-minutes
var hou = min/60
var ho = Math.floor(hou)
var mi = ho*60
var m = min-mi
var hours = Math.floor(ressss)
var minutess = hours*60
var minutesss = minutes-minutess
if(minutes < 1440){
Bot.sendMessage("*❌ They are still missing:* `"+ho+"` *Hours and* `"+m+"` *Minutes*")
}else{
let inv = Libs.ResourcesLib.userRes("invest");
let bal = Libs.ResourcesLib.userRes("balance");
let invg = Libs.ResourcesLib.anotherChatRes("invest", "global")
let earg = Libs.ResourcesLib.anotherChatRes("earning", "global");
let ear = Libs.ResourcesLib.userRes("earning");
var invv = inv.value()*1.1
Bot.sendMessage("➕ `"+invv.toFixed(5)+"` *TRX Added to the balance*")
earg.add(+inv.value()*0.1)
ear.add(+inv.value()*0.1)
bal.add(+inv.value()*1.1)
invg.add(-inv.value())
inv.add(-inv.value())
}
}else{
Bot.sendMessage("*❌ There are no active investments*")
}
}else{
if(invest.value() > 9){
var claim = Bot.getProperty("claim"+user.telegramid);
var dat = Date.now()
var res = dat-claim
var resss = res/1000
var ress = resss/60
var ressss = ress/60
var minutes = Math.floor(ress)
var min = 1440-minutes
var hou = min/60
var ho = Math.floor(hou)
var mi = ho*60
var m = min-mi
var hours = Math.floor(ressss)
var minutess = hours*60
var minutesss = minutes-minutess
if(minutes < 1440){
Bot.sendMessage("*❌ Todavia faltan:* `"+ho+"` *Horas y* `"+m+"` *Minutos*")
}else{
let inv = Libs.ResourcesLib.userRes("invest");
let bal = Libs.ResourcesLib.userRes("balance");
let invg = Libs.ResourcesLib.anotherChatRes("invest", "global")
let earg = Libs.ResourcesLib.anotherChatRes("earning", "global");
let ear = Libs.ResourcesLib.userRes("earning");
var invv = inv.value()*1.1
Bot.sendMessage("➕ `"+invv.toFixed(5)+"` *TRX Añadidos a su balance*")
earg.add(+inv.value()*0.1)
ear.add(+inv.value()*0.1)
bal.add(+inv.value()*1.1)
invg.add(-inv.value())
inv.add(-inv.value())
}
}else{
Bot.sendMessage("*❌ No hay inversiones activas*")
}
}
